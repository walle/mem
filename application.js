// Disable scroll
document.addEventListener('touchmove', function (event){
  event.preventDefault();
});

function Observerable () {}

Observerable.prototype.addObserver = function (observer, context) {
  this.observers = this.observers || [];
  this.observers.push({block: observer, context: context || null});
};

Observerable.prototype.notifyObservers = function () {
  for (var i = 0; i < (this.observers || []).length; i++) {
    var observer = this.observers[i];
    observer.block.apply(observer.context, arguments);
  }
};

Observerable.mixin = function (target) {
  Object.keys(Observerable.prototype).forEach(function (property) {
    target[property] = Observerable.prototype[property];
  });
};

var CARD_IMAGES = ['camera', 'clock', 'glass', 'home', 'music', 'umbrella', 'bin', 'car', 'dog', 'heart', 'leaf', 'star'];


// Board

function Board() {
  this.width = 4;
  this.height = 6;
  this.cards = new Array(this.height);
  for (var row = 0; row < this.height; row++) {
    this.cards[row] = new Array(this.width);
  }
}

Board.prototype.prepare = function() {
  for (var row = 0; row < this.height; row++) {
    for(var column = 0; column < this.width; column++) {
      this.cards[row][column] = new Card(column, row, 'clock');
    }
  }
  this.notifyObservers('prepared');
};

Observerable.mixin(Board.prototype);

// Card

function Card(x, y, image) {
  this.x = x;
  this.y = y;
  this.image = image;
  this.open = false;
}

Card.prototype.render = function() {
  return '<div class="card" data-x="' + this.x + '" data-y="' + this.y + '"><img src="./images/' + this.image + '.png" alt="' + this.image + '" /></div>';
};

// Board view

function BoardView(controller) {
  this.controller = controller;
  this.board = controller.board;
  this.canvas = document.getElementById('board');

  var handleInteraction = function (event) {
    var touch = event.touches && event.touches[0];
    var target;

    if (touch) {
      target = document.elementFromPoint(touch.pageX, touch.pageY);
    }
    else {
      target = event.target;
    }

    if (target.hasAttribute('data-x') && target.hasAttribute('data-y')) {
      this.controller.handleInteraction(target.attributes['data-x'].value, target.hasAttribute('data-y').value);
    }
  };

  this.canvas.addEventListener('click', handleInteraction);
  this.canvas.addEventListener('touchstart', handleInteraction);
  this.canvas.addEventListener('touchmove', handleInteraction);

  // Listen for updates on the model.
  this.board.addObserver(function (event) {
    if (event == 'prepared') {
      this.renderInitial();
    }
    else {
      this.render();
    }
  }, this);
}

BoardView.prototype.renderInitial = function() {
  var html = '';
  for (var row = 0; row < this.board.height; row++) {
    for(var column = 0; column < this.board.width; column++) {
      var card = this.board.cards[row][column];
      html += card.render();
    }
  }
  this.canvas.innerHTML = html;
};

// Game controller

function GameController (board) {
  this.board = board;
}

GameController.prototype.handleInteraction = function (x, y) {
  this.board.flipCard(x, y);
};

GameController.prototype.start = function () {
  this.board.prepare();
};

// Application
var board = new Board();
var gameController = new GameController(board);
var boardView = new BoardView(gameController);

gameController.start();
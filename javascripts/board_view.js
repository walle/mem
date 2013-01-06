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

    target = target.parentElement; // Card is wrapper to front and back divs

    if (target.hasAttribute('data-x') && target.hasAttribute('data-y')) {
      controller.handleInteraction(target.attributes['data-x'].value, target.attributes['data-y'].value);
    }
  };

  this.canvas.addEventListener('click', handleInteraction);

  // Listen for updates on the model.
  this.board.addObserver(function (event, card) {
    if (event == 'prepared') {
      this.renderInitial();
    }
    else if (event == 'flip') {
      var cardElement = document.getElementById(card.id);
      cardElement.classList.toggle('flipped');
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
function BoardView(controller) {
  this.controller = controller;
  this.board = controller.board;
  this.player = controller.player;
  this.canvas = document.getElementById('board');

  var handleInteraction = function (event) {
    event.preventDefault();
    var target = event.target;
    target = target.parentElement; // Card is wrapper to front and back divs

    if (target.hasAttribute('data-x') && target.hasAttribute('data-y')) {
      controller.handleInteraction(target.attributes['data-x'].value, target.attributes['data-y'].value);
    }
  };

  this.canvas.addEventListener('click', handleInteraction);
  this.canvas.addEventListener('touchstart', handleInteraction);

  this.board.addObserver('prepared', function(e) {
    this.renderInitial();
  }, this);

  this.board.addObserver('flip', function(e, card) {
    var cardElement = document.getElementById(card.id);
    cardElement.classList.toggle('flipped');
    this.player.clicks++;
  }, this);

  this.board.addObserver('match', function(e) {
    this.player.pairs++;
    if (this.player.pairs === this.board.numberOfPairs()) {
      var gameOver = '<div id="game-over">' +
                        '<h1>' + t('you_win') + '</h1>' +
                        '<ul class="options">' +
                          '<li><a id="restart-button" href="#restart">' + t('restart') + '</a></li>' +
                          '<li><a id="quit-button" href="#quit">' + t('quit') + '</a></li>' +
                        '</ul>' +
                      '</div>';
      this.canvas.innerHTML += gameOver;
      var restartButton = document.getElementById('restart-button');
      restartButton.addEventListener('click', this.controller.restart);
      restartButton.addEventListener('touchstart', this.controller.restart);
      var quitButton = document.getElementById('quit-button');
      quitButton.addEventListener('click', function () {
        window.location = 'index.html';
      });
      quitButton.addEventListener('touchstart', function () {
        window.location = 'index.html';
      });
    }
  }, this);

  this.board.addObserver('flipBack', function(e, cards) {
    setTimeout(function () {
      cards.forEach(function (card) {
        var cardElement = document.getElementById(card.id);
        cardElement.classList.toggle('flipped');
      });
    }, 1000);
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
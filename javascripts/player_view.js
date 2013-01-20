function PlayerView (controller) {
  this.controller = controller;
  this.player = this.controller.player;
  this.canvas = document.getElementById('player');

  this.render();
  var view = this;
  this.tick = setInterval(function () {
    view.player.seconds++;
    view.render();
  }, 1000);

  this.controller.board.addObserver('flip', function(e) {
    this.render();
  }, this);

  this.controller.board.addObserver('match', function(e) {
    this.render();
    if (this.player.pairs === this.controller.board.numberOfPairs()) {
      clearInterval(this.tick);
    }
  }, this);
}

PlayerView.prototype.render = function() {
  this.canvas.innerHTML = '<h2>' + this.player.name + '</h2><p>' + t('clicks') + ': ' + this.player.clicks + '</p><p>' + t('pairs') + ': ' + this.player.pairs + '</p><p>' + t('time') + ': ' + this.player.humanTime() + '</p>';
};
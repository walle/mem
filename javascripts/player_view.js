function PlayerView (controller) {
  this.controller = controller;
  this.player = this.controller.player;
  this.canvas = document.getElementById('player');

  this.render();
  var view = this;
  setInterval(function () {
    view.player.seconds++;
    view.render();
  }, 1000);

  this.controller.board.addObserver('flip', function(e) {
    this.render();
  }, this);

  this.controller.board.addObserver('match', function(e) {
    this.render();
  }, this);
}

PlayerView.prototype.render = function() {
  this.canvas.innerHTML = '<h2>' + this.player.name + '</h2><p>Clicks: ' + this.player.clicks + '</p><p>Pairs: ' + this.player.pairs + '</p><p>Time: ' + this.player.humanTime() + '</p>';
};
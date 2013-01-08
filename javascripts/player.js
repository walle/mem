function Player () {
  this.name = localStorage["mem.player.name"];
  this.clicks = 0;
  this.pairs = 0;
  this.seconds = 0;
};

Player.prototype.humanTime = function () {
  return this.seconds.toString();
}
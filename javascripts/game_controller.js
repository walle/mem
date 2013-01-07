function GameController (board, player) {
  this.board = board;
  this.player = player;
}

GameController.prototype.handleInteraction = function (x, y) {
  this.board.flipCard(x, y);
};

GameController.prototype.start = function () {
  this.board.prepare();
};
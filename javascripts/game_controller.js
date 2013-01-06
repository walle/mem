function GameController (board) {
  this.board = board;
}

GameController.prototype.handleInteraction = function (x, y) {
  this.board.flipCard(x, y);
};

GameController.prototype.start = function () {
  this.board.prepare();
};
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

GameController.prototype.restart = function () {
  board = new Board();
  player = new Player(preferences.playerName);
  gameController = new GameController(board, player);
  boardView = new BoardView(gameController);
  playerView = new PlayerView(gameController);

  gameController.start();
};
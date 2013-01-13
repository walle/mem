var board = new Board();
var player = new Player(preferences.playerName);
var gameController = new GameController(board, player);
var boardView = new BoardView(gameController);
var playerView = new PlayerView(gameController);

gameController.start();
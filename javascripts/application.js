// Disable scroll
document.addEventListener('touchmove', function (event){
  event.preventDefault();
});

var board = new Board();
var player = new Player();
var gameController = new GameController(board, player);
var boardView = new BoardView(gameController);

gameController.start();
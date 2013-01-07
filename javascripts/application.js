// Disable scroll
document.addEventListener('touchmove', function (event){
  event.preventDefault();
});

var board = new Board();
var gameController = new GameController(board);
var boardView = new BoardView(gameController);

gameController.start();
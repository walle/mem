// Disable scroll
document.addEventListener('touchmove', function (event){
  event.preventDefault();
});

var CARD_IMAGES = ['camera', 'clock', 'glass', 'home', 'music', 'umbrella', 'bin', 'car', 'dog', 'heart', 'leaf', 'star'];
var CARD_SIZE = 80;
var CARD_MARGIN = 15;

var board = new Board();
var gameController = new GameController(board);
var boardView = new BoardView(gameController);

gameController.start();
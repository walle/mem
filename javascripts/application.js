// Disable scroll
document.addEventListener('touchmove', function (event){
  event.preventDefault();
});

function setHight () {
  document.getElementById('game').style.height = window.innerHeight + 'px';
}
setHight();
window.onresize = setHight;

var board = new Board();
var player = new Player();
var gameController = new GameController(board, player);
var boardView = new BoardView(gameController);

gameController.start();
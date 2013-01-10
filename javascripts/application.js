// Disable scroll
document.addEventListener('touchmove', function (event){
  event.preventDefault();
});

function setHight () {
  document.getElementById('game').style.height = window.innerHeight + 'px';
}
setHight();
window.onresize = setHight;

function storePlayerNameAndPlay () {
  var input = document.getElementsByTagName('input')[0];
  options.playerName = input.value;
  options.save();
  window.location = 'play.html';
}

function handlePlayButtonClick (event) {
  if (!options.playerName) {
    event.preventDefault();
    var game = document.getElementById('game');
    game.innerHTML = '<input type="text"/><input type="submit" value="Play" />' + game.innerHTML;
    var submit = document.getElementsByTagName('input')[1];
    submit.addEventListener('click', storePlayerNameAndPlay);
  }
}

var playButton = document.getElementById('play-button');
if (playButton) {
  playButton.addEventListener('click', handlePlayButtonClick);
  playButton.addEventListener('touchstart', handlePlayButtonClick);
} else {
  var board = new Board();
  var player = new Player(options.playerName);
  var gameController = new GameController(board, player);
  var boardView = new BoardView(gameController);
  var playerView = new PlayerView(gameController);

  gameController.start();
}
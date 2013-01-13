function Menu() {
  this.playButton = document.getElementById('play-button');
  this.optionsButton = document.getElementById('options-button');

  this.playButton.innerHTML = t('play');
  this.optionsButton.innerHTML = t('options');

  this.playButton.addEventListener('click', this.playButtonClick);
  this.playButton.addEventListener('touchstart', this.playButtonClick);
}

Menu.prototype.playButtonClick = function (event) {
  if (!options.playerName) {
    event.preventDefault();
    var game = document.getElementById('game');
    game.innerHTML = '<input type="text"/><input type="submit" value="Play" />' + game.innerHTML;
    var submit = document.getElementsByTagName('input')[1];
    submit.addEventListener('click', menu.storePlayerNameAndPlay);
  }
};

Menu.prototype.storePlayerNameAndPlay = function () {
  var input = document.getElementsByTagName('input')[0];
  options.playerName = input.value;
  options.save();
  window.location = 'play.html';
};

var menu = new Menu();
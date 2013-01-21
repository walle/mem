function Menu() {
  this.playButton = document.getElementById('play-button');
  this.optionsButton = document.getElementById('options-button');

  this.playButton.innerHTML = t('play');
  this.optionsButton.innerHTML = t('options');

  if (!this.playButton.touchstart) {
    this.playButton.addEventListener('click', this.playButtonClick);
  } else {
    this.playButton.addEventListener('touchstart', this.playButtonClick);
  }
}

Menu.prototype.playButtonClick = function (event) {
  if (!preferences.playerName) {
    event.preventDefault();
    var game = document.getElementById('game');
    game.innerHTML = '<div id="player-name-prompt"><input type="text" value="' + t('your_name') + '"/><input type="submit" value="Play" /></div>' + game.innerHTML;
    var prompt = document.getElementById('player-name-prompt');
    prompt.classList.toggle('show');
    var input = document.getElementsByTagName('input')[0];
    input.addEventListener('focus', function () { this.value = ''; });
    var submit = document.getElementsByTagName('input')[1];
    if (!submit.touchstart) {
      submit.addEventListener('click', menu.storePlayerNameAndPlay);
    } else {
      submit.addEventListener('touchstart', menu.storePlayerNameAndPlay);
    }
  }
};

Menu.prototype.storePlayerNameAndPlay = function () {
  var input = document.getElementsByTagName('input')[0];
  preferences.playerName = input.value;
  preferences.save();
  window.location = 'play.html';
};

var menu = new Menu();
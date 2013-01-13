function Options () {
  this.form = document.getElementsByTagName('form')[0];
  this.saveButton = document.getElementById('save-button');
  this.playerNameLabel = document.getElementById('player-name-label');
  this.playerNameInput = document.getElementById('player-name');
  this.languages = document.getElementsByName('selectedLanguage');

  document.getElementsByTagName('h1')[0].innerHTML = t('options');
  document.getElementsByTagName('h2')[0].innerHTML = t('language');
  this.saveButton.value = t('save');
  this.playerNameLabel.innerHTML = t('your_name');
  this.playerNameInput.value = preferences.playerName;

  for (var i = 0; i < this.languages.length; i++) {
    if(this.languages[i].value === preferences.selectedLanguage) {
      this.languages[i].checked = 'checked';
    }
  }

  this.form.addEventListener('submit', this.save);
}

Options.prototype.save = function (event) {
  event.preventDefault();

  preferences.playerName = options.playerNameInput.value;
  for (var i = 0; i < options.languages.length; i++) {
    if(options.languages[i].checked) {
      preferences.selectedLanguage = options.languages[i].value;
    }
  }
  preferences.save();

  window.location = 'index.html';
};

var options = new Options();

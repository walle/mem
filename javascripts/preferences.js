function Preferences () {
  this.playerName = localStorage["mem.player.name"];
  this.selectedLanguage = localStorage["mem.selected.language"] || 'en';
}

Preferences.prototype.save = function () {
  localStorage["mem.player.name"] = this.playerName;
  localStorage["mem.selected.language"] = this.selectedLanguage;
};

var preferences = new Preferences();
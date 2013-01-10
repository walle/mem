function Options () {
  this.playerName = localStorage["mem.player.name"];
  this.selectedLanguage = localStorage["mem.selected.language"] || 'en';
}

Options.prototype.save = function () {
  localStorage["mem.player.name"] = this.playerName;
  localStorage["mem.selected.language"] = this.selectedLanguage;
};

var options = new Options();
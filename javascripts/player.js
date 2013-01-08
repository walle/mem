function Player () {
  this.name = localStorage["mem.player.name"];
  this.clicks = 0;
  this.pairs = 0;
  this.seconds = 0;
}

Player.prototype.humanTime = function () {
  var hours = Math.floor(this.seconds / 3600);
  var minutes = Math.floor((this.seconds - (hours * 3600)) / 60);
  var seconds = this.seconds - (hours * 3600) - (minutes * 60);

  var time = '';

  if (hours >= 1) {
    time += hours + ' ' + ( hours > 1 ? t('hours') : t('hour')) + ' ';
  }
  if (minutes >= 1) {
    time += minutes + ' ' + ( minutes > 1 ? t('minutes') : t('minute')) + ' ';
  }

  time += seconds + ' ' + ( seconds === 1 ? t('second') : t('seconds')) + ' ';

  return time;
};
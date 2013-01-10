var translations = {
  en: {
    play: 'Play',
    clicks: 'Clicks',
    pairs: 'Pairs',
    time: 'Time',

    hour: 'hour',
    hours: 'hours',
    minute: 'minute',
    minutes: 'minutes',
    second: 'second',
    seconds: 'seconds'
  },
  sv: {
    play: 'Spela',
    clicks: 'Klick',
    pairs: 'Par',
    time: 'Tid',

    hour: 'timma',
    hours: 'timmar',
    minute: 'minut',
    minutes: 'minuter',
    second: 'sekund',
    seconds: 'sekunder'
  }
};

function t(key) {
  if (translations[options.selectedLanguage][key]) {
    return translations[options.selectedLanguage][key];
  }

  return 'Translation missing for {' + key + '}';
}
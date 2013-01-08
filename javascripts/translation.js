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

var selectedLanguage = 'en';

function t(key) {
  if (translations[selectedLanguage][key]) {
    return translations[selectedLanguage][key];
  }

  return 'Translation missing for {' + key + '}';
}
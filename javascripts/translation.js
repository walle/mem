var translations = {
  en: {
    play: 'Play',
    options: 'Options',
    language: 'Language',
    save: 'Save',
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
    options: 'Alternativ',
    language: 'Språk',
    save: 'Spara',
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
  if (translations[preferences.selectedLanguage][key]) {
    return translations[preferences.selectedLanguage][key];
  }

  return 'Translation missing for {' + key + '}';
}
var CARD_IMAGES = ['cat', 'hummingbird', 'moose', 'rabbit', 'rooster', 'tarantula', 'eagle', 'kiwi', 'orange', 'raven', 'rose', 'toy-car'];

function Deck () {
  var cards = [];
  CARD_IMAGES.forEach(function (image) {
    cards.push(new Card(0, 0, image));
    cards.push(new Card(0, 0, image));
  });
  this.cards = cards;
}

Deck.prototype.getShuffledCards = function() {
  return this.cards.shuffle();
}
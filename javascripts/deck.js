var CARD_IMAGES = ['camera', 'clock', 'glass', 'home', 'music', 'umbrella', 'bin', 'car', 'dog', 'heart', 'leaf', 'star'];

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
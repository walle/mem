function Board() {
  this.width = 4;
  this.height = 6;
  this.flippedCards = [];
  this.deck = new Deck();
  this.cards = new Array(this.height);
  for (var row = 0; row < this.height; row++) {
    this.cards[row] = new Array(this.width);
  }
}

Board.prototype.prepare = function() {
  var cards = this.deck.getShuffledCards();
  for (var row = 0; row < this.height; row++) {
    for(var column = 0; column < this.width; column++) {
      card = cards[row * this.width + column];
      this.cards[row][column] = new Card(column, row, card.image);
    }
  }
  this.notifyObservers('prepared');
};

Board.prototype.flipCard = function(x, y) {
  var card = this.cards[y][x];
  if (this.flippedCards.length < 2 && card.flipped === false) {
    card.flipped = true;
    this.notifyObservers('flip', card);
    this.flippedCards.push(card);
    if (this.flippedCards.length === 2) {
      if (this.flippedCards[0].image ===  this.flippedCards[1].image) {
        this.notifyObservers('match');
      } else {
        this.flippedCards.forEach(function (card) {
          card.flipped = false;
        });
        this.notifyObservers('flipBack', this.flippedCards);
      }
      this.flippedCards = [];
    }
  }
};

Board.prototype.numberOfPairs = function () {
  return ((this.width * this.height) / 2);
};

Observerable.mixin(Board.prototype);
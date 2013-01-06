function Board() {
  this.width = 4;
  this.height = 6;
  this.flippedCards = [];
  this.cards = new Array(this.height);
  for (var row = 0; row < this.height; row++) {
    this.cards[row] = new Array(this.width);
  }
}

Board.prototype.prepare = function() {
  for (var row = 0; row < this.height; row++) {
    for(var column = 0; column < this.width; column++) {
      // TODO: Make sure all cards is used and create a pair of cards
      image = CARD_IMAGES[Math.floor(Math.random() * CARD_IMAGES.length)];
      this.cards[row][column] = new Card(column, row, image);
    }
  }
  this.notifyObservers('prepared');
};

Board.prototype.flipCard = function(x, y) {
  var card = this.cards[y][x];
  if (this.flippedCards.length < 2) {
    this.notifyObservers('flip', card);
    this.flippedCards.push(card);
    if (this.flippedCards.length === 2) {
      if (this.flippedCards[0].image ===  this.flippedCards[1].image) {
        this.notifyObservers('match'); // TODO: Points and player turns?
      } else {
        this.notifyObservers('flipBack', this.flippedCards);
      }
      this.flippedCards = [];
    }
  }
};

Observerable.mixin(Board.prototype);
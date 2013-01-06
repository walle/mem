function Board() {
  this.width = 4;
  this.height = 6;
  this.cards = new Array(this.height);
  for (var row = 0; row < this.height; row++) {
    this.cards[row] = new Array(this.width);
  }
}

Board.prototype.prepare = function() {
  for (var row = 0; row < this.height; row++) {
    for(var column = 0; column < this.width; column++) {
      this.cards[row][column] = new Card(column, row, 'clock');
    }
  }
  this.notifyObservers('prepared');
};

Board.prototype.flipCard = function(x, y) {
  var card = this.cards[y][x];
  this.notifyObservers('flip', card);
};

Observerable.mixin(Board.prototype);
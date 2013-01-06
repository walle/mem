function Card(x, y, image) {
  this.x = x;
  this.y = y;
  this.image = image;
  this.open = false;
  this.id = 'card-' + this.y + '-' + this.x;
}

Card.prototype.render = function() {
  return '<div id="' + this.id + '" style="width:' + CARD_SIZE + 'px;height:' + CARD_SIZE + 'px;top:' + this.y * CARD_SIZE + 'px;left:' + this.x * CARD_SIZE + 'px;" class="card" data-x="' + this.x + '" data-y="' + this.y + '">' +
            '<div class="front">' +
            this.id +
            '</div>' +
            '<div class="back">' +
              '<img src="./images/' + this.image + '.png" alt="' + this.image + '" />' +
            '</div>' +
          '</div>';
};
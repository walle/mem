function Card(x, y, image) {
  this.x = x;
  this.y = y;
  this.image = image;
  this.flipped = false;
  this.id = 'card-' + this.y + '-' + this.x;
}

Card.prototype.render = function() {
  return '<div id="' + this.id + '" class="card" data-x="' + this.x + '" data-y="' + this.y + '">' +
            '<div class="back"></div>' +
            '<div class="front">' +
              '<img src="./images/' + this.image + '.png" alt="' + this.image + '" />' +
            '</div>' +
          '</div>';
};
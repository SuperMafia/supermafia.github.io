function Squares(){
  this.side = 25;
  this.posX = random(width);
  this.posY = random(height);
  this.speedX = 1;
  this.speedY = 1;
  this.dirX = 1;
  this.dirY = 1;
  this.r = random(255);
}

Squares.prototype.drawSquare = function() {

  push();

  rectMode(CENTER);
  translate(683, 384);
  fill(this.r, 0, 0);
  rect(0, 0, this.side, this.side);

  pop();
  this.move();
}

Squares.prototype.moveSquare = function() {
  this.posX = this.posX + (this.dirX*this.speedX);
  this.posY = this.posY + (this.dirY*this.speedY);
  if(this.posX >= width || this.posX <= 0){
    this.dirX = -1*this.dirX;
    this.speedX = random(5);
    if(this.posX >= width){
      this.posX = width - 1;
    }
    if(this.posX <= 0){
      this.posX = 1;
    }
  }
  if(this.posY >= height || this.posY <= 0){
    this.dirY = -1*this.dirY;
    this.speedY = random(10);
    if(this.posY >= height){
      this.posY = height - 1;
    }
    if(this.posY <= 0){
      this.posY = 1;
    }
  }
};

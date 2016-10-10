function Squares(){
  this.posX = random((3*width)/8, (5*width)/8);
  this.posY = random((3*height)/8, (5*height)/8);
  this.speedX = 2;
  this.speedY = 2;
  this.dirX = 1;
  this.dirY = 1;
  this.r = random(225,255);
  this.g = random(0, 113);
  this.b = random(153, 182);
}

Squares.prototype.drawSquare = function() {

  push();

  translate(this.posX, this.posY);
  fill(this.r, this.g, this.b);
  noStroke();
  quad(-25, -25, 15, 0, 25, 25, -15, 0);

  pop();
  this.moveSquare();
}

Squares.prototype.moveSquare = function() {
  this.posX = this.posX + (this.dirX*this.speedX);
  this.posY = this.posY + (this.dirY*this.speedY);
  if(this.posX >= width || this.posX <= 0){
    this.dirX = -1*this.dirX;
    this.speedX = random(5,25);
    if(this.posX >= width){
      this.posX = width - 1;
    }
    if(this.posX <= 0){
      this.posX = 1;
    }
  }
  if(this.posY >= height || this.posY <= 0){
    this.dirY = -1*this.dirY;
    this.speedY = random(5,10);
    if(this.posY >= height){
      this.posY = height - 1;
    }
    if(this.posY <= 0){
      this.posY = 1;
    }
  }
};

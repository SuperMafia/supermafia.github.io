function Squares(){
  this.posX = 50;
  this.posY = 50;
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
  quad(0, 0, 20, 30, 0, 60, -20, 30);

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

//Defined all the parameters for my Diamonds. It used to be squares, though it morphed into Diamonds because Steven Universe references and diamond shapes. Includes base speed and position.
function Squares(){
  this.posX = 1; //PosX and PosY has every diamond placed inside one another.
  this.posY = 1;
  this.speedX = 1;
  this.speedY = 2;
  this.dirX = 1; //All diamonds move down and right at a speed of 2.
  this.dirY = 1;
  this.r = random(225,255); //Allows me to control the colors to just be variants of pink.
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
    this.speedX = random(5,20); //Sets speed in between 5 up to 25.
    if(this.posX >= width){
      this.posX = width - 1;
    }
    if(this.posX <= 0){
      this.posX = 1;
    }
  }
  if(this.posY >= height || this.posY <= 0){
    this.dirY = -1*this.dirY;
    this.speedY = random(5, 15); //Sets speed to be 5 up to 15 or any floats in between.
    if(this.posY >= height){
      this.posY = height - 1;
    }
    if(this.posY <= 0){
      this.posY = 1;
    }
  }
};

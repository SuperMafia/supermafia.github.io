var movingSquares = { //To start, I needed to define a posX, posY, side, speed, and direction.
  posX: 200,
  posY: 200,
  side: 30,
  speed: 1,
  dirY: 1,
  move: function(){
      this.posY = this.posY + (this.speed * this.dirY);
      if (this.posY >= 500 || this.posY <= 0){
        this.dirY = -this.dirY
      }
  },
  drawing: function(){
    translate(500, 250); //Previously, an i variable was here, though it was redundant.
    rectMode(CENTER); //Instead of moving based on the top-left corner, I used this mode to follow it based on the Center.
    rect(this.posX, this.posY, this.side, this.side);
    ellipse(100, 100, this.side, this.side);
    noStroke();
    fill(random(255), random(255), random(255)); //Just a randomized fill with no constant color.
  },
  grow: function(){ //Decided to give a random variable to a growth function.
    this.side = this.side + random(-1, 1)
  },
  setupSquares: function(){
    this.posX = random(-400, 400);
  },
}
function setup() {
  createCanvas(1000, 500);
  movingSquares.setupSquares();
  frameRate(60); //Just to make sure everything works well with speed.
}

function draw() {
  background(0, 15); //Reintroducing the trippy effects here, man!
  movingSquares.drawing();
  movingSquares.move();
  movingSquares.grow();
}

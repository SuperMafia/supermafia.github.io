var movingSquares = { //To start, I needed to define a posX, posY, side, speed, and direction.
  posX: 0,
  posY: 0,
  side: 30,
  speed: 3,
  dir: 1,
  move: function(){
    if(this.posY < 300 && this.posY > -300){ //This serves the purpose of allowing the square to loop back.
      this.posY = this.posY + (this.speed * this.dir);
    } 
    else { //This portion is what causes the loop in general.
      this.posY = -this.posY + (this.speed * this.dir);
    }
  },
  drawing: function(){
    translate(500, 250); //Previously, an i variable was here, though it was redundant.
    rectMode(CENTER); //Instead of moving based on the top-left corner, I used this mode to follow it based on the Center.
    rect(this.posX, this.posY, this.side, this.side);
    noStroke();
    fill(random(255), random(255), random(255)); //Just a randomized fill with no constant color.
  },
  grow: function(){ //Decided to give a random variable to a growth function.
    this.side = this.side + random(-1, 1)
  },
}
function setup() {
  createCanvas(1000, 500);
  frameRate(60) //Just to make sure everything works well with speed.
}

function draw() {
  background(0, 15); //Reintroducing the trippy effects here, man!
  movingSquares.drawing();
  movingSquares.move();
  movingSquares.grow();
}

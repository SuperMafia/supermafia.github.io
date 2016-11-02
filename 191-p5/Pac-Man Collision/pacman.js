function PacMan (posX, posY){
//Creation of the Pac-Men
  this.diameter = 50;
  this.radius = this.diameter/2
  this.eyeDiameter = 10;
  this.r = (200, 255);
  this.g = (200, 255);
//Position and Other Stuff I need notes on.
  this.posX = posX;
  this.posY = posY;
  this.xChange = 0;
  this.yChange = 0;
  this.change = 0;
  this.direction = 0;
  this.maxChange = 4;
  this.wait = false;
//Mouth Animation
  this.mouthAngle = (1/4);
  this.mouthSpeed = 1;
//Timer
  this.curTime = 0;
  this.maxTime = 4;
  this.tarTime = random(this.maxTime);
};

PacMan.prototype.drawPacMan = function(){

  this.timePacMan();
  this.pacMove();

  push();

  translate(this.posX, this.posY);
  if ( this.direction === 0 ) {
	} else if ( this.direction === 1 ) {
		rotate(PI/2);
	} else if ( this.direction === 2 ) {
		scale(-1, 1);
	} else if ( this.direction === 3 ) {
		rotate(-PI/2);
	}

  fill(this.r, this.g, 0);
  arc(this.posX, this.posY, this.diameter, this.diameter, this.mAng, 0 - this.mAng, PIE);
  fill(0, 0, 0);
  arc(this.posX+7.5, this.posY-12.5, this.eyeDiameter*(2/3), this.eyeDiameter, 1/4*PI, 0 - 1/4*PI, PIE);

  pop();
};

PacMan.prototype.pacMove = function(){
  if(!this.wait){
    this.posX += this.xChange;
    this.posY += this.yChange;
  }
  this.mAng = radians(this.mouthAngle);
  this.mouthAngle = this.mouthAngle + this.mouthSpeed
  if(this.mouthAngle > 45 || this.mouthAngle <= 0.5){
    this.mouthSpeed = this.mouthSpeed * -1;
  } //Since I've added on a Pac-Maze border, it'll be 50 less than height and width and 50 more than 0.

  if(this.posX + this.radius >= 500){
    this.posX = 500 - this.radius;
    this.xChange = 0;
  } else if(this.posX - this.radius <= 100){
    this.posX = 50 + this.radius;
    this.xChange = 0;
  }

  if(this.posY + this.radius >= 900){
    this.posY = 900 - this.radius;
    this.yChange = 0;
  } else if(this.posY - this.radius <= 100){
    this.posY = 50 + this.radius;
    this.yChange = 0;
  }
};

PacMan.prototype.timePacMan = function(){
  var curTime = this.curTime/frameRate();
  if(curTime >= this.tarTime){
    this.changeDirection(); //Executes function changeDirection inside function timePacMan.
  }
  else {
    this.curTime++
  }
};

PacMan.prototype.changeDirection = function(){
  var changeDir;

  this.curTime = 0;
  this.tarTime = random(this.maxTime);

  do {
		changeDir = floor( random(4) );
	} while ( changeDir == this.direction );

	this.direction = changeDir;

  this.change = random(this.maxChange);

  if(changeDir === 0){ //Eastwards
    this.xChange = this.change;
    this.yChange = 0;
  }else if(changeDir === 1){ //Southward
    this.xChange = 0;
    this.yChange = this.change;
  }else if(changeDir === 2){ //Westward
    this.xChange = -this.change;
    this.yChange = 0;
  }else if(changeDir === 3){ //Northward
    this.xChange = 0;
    this.yChange = -this.change;
  }
};

PacMan.prototype.disCheck = function(pacArray){
  var minDis = 0;
  var curDis = 0;
  var xDifference = 0;
  var yDifference = 0;

  this.wait = false;
  for(var i=0; i < pacArray.length; i++){
    curDis = (this.posX, this.posY, pacArray.posX);
    minDis = this.radius + abs(this.xChange) + abs(this.yChange), pacArray.radius;

    xDifference = pacArray[i].posX - this.posX;
    yDifference = pacArray[i].posY - this.posY;
    if(this.direction === 0 && curDis <= minDis && xDifference > 0){
      this.wait = true; //Checks for any conflicts to the right
    }else if(this.direction === 1 && curDis <= minDis && yDifference > 0){
      this.wait = true; //Checks for any conflicts below it
    }else if(this.direction === 2 && curDis <= minDis && xDifference < 0){
      this.wait = true; //Checks for any conflicts to the left
    }else if(this.direction === 3 && curDis <= minDis && yDifference < 0){
      this.wait = true; //Checks for any conflicts above it
    }
  }
};

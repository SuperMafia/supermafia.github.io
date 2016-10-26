var pacArray = [];
var pacmen = 5

function setup() {
  createCanvas(1000, 600);
  for(var i = 0; i < pacmen; i++){
    pacArray.push(new PacMan((i+1)*80, (i+1)*50));
  }
}

function draw() {
  var boxArr = [];

  background(0);
  rectMode(CENTER);
  stroke(0, 0, 255); //Just to give it a more pac-man feel.
  fill(0);
  rect(width/2, height/2, 1000, 600, 45);
  rect(width/2, height/2, 950, 550, 45);
  noStroke();
  for(var i = 0; i < pacArray.length; i++){
    pacArray[i].drawPacMan();
    boxArr = pacArray.slice(0,i); //The Sub Problem (Only one Pac-Man appears)
    boxArr = boxArr.concat( pacArray.slice(0, pacArray.length) ); //Doesn't really do anything so far.
    pacArray[i].disCheck(boxArr); //The Main Problem (causes crashing with boxArr)
  }
}

var pacArray = [];
var numPacMen = 5;

function setup() {
  createCanvas(1000, 600);
  for(var i = 0; i < numPacMen; i++){
    pacArray[i].push(new PacMan((i+1)*80, height*(i/numPacMen)));
  }
}

function draw() {
  var boxArr = []
  background(0);
  rectMode(CENTER);
  stroke(0, 0, 255); //Just to give it a more pac-man feel.
  noFill();
  rect(width/2, height/2, 500, 300);
  rect(width/2, height/2, 450, 250);
  for(var i = 0; i < pacArray.length; i++){
    boxArr = pacArray.splice(0,i);
    boxArr = boxArr.concat(pacArray.slice(i+1, pacArray.length));
    pacArray[i].checkPos(boxArr);
    pacArray[i].drawPacMan();
  }
}

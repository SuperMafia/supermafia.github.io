var pacArray = [];
var pacmen = 5

function setup() {
  createCanvas(1000, 600);
  for(var i = 0; i < pacmen; i++){
    pacArray.push(new PacMan((i+1)*80, 100));
  }
}

function draw() {
  var boxArr = [];
  background(0);
  rectMode(CENTER);
  stroke(0, 0, 255); //Just to give it a more pac-man feel.
  noFill();
  rect(width/2, height/2, 1000, 600);
  rect(width/2, height/2, 950, 550);
  for(var i = 0; i < pacArray.length; i++){
    boxArr = pacArray.splice(0,i);
    boxArr = boxArr.concat(pacArray.slice(i+1, pacArray.length));
    pacArray[i].disCheck();
    pacArray[i].drawPacMan();
  }
}

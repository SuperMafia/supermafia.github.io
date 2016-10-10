var squareArray = [];

function setup() {
  createCanvas(1366, 768);

  for(var i = 0; i < 300; i++){
    squareArray.push(new Squares(random(256),random(256),random(256)))
  }
}

function draw() {
  background(0, 0, 0);
  for(var i = 0; i < squareArray.length; i++){
    squareArray[i].drawSquare();
  }
}

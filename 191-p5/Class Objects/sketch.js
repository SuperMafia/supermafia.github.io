var squareArray = [];

function setup() {
  createCanvas(1366, 768);

  for(var i = 0; i < 500; i++){
    squareArray.push(new Squares())
  }
}

function draw() {
  background(0, 0, 0);
  for(var i = 0; i < squareArray.length; i++){
    squareArray[i].drawSquare();
  }
}

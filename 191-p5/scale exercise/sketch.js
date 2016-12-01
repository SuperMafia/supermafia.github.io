function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(0);
  scale(0.5, 0.5);
  noStroke();
  arc(100, 100, 100, 100, 1/4*PI, -1/4*PI, PIE);
  stroke(0);
  arc(112, 75, 12, 12, 1/4*PI, -1/4*PI, PIE);
}

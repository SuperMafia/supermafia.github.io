var x = 197.5
var y = 175

function preLoad() {
  img = loadImage(bugs.gif);
}

function setup() {
  createCanvas(395, 350);
 //frameRate(10);
}

function draw() {
  fill(mouseX, 0, 0, 50);
  background(mouseY, mouseX, mouseY, 25);
  noStroke();
  ellipse(width/2, height/2, mouseX, mouseY);

  var g = random(255)  
  fill(0, 0, g, 50)
  ellipse(x, y, 50, 50);
  x = x + random(-1, 1);
  y = y + random(-1, 1);
  
  var xWidth = random(width)
  var yHeight = random(width)
  fill(0, g, 0, 50)
  ellipse(xWidth, yHeight, 50, 50)
}
//This portion of code is the main definition for randomizing.
var x = 197.5
var y = 175

function preLoad() {
  //Here is what caused the "trippy" effect, since the image didn't load despite the file being in the same area.
  img = loadImage(bugs.gif);
}

function setup() {
  createCanvas(395, 350);
 //frameRate(60); seems to be the default frameRate setting.
}

function draw() {
  /*I used Mouse Mapping in order to change the background, as well as the fill and the
  circle's fill and the diameters of the circle*/
  fill(mouseX, 0, 0, 50);
  background(mouseY, mouseX, mouseY, 25);
  noStroke();
  ellipse(width/2, height/2, mouseX, mouseY);

  //Then, I tried to randomize only one color form here and allow a "controlled" random here.
  var g = random(255)  
  fill(0, 0, g, 50)
  ellipse(x, y, 50, 50);
  x = x + random(-1, 1);
  y = y + random(-1, 1);
  
  /*Since variable x and y were taken, I had to use "xWidth and yHeight" labeled with random(object)
  in order to achieve "true randomness" with this code.*/
  var xWidth = random(width)
  var yHeight = random(height)
  fill(0, g, 0, 50)
  ellipse(xWidth, yHeight, 50, 50)
}
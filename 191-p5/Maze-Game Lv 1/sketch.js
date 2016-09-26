  var x = 250; //Set up x, y, and speed variables.
  var y = 250;
  var speed = 1;
function setup() {
  createCanvas(1000, 500);
  frameRate(60) //Just to make sure everything works well with speed.
}

function draw() {
  if(mouseX >= 7 && mouseX <= 93 && mouseY >= 7 && mouseY <= 93){
    fill(0, 255, 0); //Mapped a rectangle with GUI with an if/else and AND statements.
  }
  else{
    fill(255, 0, 0);
  }
  background(255);
  stroke(0);
  rect(0, 0, 100, 100);

  fill(0);
  ellipse(mouseX, mouseY, 15, 15); //Mapped a small circle to my mouse position

  fill(255, 0, 255);
  for(var i = 0; i < 10; i++){
    rect((i*50)+200, x, 25, 25);
    x = x + speed //Since x was occupied here, I had to use a separate variable known as y.
    if(x > height-125 && x < 125);{ //FYI, this if statement doesn't work, but it can move.
    speed = -1
    }
    }
  for(var j = 0; j < 10; j++){
    rect((j*50)+175, y, 25, 25);
    y = y - speed //p5 is not very good with coding, at least not in the calibur of Atom.
    if(y < 125 && y > height-125){ //same with this, but it's positive progress, so it's fine.
      speed = -1
    }
  }
}

  var x = 250;
  var y = 250;
  var speed = 1;
function setup() {
  createCanvas(1000, 500);
  frameRate(60)
}

function draw() {
  if(mouseX >= 7 && mouseX <= 93 && mouseY >= 7 && mouseY <= 93){
    fill(0, 255, 0);
  }
  else{
    fill(255, 0, 0);
  }
  background(255);
  stroke(0);
  rect(0, 0, 100, 100);

  fill(0);
  ellipse(mouseX, mouseY, 15, 15);

  fill(255, 0, 255);
  for(var i = 0; i < 10; i++){
    rect((i*50)+200, x, 25, 25);
    x = x + speed
    if(x > height-125 && x < 125);{
    speed = -1
    }
    }
  for(var j = 0; j < 10; j++){
    rect((j*50)+175, y, 25, 25);
    y = y - speed
    if(y < 125 && y > height-125){
      speed = -1
    }
  }
}

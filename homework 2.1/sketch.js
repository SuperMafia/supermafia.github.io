function setup() {
  createCanvas(300, 300);
  background(0, 0, 0);
}

function draw() {
  var x = 150
  var y = 250
  var z = 170
  var a = 52
  
  stroke(0);
  fill(255, 255, 0);
  arc(x, x, 50, 50, QUARTER_PI, -HALF_PI+QUARTER_PI, PIE);
  
  stroke(0);
  fill(255, 0, 0);
  arc(50, x, 50, 50, PI, 0);
  
  stroke(255, 0, 0);
  fill(255, 0, 0);
  triangle(27, x, 27, z, a, x);
  triangle(a, x, a, z, 27, x);
  triangle(73, x, 73, z, a, x);
  triangle(a, x, a, z, 73, x);
  
  stroke(0);
  fill(255, 255, 100);
  ellipse(250, x, 25, 25);
  
  stroke(0);
  fill(255);
  ellipse(210, x, 15, 15);
  ellipse(170, x, 15, 15);
  ellipse(y, 190, 15, 15);
  ellipse(y, 230, 15, 15);
  ellipse(y, 270, 15, 15);
  
  stroke(255);
  fill(255);
  ellipse(38, 138, 10, 10);
  ellipse(62, 138, 10, 10);
  
  stroke(0, 0, 200);
  fill(0, 0, 200);
  ellipse(40, 138, 5, 5);
  ellipse(64, 138, 5, 5);
  
  rectMode(CENTER);
  noFill();
  stroke(0, 0, 255);
  rect(0, 300, 450, 250, 45);
  rect(0, 300, 350, 150, 45);
  
  stroke(0, 0, 255);
  arc(240, 170, 100, 100, -HALF_PI, 0);
  arc(0, 70, 100, 100, 0, HALF_PI)
  arc(150, 70, 100, 100, HALF_PI, PI)
  
  stroke(0, 0, 255);
  line(y, 120, x, 120)
  line(100, 0, 100, 80)
  line(50, 0, 50, 80);
  line(290, 170, 290, 300);
}
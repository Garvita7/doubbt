var hr = hour();
var mn = minute();
var sc = second();
var hrAngle, mnAngle, scAngle;



function setup() {
  createCanvas(800,800);

  hrAngle = map(hr%12, 0, 12, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  scAngle = map(sc, 0, 60, 0, 360);
 
}

function draw() {
  background(0);  

  push();
  rotate(hrAngle);
  stroke(225,0,0);
  strokeWeight(7);
  line(0,0,100,0);
  pop();

  push();
  rotate(mnAngle);
  stroke(0,225,0);
  strokeWeight(7);
  line(0,0,200,0);
  pop();

  push();
  rotate(scAngle);
  stroke(0,0,225);
  strokeWeight(7);
  line(0,0,300,0);
  pop();

  arc(0, 0, 400, 400, hrAngle, hrAngle);










  drawSprites();
}
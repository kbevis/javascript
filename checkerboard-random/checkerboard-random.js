function setup() {
  createCanvas(600, 600);
  stroke(0);
  strokeWeight(1);
  background(0);
  frameRate(2);
  noLoop();
}


function draw() {  
  for (var i = 0; i < 1; i++) { // row counter, width
  for(var j = 0; j < 1; j++) { // col counter, height 
  
  var size = random(25, width/8);
  var x = random(width);
  var y = random(height);

  fill(0, 255, 0); // green, replace with checkerboard
  rect(x, y, size, size);
  
  }
 }  
}
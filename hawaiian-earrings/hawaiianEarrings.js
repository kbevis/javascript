function setup() {
  createCanvas(500, 500);
  background(100);
  stroke(0, 255, 0);
  noLoop();
}

function draw() {
  hawaiianEarrings(width*0.5, height*0.1, 400, 10);
}

function hawaiianEarrings(x, y, radius, num) {
  
  for (var i = 0; i < num; i++) {
    noFill();
    ellipseMode(TOP);   
    ellipse(x, y + 0.5*radius/i, radius/i, radius/i);
  }
}

/*----------------------------
WORKS but num has no effect
function draw() {
  drawCircle(width/2, 200, 10);
}

function drawCircle(x, radius, num) {                    
  noFill();
  ellipse(x, height/2, radius*2, radius*2);      
  for (var i = 1; i <= num; i++) {
    drawCircle(x - radius/2, radius/2, num);
  }
}

WORKS but can't get circles aligned
function draw() {
  hawaiianEarrings(width*0.3, height*0.3, 100, 10);
}

function hawaiianEarrings(x, y, radius, num) {
  
  for (var i = 0; i < num; i++) {
    var hoops = radius/num;
    noFill();
    ellipseMode(CORNER);   
    ellipse(x+i*hoops, y, radius/i*1.5 - i*hoops, radius/i*1.5 - i*hoops);
  }
}

WORKS but concentric circles
function draw() {
  hawaiianEarrings(width*0.3, height*0.3, 300, 10);
}

function hawaiianEarrings(x, y, radius, num) {
  
  for (var i = 0; i < num; i++) {
    var hoops = radius/num;
    noFill();
    ellipseMode(CORNER);   
    ellipse(x + i*hoops*0.5, y, radius - i*hoops, radius - i*hoops);
  }
}
-------------------------*/
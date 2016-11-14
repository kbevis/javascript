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



//
//
//function setup() {
//  createCanvas(800, 800);
//  stroke(0);
//  strokeWeight(1);
//  background(255);
//  frameRate(2);
//  noLoop();
//  
//checkerboard();
//
//}
//
//
//function checkerboard(x, y, w) {
//    for (var i = 0; i < 8; i++) { // row counter, width
//    for(var j = 0; j < 8; j++) { // col counter, height
//      
//      var color1 = 0;
//      var color2 = 255;
//      var size = width/8;  
//
//      var x = (size+1)*i; 
//      var y = (size+1)*j;
//     
//
//      if ( y % 2 === 0) { // even rows
//        if ( x % 2 === 0) { // even cols
//          fill(color1);
//          rect(x, y, size, size);
//        } else { // odd cols
//          fill(color2);
//          rect(x, y, size, size);
//        }
//      }
//
//      if ( y % 2 !==0 ) { // odd rows
//        if ( x % 2 !== 0) { // odd cols
//          fill(color1);
//          rect(x, y, size, size);
//        } else { // even cols
//          fill(color2);
//          rect(x, y, size, size);
//        }
//      }
//
//    }
//  }
//  
//   
// }
//
//
//function draw() {  
//  
//  
//  var size2 = random(25, width/8);
//  var a = random(width);
//  var b = random(height);
//  
//
//  fill(255, 0, 0); // green, replace with checkerboard
//  rect(a, b, size2, size2);
//    console.log('red square');
//  
//  }

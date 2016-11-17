function setup() {
  createCanvas(600, 600);  
  background(0, 255, 0);
  noLoop();
  
  var x = random(width/3); // so checkerboard doesn't overflow beyond canvas
  var y = random(height/3);
  var w;
  
  checkerboard(x, y, w);
  
  function checkerboard(x, y, w) {
    strokeWeight(1);
    translate(x, y);

    var color1 = (0); // black
    var color2 = (255);   

    var widths = [40, 120, 200, 280, 360, 440]; // 520, 600, 680, 760, extend array for larger canvas
    var w = random(widths);

    var xpos = 0;
    var ypos = 0;
    var offset = w/8;

    for (var j = 0; j < 8; j++ ) {
      for (var i = 0; i < 8; i++ ){

        var x = offset*i;
        var y = offset*j;

        if ( y % 2 === 0) { // even rows
            if ( x % 2 === 0) { // even cols
              fill(color1);
              rect(xpos+x, ypos+y, offset, offset);
            } else { // odd cols
              fill(color2);
              rect(xpos+x, ypos+y, offset, offset);
            }
          }

        if ( y % 2 !==0 ) { // odd rows
            if ( x % 2 !== 0) { // odd cols
              fill(color1);
              rect(xpos+x, ypos+y, offset, offset);
            } else { // odd cols
              fill(color2);
              rect(xpos+x, ypos+y, offset, offset);
            }
        }  
      }
    }
  } 
}

// RANDOM widths, for checkerboard to render accurately:
// Widths divisible by 8 * multiples of 5 separated by 10 (5, 15, 25, 35 ... ) 
// 8*5=40, 8*15=120, 8*25=200, 8*35=280, 8*45=360, 8*55=440, 8*65=520, 8*75=600, 8*85=680, 8*95=760
// use loop? for (i = 5; i < 95 (or 45 if canvas size < 500) ; i++10) { i counts 5, 15, 25, 35, etc }
// if canvas width % i == 0 (whole number) 
// and canvas width % 8 == 0 (whole number) 
// add this width to random array, else set a default (ie draw checkerboard at width 200)

// Red square, functions well:
// function draw() {  
//  var size2 = random(25, width/8);
//  var a = random(width);
//  var b = random(height);
//  
//  fill(255, 0, 0); // red, replace with checkerboard
//  rect(a, b, size2, size2);
//    console.log('red square');
//  }

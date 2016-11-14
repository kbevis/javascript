function setup() {

  createCanvas(800, 800);
  background(0, 255, 0);
  stroke(0);
  
  var x, y, w;
  checkerboard(50, 120, 300);
  
  function checkerboard(x, y, w) {
    
    var color1 = (0); // black
    var color2 = (255); // white
    var size = w/10;
    translate(x, y);
  
    for (var i = 0; i < 8; i++) { // row counter, width
      for(var j = 0; j < 8; j++) { // col counter, height

        var x = (size+1)*i;
        var y = (size+1)*j;

        if ( y % 2 === 0) { // even rows
          if ( x % 2 === 0) { // even cols
            fill(color1);
            rect(x, y, size, size);
          } else { // odd cols
            fill(color2);
            rect(x, y, size, size);
          }
        }

        if ( y % 2 !==0 ) { // odd rows
          if ( x % 2 !== 0) { // odd cols
            fill(color1);
            rect(x, y, size, size);
          } else { // even cols
            fill(color2);
            rect(x, y, size, size);
          }
        }
      }
    }  
  }

}
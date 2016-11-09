function setup() {

  createCanvas(600, 600);
  stroke(0);

  // Logic:
  // for even rows (y=0.2.4.6): if x is even, draw black sq, else draw white sq
  // for odd rows: if x is odd, draw blck sq, else draw white sq

  var color1 = (0); // black
  var color2 = (255); // white
  var size = width/10;

  for (var i = 0; i < 8; i++) { // row counter, width
    for(var j = 0; j < 8; j++) { // col counter, height

      var x = (size+1)*i; // position x = columns, +1px border (col separator)
      var y = (size+1)*j; // position y = rows, +1px border (row separator)

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

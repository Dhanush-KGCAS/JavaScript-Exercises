// Using Math.min and Math.max to constrain an argument

var line = function (lineLength) {
    lineLength = Math.max(0, lineLength);
    lineLength = Math.min(40, lineLength);
    return Array(lineLength + 1).join (`=`);
  };

  // for (var i = -20; i <= 60; i += 10) {
  //   console.log(line(i));
  // }

  // console.log(line(10))

var spaces = function (numSpaces) {
    numSpaces = Math.max(0, numSpaces);
    numSpaces = Math.min(40, numSpaces);
    return Array(numSpaces + 1).join(' ');
  };


var emptyBox = function(width){
  width = Math.max(0, width);
  width = Math.min(40, width);
  var topAndBottom = Array(width + 1).join('=')
  var middle =  `=`+ Array(width + 1).join(' ') +`=`;
  console.log(topAndBottom);
  for(let i=0; i<3 ;i++){
    console.log(middle);
  }
  console.log(topAndBottom);
}

emptyBox(24);


  /* Further Adventures
   *
   * 1) Test line lengths from -20 to 60
   *    in steps of 10.
   *
   * 2) Define a spaces function that returns a string
   *    made up of a specified number of space characters.
   *    The line of spaces returned can have a length
   *    between 0 and 40.
   *
   * 3) Add an emptyBox function
   *    that draws an empty box of specified
   *    width and height 5.
   *
   *    emptyBox(12);
   *
   *    > ============
   *    > =          =
   *    > =          =
   *    > =          =
   *    > ============
   *
   */
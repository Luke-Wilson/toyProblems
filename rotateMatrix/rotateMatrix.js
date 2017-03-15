function rotateMatrix (matrix) {
  var length = matrix.length;
  //create empty matrix called 'result' with same number of empty arrays in it
  var result = [];

  //loop through matrix starting from last row
  for (var i = matrix.length-1; i >= 0; i--) {
    var row = matrix[i];

    //loop through row and keep track of index.
    row.forEach((ele, index) => {
      result[index] = result[index] || [];
      //push element to the array at index in result
      result[index].push(ele);
    })
  }

  return result;
}



// O - the inputted matrix but rotated 90 degrees clockwise
// I - a matrix (2D array)
// C
// E

var matrix = [[1,2],[3,4]];
var matrix2 = [
[ 1, 2, 3, 4],
[ 5, 6, 7, 8],
[ 9, 'A', 'B','C']
];
console.log(rotateMatrix(matrix2));


// Write a function that rotates a NxN matrix 90 degrees clockwise.
// A matrix, also called a 2-D array, is simply an array of arrays of values.

// 2x2 MATRIX EXAMPLE:

// [ [1, 2],
// [3, 4] ]

// Rotated:

// [ [3, 1],
// [4, 2] ]






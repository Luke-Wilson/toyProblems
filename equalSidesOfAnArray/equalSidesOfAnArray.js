// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript

// O - an index N where the sum of the integers on both sides are equal.
//   // If there is no index, return -1
// I - an array of integers
// C -
// E -
// [1,2,3,4,3,2,1] => 3
// [1,2,3] => -1
// [1,100,50,-51,1,1] => 1

// If there are multiple answers, return the lowest correct index

//get total of entire array
//work through array starting from index 0.
//At index 0
  //the rightTotal will be total - array[0]
  //leftTotal will be 0

//At index 1
  //rightTotal will be prev rightTotal - array[1]
  //leftTotal will be prev leftTotal + array[0]

function findEvenIndex(arr) {
  var rightTotal = arr.reduce((a,b) => a+b);
  var leftTotal = 0;
  for (var i = 0; i < arr.length; i++) {
    if (i > 0) {
      leftTotal += arr[i-1];
    }
    rightTotal -= arr[i];
    if (leftTotal === rightTotal) {
      return i;
    }
  }
  return -1;
}

console.log(findEvenIndex([1,2,3,4,3,2,1]))

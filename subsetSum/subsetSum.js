// O - an array of
// I - an array of positive integers and a target total, n
// C - none given
// E -
// [1,2,3] => [[1,2], [3]]

// You can only use each element one time for a given answer.


// [1,2,3,4,5,6], 11 =>
// [1,2,3,5]
// [1,2,4,3]
// [5,6]
// [2,3,6]
// [2,4,5]
///...

function subsetSum (arr, n) {
  //sort array from least to most
  arr = arr.sort();

  //closure variable for storing any subsets that have a sum of n
  var results = [];

  var permutations = function(subset = [], array) {
    // base case - subset sum equals the target, n
    var total = subset.length > 0 ? subset.reduce((a,b) => a+b) : 0;
    if (total === n) {
      results.push([...subset]);
      return;
    };

    //base case - array is empty
    if (array.length === 0) {
      return;
    }

    //recursive case
    for (var i = 0; i < array.length && total < n; i++) {
      subset.push(array[i]);
      var sliced = array.slice(i+1);
      permutations(subset, sliced);
      subset.pop();
    }
  };

  //kick off subroutine
  permutations([], arr);
  return results;
};

console.log(subsetSum([1,2,4,3,5,6,1], 11));


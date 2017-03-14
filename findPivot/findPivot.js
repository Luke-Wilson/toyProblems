// findPivot

// I have an array of words that are mostly alphabetical, except they start somewhere in the middle of the alphabet, reach the end, and then start from the beginning of the alphabet.
// In other words, this is an alphabetically ordered array that has been "rotated." Write a function that returns the index of the pivot, or null if there is no pivot (meaning the entire list of words is in alphabetical order).

// For example:
// ['dog', 'eagle', 'falcon', 'apple', 'bear', 'cat']
// // returns 3

function inOrder (word1, word2, index1) {
  var index2 = index1 + 1
  var shortest = word1.length > word2.length ? word2.length : word1.length;

  for (var i = 0; i < shortest; i++) {
    var value1 = word1[i].toLowerCase().charCodeAt(0);
    var value2 = word2[i].toLowerCase().charCodeAt(0);
    if (value1 > value2) {
      return index2;
    }
    if (value2 > value1) {
      return index1;
    }
  }
  return index1;
}


var findPivot = function (array) {
  var finalIndex = null;
  var answer = array.reduce((a,b, indexA) => {
    if (inOrder(a,b, indexA) !== indexA) {
      finalIndex = indexA;
      return finalIndex;
    }
    return b;
  });
  return finalIndex;
};

var arr = ['dog', 'eagle', 'Falcon', 'aardvark', 'apple', 'bear', 'cat']
var arr2 = ['apple', 'aztec', 'aardvark']
var arr3 = ['aac','b','z', 'a']
var arr4 = ['aaab', 'aaaz'];

console.log(findPivot(arr));
console.log(findPivot(arr2));
console.log(findPivot(arr3));
console.log(findPivot(arr4));


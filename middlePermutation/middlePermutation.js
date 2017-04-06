// O - middle permutation
// I - a string (s). Every letter in s appears only once.
// C - None given
// E - See below

// - consider all strings
// - order options into alphabetical order
// - return the middle result (rounded down for even number of terms)


//Example:
// console.log(middlePermutation('abc'));
// The permutations in order are:
// "abc", "acb", "bac", "bca", "cab", "cba"
// So, The middle term is "bac".

function middlePermutation(s) {
  s = s.split().sort().join('');
  var permutations = [];

  function getPermutations(remaining, current = []) {
    //base case
    if (remaining.length === 0) {
      for (var i = 0; i < permutations.length; i++) {
        if (permutations[i] > current.join('')) {
          return permutations.splice(i, 0, current.join(''));
        }
      }
      return permutations.push(current.join(''))
    }

    //recursive case
    for (var i = 0; i < remaining.length; i++) {
      current.push(remaining[i]);
      getPermutations(remaining.slice(0, i) + remaining.slice(i+1), current)
      current.pop();
    }
  }
  //kick off subroutine
  getPermutations(s);

  // permutations = permutations.sort();
  var midPoint = permutations.length % 2 === 0 ? permutations.length / 2 - 1 : Math.floor(permutations.length / 2);
  return permutations[midPoint];
}


console.log(middlePermutation("abc")) //,"bac")
//
console.log(middlePermutation("abcd")) //,"bdca")

console.log(middlePermutation("abcdx")) //,"cbxda")

// console.log(middlePermutation("abcdxg")) //"cxgdba")

// console.log(middlePermutation("abcdxgz")) //,"dczxgba")



var arr = ['a','b','c','f'];

var stillGoing = true;
for (var i = 0; i < arr.length; i++) {
  if (arr[i] > 'g') {
    // console.log('yo', arr[i], i);
    arr.splice(i, 0, 'g')
    stillGoing = false;
    break;
  }
}
if (stillGoing) {
  arr.push('g')
}


console.log(arr)












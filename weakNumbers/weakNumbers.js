function weakNumbers (num) {
  var allWeaknesses = {};

  function getWeakness(x) {
    var total = 0;
    var xDivisors = countDivisors(x);

    var weaknesses = {};

    for (var i = 1; i < x; i++) {
      if (countDivisors(i) > xDivisors) {
        total++;
      }
    }
    allWeaknesses[x] = total;

  }

  for (var i = 1; i <= num; i++) {
    getWeakness(i);
  }

  var highestWeakness = 0;
  var numsWithHighWeakness = 0;
  for (var key in allWeaknesses) {
    if (allWeaknesses[key] === highestWeakness) {
      numsWithHighWeakness++;
    }
    if (allWeaknesses[key] > highestWeakness) {
      highestWeakness = allWeaknesses[key]
      numsWithHighWeakness = 1;
    }
  }
  return [highestWeakness, numsWithHighWeakness]
}

function countDivisors(num) {
  if (num === 0) return 0
  var count = 0;
  for (var i = 1; i <= num; i++) {
    if (num % i === 0) {
      count++;
    }
  }
  return count;
}

console.log(weakNumbers(500));


// We define the weakness of number x as the number of positive integers smaller than x that have more divisors than x.

// It follows that the weaker the number, the greater overall weakness it has. For the given integer n, you need to answer two questions:

// what is the weakness of the weakest numbers in the range [1, n]?
// how many numbers in the range [1, n] have this weakness?

// Return the answer as an array of two elements, where the first element is the answer to the first question, and the second element is the answer to the second question.

// For n = 9, the output should be [2, 2]

// Here are the number of divisors and the specific weakness of each number in range [1, 9]:

// 1: d(1) = 1, weakness(1) = 0;
// 2: d(2) = 2, weakness(2) = 0;
// 3: d(3) = 2, weakness(3) = 0;
// 4: d(4) = 3, weakness(4) = 0;
// 5: d(5) = 2, weakness(5) = 1;
// 6: d(6) = 4, weakness(6) = 0;
// 7: d(7) = 2, weakness(7) = 2;
// 8: d(8) = 4, weakness(8) = 0;
// 9: d(9) = 3, weakness(9) = 2;

// O - an array,
//   1st element is the weakness of the weakest number(s) in the range 1-n
//   2nd element is the number of numbers in the range 1-n that share that weakness
// I - positive integer, n
// C - should be fairly fast, able to handle inputs up to 500.
// E - 9 => [2,2]





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

function weakNumbers(num) {
  //build array of objects with {number: _, divisors: _}
  var allDivisors = [];

  for (var i = 1; i <= num; i++) {
    var divisorsI = getDivisors(i)
    var weakness = 0;
    allDivisors.forEach(item => {
      if (item.divisors > divisorsI) {
        weakness++;
      }
    });

    var obj = {
      number: i,
      divisors: divisorsI,
      weakness: weakness
    };

    allDivisors.push(obj);
  }

  // return allDivisors;



  //find highest
  var weakestWeakness = 0;
  var numberOfWeakests = 0;
  allDivisors.forEach(obj => {
    if (obj.weakness === weakestWeakness) {
      numberOfWeakests++;
    }
    if (obj.weakness > weakestWeakness) {
      weakestWeakness = obj.weakness;
      numberOfWeakests = 1;
    }
  });
  return [weakestWeakness, numberOfWeakests];
}


function getDivisors(x) {
  var divisors = 0;
  for (var i = 1; i <= x; i++) {
    if (x % i === 0) {
      divisors++;
    }
  }
  return divisors;
}

console.log(weakNumbers(9));

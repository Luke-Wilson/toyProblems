// Find all integers between m and n whose sum of squared divisors is itself a square.
// e.g. 1, 42, 246

// O - an array of arrays
  // [[x,y],[x2,y2]...]
  // where x is the special number and y is the sum of its squared divisors.

// I - two integers, m and n where 1 <= m < n

// C - none

// E -
  // list_squared(1, 250) --> [ [1, 1], [42, 2500], [246, 84100]]



// for a given number(e.g)
// find all the divisors
// square all divisors to get total
// if total is a square
//   create array with number as first element and total as 2nd
//   push array into finalResult



function findDivisors (num) {
  var divisors = []
  var max = Math.floor(num / 2)
  for (var i = 1; i <= max; i++) {
    if (num % i === 0) {
      divisors.push(i);
    }
  }
  divisors.push(num);
  return divisors;
}

function getSquareTotal (array) {
  var total = 0;
  array.forEach(num => {
    total += num*num;
  });
  return total;
}

function listSquared(m, n) {
  const resultsArray = [];
  for (var i = m; i <= n; i++) {
    var divisorsI = findDivisors(i);
    var total = getSquareTotal(divisorsI);
    if (Math.sqrt(total) % 1 === 0) {
      resultsArray.push([i, total])
    }
  }
  return resultsArray;
}

console.log(listSquared(1,250))


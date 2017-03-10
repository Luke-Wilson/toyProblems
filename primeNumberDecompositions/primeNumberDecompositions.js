function getAllPrimeFactors(n, results = [], recursing = false) {
  //edge cases
  console.log(n, typeof n)
  if (!recursing) {
    if (n === 0 || typeof n !== 'integer') return [];
    if (n <= 2) return [n];
  }

  //base case
  if (n === 1) {
    return results;
  }

  //edge case for 2
  if (n % 2 === 0) {
    results.push(2);
    return getAllPrimeFactors(n/2, results, true);
  }

  //check other prime divisibility
  for (var i = 3; i <= n; i+=2) {
    if (n % i === 0) {
      results.push(i);
      return getAllPrimeFactors(n / i, results, true);
    }
  }

}

function getUniquePrimeFactorsWithCount(n) {
  //edge cases
  if (n === 0 || typeof n !== 'integer') return [[],[]];
  if (n <= 2) return [[n],[1]];

  var allPrimeFactors = getAllPrimeFactors(n);
  var countObj = {};
  var results = [[], []]
  allPrimeFactors.forEach(prime => {
    countObj[prime] = countObj[prime] + 1 || 1;
  })
  for (var key in countObj) {
    results[0].push(eval(key));
    results[1].push(countObj[key])
  }
  return results;
}

function getUniquePrimeFactorsWithProducts(n) {
  //edge cases
  if (n === 0 || typeof n !== 'integer') return [];
  if (n <= 2) return [n];

  var uniqueWithCount = getUniquePrimeFactorsWithCount(n);
  var results = [];
  for (var i = 0; i < uniqueWithCount[0].length; i++) {
    results.push(
      Math.pow(uniqueWithCount[0][i], uniqueWithCount[1][i])
    )
  }
  return results;
}


// console.log(findPrimesBelow(1000001))
console.log(getAllPrimeFactors(1))
console.log(getUniquePrimeFactorsWithCount(1))
console.log(getUniquePrimeFactorsWithProducts(1));



// console.log(findPrimesBelow(100));

//getAllPrimeFactors
//o - an array of prime numbers that when multiplied together = n
//i - a number, n
//c
//e:
//  getAllPrimeFactors(100) // [2,2,5,5]


// Test.assertSimilar(getUniquePrimeFactorsWithCount(100), [[2,5],[2,2]]);

// Test.assertSimilar(getUniquePrimeFactorsWithProducts(100), [4,25]);


// Prime decomposition. The prime decomposition of a number is defined as a list of prime numbers which when all multiplied together, are equal to that number.

// You have to code a function getAllPrimeFactors wich take an integer as parameter and return an array containing its prime decomposition by ascending factors, if a factors appears multiple time in the decomposition it should appear as many time in the array.

// exemple: getAllPrimeFactors(100) returns [2,2,5,5] in this order.

// This decomposition may not be the most practical.

// You should also write getUniquePrimeFactorsWithCount, a function which will return an array containing two arrays: one with prime numbers appearing in the decomposition and the other containing their respective power.

// exemple: getUniquePrimeFactorsWithCount(100) returns [[2,5],[2,2]]

// You should also write getUniquePrimeFactorsWithProducts an array containing the prime factors to their respective powers.

// example: getUniquePrimeFactorsWithProducts(100) returns [4,25]

// Errors, if:

// n is not a number
// n not an integer
// n is negative or 0
// The three functions should respectively return [], [[],[]] and [].

// Edge cases:

// if n=0, the function should respectively return [], [[],[]] and [].
// if n=1, the function should respectively return [1], [[1],[1]], [1].
// if n=2, the function should respectively return [2], [[2],[1]], [2].
// The result for n=2 is normal. The result for n=1 is arbitrary and has been chosen to return a usefull result. The result for n=0 is also arbitrary but can not be chosen to be both usefull and intuitive. ([[0],[0]] would be meaningfull but wont work for general use of decomposition, [[0],[1]] would work but is not intuitive.)
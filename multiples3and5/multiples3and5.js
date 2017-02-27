// Description:

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

// Note: If the number is a multiple of both 3 and 5, only count it once.

// O - sum of all multiples of 3 or 5 BELOW input number
// I - a number
// C - none
// E - if a number is a multiple of 3 and 5, count it only once.

// solution(10) => 3+5+6+9 => 23
// solution(16) => 3+5+6+9+10+12+15 => 60

function solution(number){
  var total = 0;
  for (var i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      total += i;
    }
  }
  return total;
}

console.log(solution(10));
console.log(solution(16));




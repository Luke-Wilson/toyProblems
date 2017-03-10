function zero(operator) {
  return operator ? eval(0+operator) : 0;
}
function one(operator) {
  return operator ? eval(1+operator) : 1;
}
function two(operator) {
  return operator ? eval(2+operator) : 2;
}
function three(operator) {
  return operator ? eval(3+operator) : 3;
}
function four(operator) {
  return operator ? eval(4+operator) : 4;
}
function five(operator) {
  return operator ? eval(5+operator) : 5;
}
function six(operator) {
  return operator ? eval(6+operator) : 6;
}
function seven(operator) {
  return operator ? eval(7+operator) : 7;
}
function eight(operator) {
  return operator ? eval(8+operator) : 8;
}
function nine(operator) {
  return operator ? eval(9+operator) : 9;
}

function plus(num) {
  return '+'+num;
}

function minus(num) {
  return '-'+num;
}
function times(num) {
  return '*'+num;
}
function dividedBy(num) {
  return '/'+num;
}



// This time we want to write calculations using functions and get the results. Let's have a look at some examples:
console.log(
  seven(times(five())) // =>  35
)
console.log(
  four(plus(nine())) // => 13);
)
console.log(
  eight(minus(three())) // 5);
)
console.log(
  six(dividedBy(two())) // => 3
)
// Requirements:

// There must be a function for each number from 0 ("zero") to 9 ("nine")
// There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy (divided_by in Ruby)
// Each calculation consist of exactly one operation and two numbers
// The most outer function represents the left operand, the most inner function represents the right operand






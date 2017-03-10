// var n = function(digit) {
//   return function(op) {
//     return op ? op(digit) : digit;
//   }
// };

var n = function(num) {
  return function(operator) {
    return operator ? operator(num) : num;
  }
}

var zero = n(0);
var one = n(1);
var two = n(2);
var three = n(3);
var four = n(4);
var five = n(5);
var six = n(6);
var seven = n(7);
var eight = n(8);
var nine = n(9);

function plus(right) {
  return function (left) {
    return left + right;
  };
}
function minus(right) {
  return function(left) {
    return left - right;
  };
}
function times(right) {
  return function(left) {
    return left * right;
  };
}
function dividedBy(right) {
  return function(left) {
    return left / right;
  };
}

console.log(three(minus(seven())));



function plus(r) { return function(l) { return l + r; }; }
function minus(r) { return function(l) { return l - r; }; }
function times(r) { return function(l) { return l * r; }; }
function dividedBy(r) { return function(l) { return l / r; }; }
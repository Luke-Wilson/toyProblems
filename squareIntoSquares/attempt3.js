var getAnswer = function(possibles, target) {
  //base case
  var remaining = target;
  if (possibles.length === 0) {
    return null;
  }
  var answer = [];
  possibles.forEach(possible => {
    if (possible <= remaining) {
      remaining -= possible;
      answer.unshift(Math.sqrt(possible));
    }
  });
  if (remaining === 0) {
    return answer;
  }

  if (remaining > 0) {
    return getAnswer(possibles.slice(1), target);
  }
  return 'something may have gone wrong';
};

var decompose = function(n) {
  var possibles = [];
  for (var i = 1; i < n; i++ ) {
    possibles.unshift(i * i);
  }
  return getAnswer(possibles, n*n);
}

console.log(decompose(50))  //Expected: '[1, 3, 5, 8, 49]', instead got: '[14, 48]'



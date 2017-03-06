var getAnswer = function(possibles, target, answer = []) {
  //base case
  var remaining = target;
  if (remaining === 0) {
    return answer;
  }

  for (var i = 0; i < possibles.length; i++) {
    if (possibles[i] <= remaining) {
      remaining -= possibles[i];
      answer.unshift(possibles[i]);
      var potentialAnswer = getAnswer(possibles.slice(i+1), remaining, answer);
      if (potentialAnswer !== null) {
        return potentialAnswer;
      }
      answer.shift();
      remaining += possibles[i];
    }
  }
  return null;
};

var decompose = function(n) {
  var possibles = [];
  for (var i = 1; i < n; i++ ) {
    possibles.unshift(i * i);
  }
  var result = getAnswer(possibles, n*n);
  if (!Array.isArray(result)) {
    return null;
  } else {
    return result.map(ele => Math.sqrt(ele));
  }
};

var squares11 = [100,81,64,49,36,25,16,9,4,1];

// console.log(getAnswer(squares11, 121));
console.log(decompose(11))
// console.log(decompose(50))  //Expected: '[1, 3, 5, 8, 49]', instead got: '[14, 48]'



var decompose = function(n) {
  var initialStart = n-1;
  var initialTarget = Math.pow(n, 2);
  //closure variable for answer
  var answer = [];

  //recursive inner function
  var innerFunc = function(start, target) {
    //base case:  start point has reached 0
    if (start === 0) {
      return null;
    }


    //base case: trying to add number already in answer array
    if (answer.indexOf(start) >= 0) {
      return null;
    }

    //decrease target by start squared. Add start number to beginning of answer array
    target -= start*start;
    answer.unshift(start);

    //if target is now 0, we have reached our first answer, so let's return it.
    if (target === 0) {
      return answer;
    } else {
      //otherwise, we need to keep reducing target. Find newStart
      var newStart = Math.floor(Math.sqrt(target)); // target now = 21

      //save the potentialAnswer
      var potentialAnswer = innerFunc(newStart, target);

      //if our potentialAnswer is null, that means we didn't get an answer, so we have to bubble back
      //up to the top, subtract 1 from the start, and try again. That, in turn will either return
      //null, or an array (our answer). We handle this condition at the very end of our decompose function.
      if (potentialAnswer === null) {
        answer.shift();
        target += start*start;
        return innerFunc(start-1, target);
      } else {
        return potentialAnswer;
      }
    }
    return null;
  };

  //kickoff recursive innerFunc
  innerFunc(initialStart, initialTarget);

  //handle edge case of innerFunc returning an empty array.
  return answer === null || answer.length === 0 ? null : answer;
};

console.log(decompose(2));
console.log(decompose(44));
console.log(decompose(50)); //Expected: '[1, 3, 5, 8, 49]', instead got: '[14, 48]'

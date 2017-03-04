function decompose(n) {
  var answer = [];

  var innerFunc = function(array, total, current = []) {
    var currentTotal = current.length > 0 ? current.reduce((a,b) => a + b) : 0;
    // base case
    if (currentTotal > total) {
      return;
    }
    console.log(currentTotal, total);
    if (currentTotal === total) {
      console.log('>>>>>>>>> found answer <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<');
      answer.push(current.map(num => Math.sqrt(num)));
      return;
    }

    for (var i = 0; i <= array.length; i++) {
      current.push(array[0]);
      array = array.slice(1);
      console.log('sending', array, current);
      innerFunc(array, total, current);
      var x = current.pop();
      console.log('just popped', x, 'from', current);
    }
    return;
  };

  var possibles = [];
  for (var i = 1; i < n; i++) {
    possibles.push(i);
  }

  possibles = possibles.map(num => Math.pow(num, 2));
  innerFunc(possibles, n*n);
  return answer.length === 0 ? null : answer;
}


// console.log(decompose(11)) // [1,2,4,10];
console.log(decompose(7)) // [2,3,6];


decompose(5)

n = 5
possibles = [1,2,3,4];
possiblesSquared = [1,4,9,16]
combos:
1                       4,9,16
  1,4                   9,16
    1,4,9               16
    1,4,16              []
  1,9                   16
    1,9,16              []
  1,16                  []

4                       9,16
  4,9                   16
    4,9,16              []
  4,16                  []

9                       16
  9,16                  []






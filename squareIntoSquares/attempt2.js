// n = 5
// possibles = [1,2,3,4];
// possiblesSquared = [1,4,9,16]
// combos:
// 1                       4,9,16
//   1,4                   9,16
//     1,4,9               16
//     1,4,16              []
//   1,9                   16
//     1,9,16              []
//   1,16                  []

// 4                       9,16
//   4,9                   16
//     4,9,16              []
//   4,16                  []

// 9                       16
//   9,16                  []

var decompose = function(n) {
  var answers = [];
  var innerFunc = function(total, list, current = []) {
    var currentTotal = current.length > 0 ? current.reduce((a,b) => a + b) : 0;
    console.log(current, currentTotal, total);
    console.log('answers', answers);

    //base case
    if (currentTotal === total) {
      console.log('>>>>>>>>>>>>>>>>> answer found <<<<<<<<<<<<<<<<<<');
      answers.push([...current]);
      return;
    }

    if (list.length === 0) {
      return;
    }

    //recursive case
    //push first remaining element to current   [1] [1,4,9,16]
    current.push(list[0]);
    //remove first remaining element from remaining [4,9,16]
    var remaining = list.slice(1);

    // iterate
    innerFunc(total, remaining, current);
    //after iterating through all permutations, pop off last element of current.
    current.pop(); //current becomes [], remaining is [4,9,16]
    innerFunc(total, remaining, current);
  };

  var possibles = [];
  for (var i = 1; i < n; i++) {
    possibles.push(i*i);
  }

  //kick off
  innerFunc(n*n, possibles);

  console.log('-------final-------', answers);
  return answers.length > 0 ? answers[0].map(ele => Math.sqrt(ele)) : null;
};

console.log(decompose(11)) // [1,2,4,10];

// console.log(decompose(7));

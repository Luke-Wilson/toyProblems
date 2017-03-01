// John and Mary want to travel between a few towns A, B, C ... Mary has on a sheet of paper a list of distances between these towns. ls = [50, 55, 57, 58, 60]. John is tired of driving and he says to Mary that he doesn't want to drive more than t = 174 miles and he will visit only 3 towns.

// Which distances, hence which towns, they will choose so that the sum of the distances is the biggest possible - to please Mary - but less than t - to please John- ?

// Example:

// With list ls and 3 towns to visit they can make a choice between: [50,55,57],[50,55,58],[50,55,60],[50,57,58],[50,57,60],[50,58,60],[55,57,58],[55,57,60],[55,58,60],[57,58,60].

// The sums of distances are then: 162, 163, 165, 165, 167, 168, 170, 172, 173, 175.

function chooseBestSum(t, k, ls) {
  var totals = getTotals(ls, k);

  var largestTotal = null;
  totals.forEach(total => {
    if (total > largestTotal && total <= t) {
      largestTotal = total;
    }
  });
  return largestTotal;
}

function getTotals (collection, max) {
  var results = [];
  var innerFunc = function(tempArray, newCollection) {
    if (tempArray.length === max) {
      var subTotal = tempArray.reduce((a,b) => a + b);
      results.push(subTotal);
      return;
    }

    newCollection.forEach((num, index) => {
      tempArray.push(num);
      innerFunc(tempArray, newCollection.slice(index+1));
      tempArray.pop();
    });
  };

  innerFunc([], collection);
  return results;
};

// [1,2,3,4,5]

// [1,2] [3,4,5]
// [1,2,3] [4,5]
// [1,2,4] [5]
// [1,2,5] []
// [1,3] [4,5]
// [1,3,4] [5]
// [1,3,5] [] --> pop
// [1,3] [] --> pop
// [1,4]


// O - biggest possible sum of distances available from input constraints
// I - t (max sum of distances John will travel), k (number of towns to visit, k >= 1), ls(array of distances between towns)
// C - none
// E -

// var ms = [1,2,3,4,5];
// console.log(chooseBestSum(19, 3, ms));


var ts = [50, 55, 56, 57, 58];
console.log(chooseBestSum(163, 3, ts)); //163


// var xs = [50];
// console.log(chooseBestSum(163, 3, xs)); //-> nil (or null or ... or -1 (C++)


// var ys = [91, 74, 73, 85, 73, 81, 87];
// console.log(chooseBestSum(230, 3, ys)); //-> 228

var test1 = [100, 76, 56, 44, 89, 73, 68, 56, 64, 123, 2333, 144, 50, 132, 123, 34, 89];
console.log(chooseBestSum(2430, 15, test1)); //-> 1287









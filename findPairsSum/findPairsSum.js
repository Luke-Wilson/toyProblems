
function findPairSorted (sum, arr, left = 0, right = arr.length-1) {
  while (left < right) {
    if (arr[left] + arr[right] === sum) {
      return true;
    }
    if (arr[left] + arr[right] < sum) {
      left++;
    } else {
      right--;
    }
  }
  return false;
}

function findPairUnsorted (sum, arr) {
  var obj = {};
  var answer = false;
  arr.forEach(item => {
    obj[item] = true;
    var lookingFor = sum - item;
    if (obj[lookingFor]) answer = true;
  });
  return answer;
}

var arr = [-1,3,4,6,9];
var arrUnsorted = [3,-1,9,6,4];

console.log(findPairSorted(9, arr));
console.log(findPairUnsorted(9, arrUnsorted));


// O - a sorted array
// I - an unsorted array
// C -
// E

// [4,7,4,3,9,1,2] => [1,2,3,4,4,7,9]


// Split
// [[4],[7],[4],[3],[9],[1],[2]]

// Merge adjacent lists into sorted sublists
// [[4],[7],[4],[3],[9],[1],[2]] -> [[4,7],[3,4],[1,9],[2]]

// Repeat merge step
//  [[4,7],[3,4],[1,9],[2]] -> [[3,4,4,7], [1,2,9]]

// Repeat merge step
//      [[3,4,4,7], [1,2,9]] -> [[1,2,3,4,4,7,9]]


// Done
//  [1,2,3,4,4,7,9]

function mergeSort(arr) {
  var result = [];
  if (!Array.isArray(arr[0])) {
    arr = arr.map(ele => [ele]);
  }
  for (var i = 0; i < arr.length; i+=2) {
    // console.log(arr[i], arr[i+1])
    result.push(mergeLists(arr[i], arr[i+1]));
  }

  if (result.length > 1) {
    return mergeSort(result);
  } else {
    return result[0];
  }
}


function mergeLists (arr1, arr2) {
  if (!arr2) return arr1;
  var final = [];

  while(arr1.length > 0 || arr2.length > 0) {
    if (arr1.length === 0) {
      final.push(arr2[0]);
      arr2.shift();
      continue;
    }
    if (arr2.length === 0) {
      final.push(arr1[0]);
      arr1.shift();
      continue;
    }

    if (arr1[0] <= arr2[0]) {
      final.push(arr1[0]);
      arr1.shift();
    } else {
      final.push(arr2[0]);
      arr2.shift();
    }
  }

  return final;
}

console.log(mergeSort([2,3,4,5,4,3]))

var arr1 = [4,7];
var arr2 = [3,4];
// console.log(mergeLists(arr1, arr2));
// console.log(mergeLists([2,2], [3,4]))
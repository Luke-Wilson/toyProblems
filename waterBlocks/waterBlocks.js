var waterBlocks = function (blocks) {
  maxRight = 0;
  maxLeft = 0;
  var total = 0;

  //skip first col and loop through other cols.
  for (var i = 0; i < blocks.length-1; i++) {
    //get max height for right hand side
    for (var j = i+1; j < blocks.length; j++) {
      var maxRight = Math.max(blocks[j], maxRight);
    }
    var waterThisColumn = Math.min(maxRight, maxLeft) - blocks[i];
    if (waterThisColumn < 0) waterThisColumn = 0;
    console.log('column', i, ": ", waterThisColumn)
    total += waterThisColumn;
    //reset max to either the current maxLeft or this height
    maxLeft = Math.max(maxLeft, blocks[i]);
    //reset maxRight to 0.
    maxRight = 0;
  }
  return total;
};

//test cases
var tower = [5,2,3,2,1,3];
var tower2 = [1,4,2,2,4];
var tower3 = [2, 5, 3, 6];
var tower4 = [1,1,1,7];

// console.log(waterBlocks(tower))
// console.log(waterBlocks(tower2))
// console.log(waterBlocks(tower3))
console.log(waterBlocks(tower4))

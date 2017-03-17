function luxhouse(houses) {
  var newHouses = [];
  //loop backwards through array
  var max = 0;
  for (var i = houses.length - 1; i >= 0; i--) {
    var house = houses[i];
    if (house > max) {
      newHouses.unshift(0);
      max = house;
    } else if (house <= max) {
      newHouses.unshift(max+1-house);
    }
  }
  return newHouses;
}

// luxhouse([1,2,3,1,2])
console.log(luxhouse([1,2,3,1,2]));
console.log(luxhouse([1,1,1]));


// Example

// For houses = [1,2,3,1,2], the output should be [3,2,0,2,0].

// For houses[0], 3 floors should be added,
// then its floors is strictly greater than all houses of right side.

// For houses[1], 2 floors should be added.

// For houses[2], no need to add floor
// because it's already the luxurious.

// For houses[3], 2 floors need to added

// For houses[4], no house on the right,
// so no need to add any floor.






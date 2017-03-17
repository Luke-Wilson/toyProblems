function luxhouse(houses) {
  var lux = 0;

  var newHouses = houses.reverse().map(house => {
    if (house > lux) {
      lux = house;
      return 0;
    }
    else {
      return (lux + 1 - house);
    }
  });
  return newHouses.reverse();
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






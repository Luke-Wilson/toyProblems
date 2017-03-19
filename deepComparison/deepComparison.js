function deepCompare(o1, o2) {
  //type mismatch
  if (typeof o1 !== typeof o2) return false;

  //strings
  if (o1 === null || o1 === undefined || typeof o1 === 'string' || typeof o1 === 'number') {
    return o1 === o2;
  }

  //arrays
  if (Array.isArray(o1)) {
    if (o1.length !== o2.length) {
      return false;
    }
    var arraySame = true;
    o1.forEach((ele, index) => {
      if (deepCompare(ele, o2[index]) === false) {
        arraySame = false;
      }
    });
    return arraySame;
  }

  // object
  if (Object.keys(o1).length !== Object.keys(o2).length) {
    return false;
  }
  var objSame = true;
  for (var key in o1) {
    if (deepCompare(o1[key], o2[key]) === false) {
      objSame = false;
    }
  }
  return objSame;
}

var string1 = 'hi';
var string2 = 'hi';
var string3 = 'hi!';

var arr1 = [0,1,2,3,4];
var arr2 = [0,1,2,3,4];
var arr3 = [0,1,7,3,7];

var obj1 = {'a': 1, 'b': 7, c: arr1}
var obj2 = {'a': 1, 'b': 7, c: arr3}
var obj3 = {'a': 1, 'b': 8}


// console.log(deepCompare(undefined, null));
// console.log(deepCompare(string1, string3));

// console.log(deepCompare(arr1, arr2));
// console.log(deepCompare(arr1, arr3));

// console.log(deepCompare(obj1, obj2));
// console.log(deepCompare(obj1, obj3));







// Create your own tests here. These are some of the methods available:
//  Test.expect(boolean, [optional] message)
//  Test.assertEquals(actual, expected, [optional] message)
//  Test.assertEquals(deepCompare({"a":4, "b": 3}, {"a":4, "b": "3"}), true, [optional] message)
//  Test.assertEquals(deepCompare({"a":7, "b": 3}, {"a":4, "b": "3"}), false, [optional] message)
//  Test.assertEquals(deepCompare({"a":4, "b": 3}, {"a":4, "b": "9"}), false, [optional] message)
//  Test.assertNotEquals(actual, expected, [optional] message)






// {"a":4, "b": 3}                   {"a":4, b: 3, "c": 8}

//check if key length is the same
//if not, return false

//iterate through o1
//if the values for a key are the same in both objects, return true
//otherwise return false.
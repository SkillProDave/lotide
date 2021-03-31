function eqArrays(actual, expected) {
  if (actual === expected) {
  // return true;
  // console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  if (actual == null || expected == null) {
    // return false;
    // console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  if (actual.length !== expected.length) {
    // return false;
    // console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  // Please note that calling sort on an array will modify that array.
  // you might want to clone your array first.

  for (var i = 0; i < actual.length; ++i) {
    if (actual[i] !== expected[i]) {
    // return false;
    return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
    }
  }
  // return true;
  return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);

}

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false
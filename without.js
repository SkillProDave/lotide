const assertEqual = function(actual, expected) {
  const inputOne = actual;
  const inputTwo = expected;
  let result = "";
  if (inputOne === inputTwo) {
    result += `✅Assertion Passed: ${inputOne} === ${inputTwo}`;
  } else {
    result += `🔴Assertion Failed: ${inputOne} !== ${inputTwo}`;
  }
  return result;
};

function eqArrays(actual, expected) {
  if (actual == null || expected == null) {
   return false;
 }
 if (actual.length !== expected.length) {
   return false;
 }
 for (var i = 0; i < actual.length; ++i) {
   if (actual[i] !== expected[i]) {
   return false;
   }
 }
 return true;
}


const result = assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true) // => true
console.log(result);
// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false
// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

function eqArrays(actual, expected) {
  if (actual == null || expected == null) {
   return false;
 }
 if (actual.length !== expected.length) {
   return false;
 }
 for (var i = 0; i < actual.length; ++i) {
   if (actual[i] !== expected[i]) {
   return false;
   }
 }
 return true;
}

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🔴Assertion Failed: ${arr1} !== ${arr2}`);
  }
}

assertArraysEqual([1, 2, 3], [1, 2, 5]) // => true
// eqArrays([1, 2, 3], [1, 2, 3]) // => true
// eqArrays([1, 2, 3], [3, 2, 1]) // => false
// eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
// eqArrays(["1", "2", "3"], ["1", "2", 3]) // => false

// WITHOUT SECTION (not sure why we really needed the above for this)
const without = function (source, itemsToRemove) {
  for (let i = 0; i < itemsToRemove.length; ++i) {
    for (let j = 0; j < source.length; ++j) {
      if (itemsToRemove[i] === source[j]) {
        source.splice(j,1);
        console.log(source);
      }
    }
  } 
}

without([1, 2, 3], [1]) // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]) // => ["1", "2"]







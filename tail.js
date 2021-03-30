const tail = function(array) {
  return array.slice(1);
}
const assertEqual = function(tail, expected) {
if (tail === expected) {
  console.log(`✅✅✅ Assertion Passed: ${tail} === ${expected}`);
} else {
  console.log(`🛑🛑🛑 Assertion Failed: ${tail} !== ${expected}`);
}
}

assertEqual(tail([5,6,7]), 5);
assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");
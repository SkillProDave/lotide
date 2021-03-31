// // FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   }
// }

///////////////////////

const countLetters = function(string) {
  const resultObject = {};
  for (let letter of string) {  // 'for of' approach provided in question
    if (letter !== " ") { // removes spaces
      if (resultObject[letter]) { // if letter's been counted...
        resultObject[letter] += 1; // ...adds 1 to the count
      } else { 
        resultObject[letter] = 1;
      }
    }
}
return resultObject;
};
console.log(countLetters("lighthouse in the house"));
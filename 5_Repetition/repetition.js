let numbers = [1, 2, 2, 3, 4, 4, 5];

//!First view
function getUniqueNumbers(arr) {
  return [...new Set(arr)];
}
console.log(getUniqueNumbers(numbers)); //? [1,2,3,4,5]

//!Second view
function getUniqueNumbers(arr) {
  var uniqueNumbers = [];
  for (var i = 0; i < arr.length; i++) {
    if (uniqueNumbers.indexOf(arr[i]) === -1) {
      uniqueNumbers.push(arr[i]);
    }
  }
  return uniqueNumbers;
}
console.log(getUniqueNumbers(numbers)); //? [1,2,3,4,5]
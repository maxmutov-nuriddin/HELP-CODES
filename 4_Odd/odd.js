let numb = [1, 2, 3, 4, 5];

//!First view
function printOddNumbers(arr) {
  let oddNumbers = [];
  for (const key in arr) {
    if (arr[key] % 2 !== 0) {
      oddNumbers.push(arr[key]);
    }
  }
  return oddNumbers;
}
console.log(printOddNumbers(numb)); //? [1,3,5]

//!Second view
function getEvenNumbers(arr) {
  return arr.filter(num => num % 2 !== 0);
}
console.log(getEvenNumbers(numb)); //? [1,3,5]
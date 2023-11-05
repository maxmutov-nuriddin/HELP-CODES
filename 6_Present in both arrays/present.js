let numbers1 = [1, 2, 3, 4, 5];
let numbers2 = [4, 5, 6, 3, 7, 8];

function getCommonNumbers(arr1, arr2) {
  return arr1.filter(num => arr2.includes(num));
}
console.log(getCommonNumbers(numbers1, numbers2)); //? [3,4,5] 
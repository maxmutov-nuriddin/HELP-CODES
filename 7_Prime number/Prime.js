//простое число это 2,3,5,7,11,13,17...
let number = 17;

function isPrimeNumber(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrimeNumber(number)); //? true

//возврошает true false проверя простое число 
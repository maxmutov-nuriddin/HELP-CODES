let we = [1, 2, 3, 4, 5, 7, 8];

function name(wl) {
  let primes = [];
  for (let i = 0; i < wl.length; i++) {
    let isPrime = true;
    if (wl[i] < 2) {
      isPrime = false;
    } else {
      for (let j = 2; j < wl[i]; j++) {
        if (wl[i] % j === 0) {
          isPrime = false;
        }
      }
    }
    if (isPrime) {
      primes.push(wl[i]);
    }
  }
  return primes;
}
console.log(name(we)); //? [2,3,5,7]

//возврошает все простые числа
// SUM ALL PRIMES
// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

// https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/intermediate-algorithm-scripting/sum-all-primes

const sumPrimes = (num) => {
  const _checkIsPrime = (currentVal, primes) => {
    let isPrime = true;
    primes.forEach(prime => {
      if(currentVal % prime === 0) {
        isPrime = false;
      }
    });
    return isPrime;
  }

  const createPrimeArr = (num) => {
    let currentVal = 2;
    let primes = [];
    while(currentVal <= num) {
      if (_checkIsPrime(currentVal, primes)) {
        primes.push(currentVal);
      }
      currentVal += 1;
    };
    return primes;
  };

  return createPrimeArr(num).reduce((accumlator, currentVal) => {
    accumlator += currentVal;
    return accumlator;
  });
};

module.exports = sumPrimes;

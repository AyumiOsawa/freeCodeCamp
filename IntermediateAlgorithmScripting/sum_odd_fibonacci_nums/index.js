// SUM ALL ODD FIBONACCI NUMBERS
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
//
// The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
//
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

const sumFibs = (num) => {
  const seed = 1;
  const createFibonacci = (num) => {
    const length = num * 2;
    let fibonacci = [seed, seed];
    for (let i = 2; i < length; i++) {
      fibonacci.push(fibonacci[i-2] + fibonacci[i-1]);
    }
    return fibonacci;
  }

  const sum = createFibonacci(num).reduce((accumulator, currentVal, index) => {
    if(index % 2 === 1) {
      accumulator += currentVal
    }
    return accumulator;
  })
  console.log('sum:', sum);
  return sum;
}

module.exports = sumFibs;

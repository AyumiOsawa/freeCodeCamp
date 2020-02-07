"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const text = document.querySelector("#array");
  let numbers = [18, 8, -24, 28, -17, 14, -10, 24, 12, -31, 19, 32, -14, -10, 13, 8, -15, -2, 17];
  text.textContent = String(numbers);

  // ========================
  // Longest ascending subsequence
  // Find the length of the longest ascending subsequence of numbers in the array

  // Plan:
  // find the number of the longest ascending array (non-consecutive) starting with each elements in the array, and then compare the length of them and pick the longest one.

  // (1) first, find the number of longest ascending array (non-consecutive) starting with the first element of the array
  // (2) next, make a loop going through all the numbers to find the number of longest ascending array (non-consecutive) starting with each elementand. Store those length into lengthAscending.
  // (3) find the biggest number from the lengthAscending



  let lengthAscending = []; // holding the lengths of the ascending arrays starting with each element

  for (let startIndex = 0; startIndex < numbers.length; startIndex += 1) {
    let start = numbers[startIndex];
    let ascending = [start]; // holding the ascending array starting with each element
    for (let i = startIndex + 1; i < numbers.length; i += 1) {
      if (numbers[i] > start) {
        ascending.push(numbers[i])
        start = numbers[i];
      }
    };
    lengthAscending.push(ascending.length);
    console.log(lengthAscending);
  };

  let biggestSoFar = 0;
  for (let item of lengthAscending) {
    if (item > biggestSoFar) {
      biggestSoFar = item;
    }
  };

  console.log(biggestSoFar);


})


// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

function sumMix(x) {
  if (x.length == 1) {
    return +x[0];
  }
  return x.reduce((a, b) => Number(a) + Number(b));
}

// Task

// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

function maxTriSum(numbers) {
  let uniqNumbers = [...new Set(numbers)];
  uniqNumbers = uniqNumbers.sort((a, b) => {
    return a - b;
  });
  return (
    uniqNumbers[uniqNumbers.length - 3] +
    uniqNumbers[uniqNumbers.length - 2] +
    uniqNumbers[uniqNumbers.length - 1]
  );
}

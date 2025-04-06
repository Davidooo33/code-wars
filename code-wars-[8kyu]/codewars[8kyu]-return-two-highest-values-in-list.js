// In this kata, your job is to return the two distinct highest values in a list. If there're less than 2 unique values, return as many of them, as possible.

// The result should also be ordered from highest to lowest.

// Examples:

// [4, 10, 10, 9]  =>  [10, 9]
// [1, 1, 1]  =>  [1]
// []  =>  []

function twoHighest(arr) {
  let uniqArr = [...new Set(arr)];
  if (uniqArr.length > 1) {
    uniqArr = uniqArr.sort((a, b) => a - b);
    return uniqArr.slice(-2).reverse();
  } else return uniqArr;
}

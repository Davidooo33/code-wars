// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
// [] --> []

// You can assume that all values are integers. Do not mutate the input array.

function invert(array) {
    if (array.length === 0) {
      return []
    }
    const arr = []
    for (let i = 0; i < array.length; i++) {
      arr.push(array[i] * -1)
    }
     return arr
  }

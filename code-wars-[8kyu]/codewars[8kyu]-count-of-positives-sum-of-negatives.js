// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.
// Example

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
    // your code here
    if (!input || input.length == 0) {
      return []
    }
    let arr1 = []
    let arr2 = []
    let i = 0
    while (i < input.length) {
      if (input[i] > 0) {
        arr1.push(input[i])
      } else arr2.push(input[i])
      i++
    }
    arr2 = arr2.reduce((a, b) => a + b, 0);  
    return [arr1.length, arr2] 
  } 

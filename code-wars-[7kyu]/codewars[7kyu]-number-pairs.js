// In this kata the aim is to compare each pair of integers from two arrays, and return a new array of large numbers.

// Note: Both arrays have the same dimensions.
// Example:

// let arr1 = [13, 64, 15, 17, 88];
// let arr2 = [23, 14, 53, 17, 80];
// getLargerNumbers(arr1, arr2); // Returns [23, 64, 53, 17, 88]

function getLargerNumbers(a, b) {
    let array = []
    for (let i=0; i < a.length; i++) {
      if (a[i] < b[i]) {
       array.push(b[i])
      } 
    else if ( b[i] < a[i]) {
      array.push(a[i])
    }
    else if ( b[i] == a[i])
      array.push(a[i])
    }
    return array
  }

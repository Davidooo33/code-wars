// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

function findLongest(array){
    // code here
    let maxLength = 0 
    let i = 0 
    let answer = 0
    while (i < array.length) {
      let currentLength = array[i].toString().length
      if (currentLength > maxLength) {
        answer = array[i]
      }
      maxLength = Math.max(currentLength, maxLength)
      i++
    }
    return answer
  }

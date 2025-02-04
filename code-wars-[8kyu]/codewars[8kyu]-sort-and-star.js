// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

function twoSort(s) {
    const sortedArr = s.sort()
    const wordArr = sortedArr[0].split('')
    let i = 0, answer = ''
    while (i < wordArr.length) { 
      if (i < wordArr.length - 1) {
      answer += wordArr[i] + '***'
      } else answer += wordArr[i]
    i++
    }
    return answer
  }  

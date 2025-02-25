// Description:

// Your task is simply to count the total number of lowercase letters in a string.
// Examples

// "abc" ===> 3

// "abcABC123" ===> 3

// "abcABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 3

// "" ===> 0;

// "ABC123!@€£#$%^&*()_-+=}{[]|\':;?/>.<,~" ===> 0

// "abcdefghijklmnopqrstuvwxyz" ===> 26

function lowercaseCount(str){
    const regex = /[a-z]/
    let count = 0
    let i = 0
    while (i < str.length) {
      if (regex.test(str[i])) {
        count++
      }
      i++
    }
    return count
  }

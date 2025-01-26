// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

function isPangram(string){
  
    if (string.length < 26) {
      return false
    }
    
    const re = /[A-Z]/
    const arr = string.toUpperCase().split('')
    const arr2 = []
      
    for (let i = 0; i < string.length; i++) {
      if (arr2.includes(arr[i]) == false && re.test(arr[i]) == true) {
        arr2.push(arr[i])
      }
    }
    
  return arr2.length == 26 ? true : false  
  }

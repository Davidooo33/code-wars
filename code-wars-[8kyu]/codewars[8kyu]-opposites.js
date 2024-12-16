// Give you two strings: s1 and s2. If they are opposite, return true; otherwise, return false. Note: The result should be a boolean value, instead of a string.

// The opposite means: All letters of the two strings are the same, but the case is opposite. you can assume that the string only contains letters or it's a empty string. Also take note of the edge case - if both strings are empty then you should return false/False.

function isOpposite(s1,s2){

    const string1 = s1.toUpperCase()
    const string2 = s2.toUpperCase()
    
    if (s1 === '' || s2 === '') {
      return false
    }
    
    let answer
      for (i=0; i < s1.length; i++) {
          if (s1[i] === s2[i]) {
            return false
          } else if (s1.length !== s2.length) {
            return false
          } else if (string1 !== string2) {
            return false
          } else answer = true
    
      }
      return answer
    }

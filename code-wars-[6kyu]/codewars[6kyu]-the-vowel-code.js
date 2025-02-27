// Step 1: Create a function called encode() to replace all the lowercase vowels in a given string with numbers according to the following pattern:

// a -> 1
// e -> 2
// i -> 3
// o -> 4
// u -> 5

// For example, encode("hello") would return "h2ll4". There is no need to worry about uppercase vowels in this kata.

// Step 2: Now create a function called decode() to turn the numbers back into vowels according to the same pattern shown above.

// For example, decode("h3 th2r2") would return "hi there".

// For the sake of simplicity, you can assume that any numbers passed into the function will correspond to vowels.

function encode(string) {
    const vowelArr = ['a', 'e', 'i', 'o', 'u']
    const vowels = {
      'a' : 1,
      'e' : 2,
      'i' : 3,
      'o' : 4,
      'u' : 5
    }
    let i = 0
    let answer = ''
    while (i < string.length) {
      if (vowelArr.includes(string[i])) {
          answer += vowels[string[i]]
          } else answer += string[i]
      i++
    }
    return answer
  }
  
  function decode(string) {
     const numArr = ['1', '2', '3', '4', '5']
     const vowels = {
      '1' : 'a',
      '2' : 'e',
      '3' : 'i',
      '4' : 'o',
      '5' : 'u'
    } 
    let i = 0
    let answer = ''
    while (i < string.length) {
      if (numArr.includes(string[i])) {
          answer += vowels[string[i]]
          } else answer += string[i]
      i++
    }
    return answer
  }

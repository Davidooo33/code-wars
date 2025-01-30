// Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples:

// "Hey fellow warriors"  --> "Hey wollef sroirraw" 
// "This is a test        --> "This is a test" 
// "This is another test" --> "This is rehtona test"

function spinWords(string){
    const stringArr = string.split(' ')
    console.log(stringArr)
    const newArr = []
    for (let i = 0; i < stringArr.length; i++) {
      if (stringArr[i].length > 4) {
        newArr.push(stringArr[i].split('').reverse().join(''))
      } else newArr.push(stringArr[i]) 
    }
    return newArr.join(' ')
  }

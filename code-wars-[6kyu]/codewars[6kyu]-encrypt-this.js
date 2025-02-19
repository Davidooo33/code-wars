// Acknowledgments:

// I thank yvonne-liu for the idea and for the example tests :)
// Description:

// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

//     Your message is a string containing space separated words.
//     You need to encrypt each word in the message using the following rules:
//         The first letter must be converted to its ASCII code.
//         The second letter must be switched with the last letter
//     Keepin' it simple: There are no special characters in the input.

// Examples:

// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

var encryptThis = function(text) {
    // Implement me! :)
    text = text.split(' ')
    let answer = ' '
    for (let i = 0; i < text.length; i++) {
     let word = text[i].split('')
     answer += ' '
     for (let j = 0; j < word.length; j++) {
         if (j == 0) {
         answer += word[j].charCodeAt(0)
       } else if (j === 1) {
         answer += word[word.length - 1]
       } else if (j === word.length - 1) {
         answer += word[1]
       } else answer += word[j]
      }
     }
    return answer.trim()
  }

// Write a function that checks if a given string (case insensitive) is a palindrome.

// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

function isPalindrome(x) {
    const s = x.split('').reverse().join('')
    return s.toLowerCase() == x.toLowerCase() ? true : false
  }

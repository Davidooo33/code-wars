// Given a lowercase string that has alphabetic characters only and no spaces, return the highest value of consonant substrings. Consonants are any letters of the alphabet except "aeiou".

// We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

// For example, for the word "zodiacs", let's cross out the vowels. We get: "z o d ia c"

// "zodiac" -> 26

// The consonant substrings are: "z", "d" and "c" with values "z" = 26, "d" = 4 and "c" = 3. The highest is 26.

// "strength" -> 57

// The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.

// For C: do not mutate input.

// More examples in test cases. Good luck!

function solve(s) {
    const array = ['a', 'e', 'i', 'o', 'u']
    const subArray = []
    let i = 0
    let count = 0
    let string = ''
    while (i < s.length) {
      if (!array.includes(s[i])) {
        string += s[i]
        if (i == s.length - 1 && string != '') {
          subArray.push(string)
        }
      } else if (array.includes(s[i])) {
        if (string != '') {
          subArray.push(string)  
        }
        string = ''
      }
      i++
    }
    i = 0
    let j = 0
    const finishedArray = []
    while (i < subArray.length) {
      let convertString = subArray[i]
      let count = 0
      while (j < convertString.length) {
        count += convertString.charCodeAt(j) - 96
        j++
      }
      j = 0
      finishedArray.push(count)
      i++
    }
    return Math.max(...finishedArray);
  };

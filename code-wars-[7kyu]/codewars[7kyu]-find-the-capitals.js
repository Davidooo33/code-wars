// Instructions

// Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.
// Example (Input --> Output)

// "CodEWaRs" --> [0,3,4,6]

var capitals = function (word) {
    const regex = /[A-Z]/
    const indexArr = []
    word.split('').map((letter, i) => {
      if (regex.test(letter)) {
        indexArr.push(i)
      }
    })
    return indexArr
  };

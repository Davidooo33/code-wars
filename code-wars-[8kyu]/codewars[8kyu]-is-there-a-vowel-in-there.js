// Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o, u).

// If they are, change the array value to a string of that vowel.

// Return the resulting array.

function isVow(a) {
  const letters = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < a.length; i++) {
    let letterToCheck = String.fromCharCode(a[i]);
    if (letters.includes(letterToCheck)) {
      a[i] = letterToCheck;
    }
  }
  return a;
}

// When provided with a String, capitalize all vowels

// For example:

// Input : "Hello World!"

// Output : "HEllO WOrld!"

// Note: Y is not a vowel in this kata.

function swap(string) {
  string = string.split("");
  const arr = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < string.length; i++) {
    if (arr.includes(string[i])) {
      string[i] = string[i].toUpperCase();
    }
  }
  return string.join("");
}

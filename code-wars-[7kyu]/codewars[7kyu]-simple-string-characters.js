// In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters (everything else), as follows.

// The order is: uppercase letters, lowercase letters, numbers and special characters.

// "*'&ABCDabcde12345" --> [ 4, 5, 5, 3 ]

// More examples in the test cases.

// Good luck!

function solve(s) {
  let numUpper = s.length - s.replace(/[A-Z]/g, "").length;
  let numLower = s.length - s.replace(/[a-z]/g, "").length;
  let numCount = s.length - s.replace(/[0-9]/g, "").length;
  let specialCount = s.length - s.replace(/\W|_/g, "").length;
  return [numUpper, numLower, numCount, specialCount];
}

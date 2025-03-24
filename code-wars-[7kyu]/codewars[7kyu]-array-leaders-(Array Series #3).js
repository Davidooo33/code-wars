// Task

// Given an array/list [] of integers , Find all the LEADERS in the array.
// Notes

//     Array/list size is at least 3 .

//     Array/list's numbers Will be mixture of positives , negatives and zeros

//     Repetition of numbers in the array/list could occur.

//     Returned Array/list should store the leading numbers in the same order in the original array/list .

function arrayLeaders(numbers) {
  let answer = [];
  for (let i = 0; i < numbers.length; i++) {
    let arr = [];
    if (i != numbers.length - 1) {
      arr = numbers.slice(i + 1);
      let result = arr.reduce((a, b) => a + b);
      if (numbers[i] > result) answer.push(numbers[i]);
    }
    if (i == numbers.length - 1) {
      if (numbers[i] > 0) {
        answer.push(numbers[i]);
      }
    }
  }
  return answer;
}

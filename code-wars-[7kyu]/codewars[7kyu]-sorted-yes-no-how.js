// Complete the method which accepts an array of integers, and returns one of the following:

//     "yes, ascending" - if the numbers in the array are sorted in an ascending order
//     "yes, descending" - if the numbers in the array are sorted in a descending order
//     "no" - otherwise

// You can assume the array will always be valid, and there will always be one correct answer.

function isSortedAndHow(array) {
  let order = "";
  let answer = 0;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < array[i + 1]) {
      order = "ascending";
      if (answer == 0 || answer == 1) {
        answer = 1;
      } else return "no";
    }
    if (array[i] > array[i + 1]) {
      order = "descending";
      if (answer == 0 || answer == 2) {
        answer = 2;
      } else return "no";
    }
  }
  return `yes, ${order}`;
}

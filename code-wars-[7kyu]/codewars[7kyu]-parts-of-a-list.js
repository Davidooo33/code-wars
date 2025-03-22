// Write a function partlist that gives all the ways to divide a list (an array) of at least two elements into two non-empty parts.

//     Each two non empty parts will be in a pair (or an array for languages without tuples or a structin C - C: see Examples test Cases - )
//     Each part will be in a string
//     Elements of a pair must be in the same order as in the original array.

function partlist(arr) {
  let answer = [];
  for (let i = 1; i < arr.length; i++) {
    let arr2 = [];
    arr2.push(arr.slice(0, i).join(" "));
    arr2.push(arr.slice(i).join(" "));
    answer.push(arr2);
  }
  return answer;
}

// The input is a string str of digits. Cut the string into chunks (a chunk here is a substring of the initial string) of size sz (ignore the last chunk if its size is less than sz).

// If the sum of a chunk's digits is divisible by 2, reverse that chunk; otherwise rotate it to the left by one position. Put together these modified chunks and return the result as a string.

// If

//     sz is <= 0 or if str == "" return ""
//     sz is greater (>) than the length of str it is impossible to take a chunk of size sz hence return "".

function revrot(str, sz) {
  if (sz <= 0 || str.length < sz) return "";

  let arr = [];

  for (let i = 0; i <= str.length - sz; i += sz) {
    let nums = str.slice(i, i + sz).split("");
    let sumOfCubes = nums.reduce((a, b) => Number(a) + Number(b), 0);

    if (sumOfCubes % 2 === 0) {
      arr.push(nums.reverse().join(""));
    } else {
      arr.push(nums.slice(1).concat(nums[0]).join("")); 
    }
  }

  return arr.join("");
}

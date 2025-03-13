// Description:

// Complete the method which returns the number which is most frequent in the given input array. If there is a tie for most frequent number, return the largest number among them.

// Note: no empty arrays will be given.
// Examples

// [12, 10, 8, 12, 7, 6, 4, 10, 12]              -->  12
// [12, 10, 8, 12, 7, 6, 4, 10, 12, 10]          -->  12
// [12, 10, 8, 8, 3, 3, 3, 3, 2, 4, 10, 12, 10]  -->   3

function highestRank(arr) {
  const countMap = {};
  arr.forEach((item) => {
    countMap[item] = (countMap[item] || 0) + 1;
  });
  let largestNum = null;
  let maxCount = 0;
  for (const [num, count] of Object.entries(countMap)) {
    if (count > maxCount || (count === maxCount && Number(num) > largestNum)) {
      maxCount = count;
      largestNum = Number(num);
    }
  }
  return largestNum;
}

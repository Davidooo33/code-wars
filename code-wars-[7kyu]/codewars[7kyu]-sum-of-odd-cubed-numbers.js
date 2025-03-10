// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

function cubeOdd(arr) {
    let answer = 0
    let regex = /[a-zA-Z]/
    const foundItem = arr.find(item => regex.test(item));
    if (foundItem) {
      return undefined
    }
    arr = arr.filter((num) => Math.abs(num) % 2 == 1)
    for (let i = 0; i < arr.length; i++) {
      answer += Math.pow(arr[i], 3)
    } 
    return answer;
    }

// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

function isIsogram(str){
    let array = str.toUpperCase().split('');
    let countMap = {};
    
    array.forEach(element => {
      if (countMap[element] === undefined) {
        countMap[element] = 1;
      } else {
        countMap[element]++;
      }
    });
    
    const checkArr = Object.values(countMap)
    console.log(checkArr, str)
    for (let i = 0; i < checkArr.length; i++) {
      if (checkArr[i] > 1) {
        return false
      }
    }
      return true
    }

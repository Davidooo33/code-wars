// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

function count(string) {
  
    const array = string.split('')
    let countMap = {};
      
    array.forEach(element => {
      if (countMap[element] === undefined) {
        countMap[element] = 1;
      } else {
        countMap[element]++;
      }
    });
    
    return countMap
    }

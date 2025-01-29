// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

// If you like this Kata, please try:

// Indexed capitalization

// Even-odd disparity

function capitalize(s){
    const array1 = s.split('')
    const array2 = s.split('')
  
    array1.forEach((arrItem, index, original) => {
      if (index % 2 === 0) {
        original[index] = arrItem.toUpperCase();
  }
      })
    array2.forEach((arrItem, index, original) => {
      if (index % 2 === 1) {
        original[index] = arrItem.toUpperCase();
  }
    
  })
      const finishedArray2 = array2.join(''); 
      const finishedArray1 = array1.join('');
  
      return [finishedArray1, finishedArray2]
  };

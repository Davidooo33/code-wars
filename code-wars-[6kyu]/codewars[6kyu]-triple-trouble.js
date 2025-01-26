// Write a function

// tripledouble(num1,num2)

// which takes numbers num1 and num2 and returns 1 if there is a straight triple of a digit at any place in num1 and also a straight double of the same digit in num2.

// If this isn't the case, return 0
// Examples

// tripledouble(451999277, 41177722899) == 1 // num1 has straight triple 999s and 
//                                           // num2 has straight double 99s

// tripledouble(1222345, 12345) == 0 // num1 has straight triple 2s but num2 has only a single 2

// tripledouble(12345, 12345) == 0

// tripledouble(666789, 12345667) == 1


function tripledouble(num1, num2) {
    const strNum1 = num1.toString();
    const strNum2 = num2.toString();
    
    for (let i = 0; i < strNum1.length - 2; i++) {
      if (strNum1[i] === strNum1[i + 1] && strNum1[i] === strNum1[i + 2]) {
        if (strNum2.includes(strNum1[i] + strNum1[i])) {
          return 1; 
        }
      }
    }
  
    return 0;
  }

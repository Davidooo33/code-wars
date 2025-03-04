// Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.

// Return as a number.

function divCon(x){
    let stringTotal = 0
    let numTotal = 0
    for (let i = 0; i < x.length; i++) {
      if (typeof x[i] == 'number') {
        numTotal += x[i]
      } else stringTotal += +x[i]
    }
    return numTotal - stringTotal
  }

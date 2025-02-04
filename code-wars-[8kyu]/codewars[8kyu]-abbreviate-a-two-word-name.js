// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

function abbrevName(name){
    const nameArr = name.split(' ')
    const firstName = nameArr[0].split('')
    const secondName = nameArr[1].split('')
    return firstName[0].toUpperCase() + '.' + secondName[0].toUpperCase()
  }

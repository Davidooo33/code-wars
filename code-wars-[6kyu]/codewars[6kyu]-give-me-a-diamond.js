// Description:

// Jamie is a programmer, and James' girlfriend. She likes diamonds, and wants a diamond string from James. Since James doesn't know how to make this happen, he needs your help.
// Task

// You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. Trailing spaces should be removed, and every line must be terminated with a newline character (\n).

// Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.
// Examples

// A size 3 diamond:

//  *
// ***
//  *

// ...which would appear as a string of " *\n***\n *\n"

// A size 5 diamond:

//   *
//  ***
// *****
//  ***
//   *

// ...that is:

// "  *\n ***\n*****\n ***\n  *\n"

function diamond(n){
    if (n % 2 === 0 || n < 1) {
      return null
    } else if (n === 1) {
      return '*\n'
    }
    let spaceCount = n
    let answer = []
    for (let i = 1; i <= n; i++) {
      if (i % 2 === 1) {
        if (spaceCount > 1) {
          answer.push(' '.repeat(Math.floor(spaceCount / 2)) + '*'.repeat(i) + '\n')
          spaceCount -= 2
      } else answer.push('*'.repeat(i) + '\n')
    }
  }
    let answer2 = answer.slice(0, answer.length - 1)
    answer2.reverse()
    answer = answer.concat(answer2)
    return answer.join('')
  } 

  console.log(diamond(101))

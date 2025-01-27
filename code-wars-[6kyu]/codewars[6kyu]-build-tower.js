// Build Tower

// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ", 
//   "*****"
// ]

// And a tower with 6 floors looks like this:

// [
//   "     *     ", 
//   "    ***    ", 
//   "   *****   ", 
//   "  *******  ", 
//   " ********* ", 
//   "***********"
// ]

// Go challenge Build Tower Advanced once you have finished this :)

function towerBuilder(nFloors) {
    if (nFloors == 1) return ['*'];
    let arr = [];
    let floor = 1
    for (let i = nFloors; i > 0; i--) {
      if (i > 1) {
        arr.push(' '.repeat(i - 1) + '*'.repeat(floor) + ' '.repeat(i - 1))
        floor += 2
      } else if (i == 1) arr.push('*'.repeat(floor))
    }
  return arr
  }

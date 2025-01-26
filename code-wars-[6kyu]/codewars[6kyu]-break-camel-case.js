// Complete the solution so that the function will break up camel casing, using a space between words.
// Example

// "camelCasing"  =>  "camel Casing"
// "identifier"   =>  "identifier"
// ""             =>  ""

function solution(string) {
    const re = /[a-z]/
    let finishedString = ''
    for (let i = 0; i < string.length; i++) {
      if (re.test(string[i]) == true) {
        finishedString += string[i]
      } else finishedString += ' ' + string[i]
    }
    return finishedString;
  }

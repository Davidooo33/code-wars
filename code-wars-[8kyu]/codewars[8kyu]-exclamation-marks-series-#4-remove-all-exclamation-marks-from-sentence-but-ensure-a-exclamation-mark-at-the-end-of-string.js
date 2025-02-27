// Description:

// Remove all exclamation marks from sentence but ensure a exclamation mark at the end of string. For a beginner kata, you can assume that the input data is always a non empty string, no need to verify it.
// Examples

// "Hi!"     ---> "Hi!"
// "Hi!!!"   ---> "Hi!"
// "!Hi"     ---> "Hi!"
// "!Hi!"    ---> "Hi!"
// "Hi! Hi!" ---> "Hi Hi!"
// "Hi"      ---> "Hi!"

function remove (string) {
    //coding and coding....
    let i = 0
    let answer = ''
    while (i < string.length) {
      if (i < string.length - 1 && string[i] === '!') {
        answer += ''
      } else answer += string[i]
      i++
    }
    if (answer[answer.length - 1] != '!') {
      answer += '!'
    }
    return answer;  
  }

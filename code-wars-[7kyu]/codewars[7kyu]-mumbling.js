// This time no story, no theory. The examples below show you how to write function accum:
// Examples:

// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"

// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
	// your code
  let i = 0
  let answer = ''
  console.log(s.length)
  while (i < s.length) {
      if (i == 0) {
        answer += s[i] + '-'
      } else if (i < s.length - 1) {
      answer += s[i].toUpperCase() + s[i].toLowerCase().repeat(i) + '-'
      } else if (i == s.length - 1) {
       answer += s[i].toUpperCase() + s[i].toLowerCase().repeat(i)
      } 
    i++
  }
  return answer
}

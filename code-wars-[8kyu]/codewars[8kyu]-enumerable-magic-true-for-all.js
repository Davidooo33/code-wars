// Create a method all which takes two params:
//     a sequence
//     a function (function pointer in C)
// and returns true if the function in the params returns true for every element in the sequence. Otherwise, it should return false. If the sequence is empty, it should return true, since technically nothing failed the test.

function all( arr, fun ){
    let answer = false
    if (arr.length === 0) {
      return true
    } else if (arr.length > 0) {
      for (i=0; i < arr.length; i++) {
        answer = fun(arr[i])
      }
    }
   return answer;
  }

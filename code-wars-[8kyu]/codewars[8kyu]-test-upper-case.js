// Create a method to see whether the string is ALL CAPS.

String.prototype.isUpperCase = function() {
    const regex = /[a-z]/;
     let answer = regex.test(String(this))
    return !answer
   }

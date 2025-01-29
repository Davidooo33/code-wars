// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    let vowelsCount = 0;
    const arr = str.split("");
    for (let i = 0; i < arr.length; i++) {
       switch(arr[i]) {
             case 'a':
                 vowelsCount++;
                 break;
             case 'e':
                 vowelsCount++;
                 break;
             case 'i':
                 vowelsCount++;
                 break;
             case 'o':
                 vowelsCount++;
                 break;
             case 'u':
                 vowelsCount++;
                 }
  }
         return vowelsCount;
  }

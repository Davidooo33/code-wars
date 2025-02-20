// Description:

// Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

// Examples:

// encrypt("012345", 1)  =>  "135024"
// encrypt("012345", 2)  =>  "135024"  ->  "304152"
// encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

// encrypt("01234", 1)  =>  "13024"
// encrypt("01234", 2)  =>  "13024"  ->  "32104"
// encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"

// Together with the encryption function, you should also implement a decryption function which reverses the process.

// If the string S is an empty value or the integer N is not positive, return the first argument without changes.

function encrypt(text, n) {
    if (text == null || text.length == 0 || n <= 0) {
       return text;
     }
     for (let j = 0; j < n; j++) {
       let strEven = '';
       let strOdd = '';
       for (let i = 0; i < text.length; i++) {
         if (i % 2 === 0) {
           strEven += text[i];
         } else {
           strOdd += text[i];
         }
       }
           text = strOdd + strEven;
     }
     return text;
   }
   function decrypt(encryptedText, n) {
     if (!encryptedText || n <= 0) return encryptedText;
     let length = encryptedText.length;
     for (let i = 0; i < n; i++) {
       let mid = Math.floor(length / 2);
       let oddStr = encryptedText.slice(0, mid); 
       let evenStr = encryptedText.slice(mid);
       let decrypted = '';
       for (let j = 0; j < mid; j++) {
         decrypted += (evenStr[j] || '') + (oddStr[j] || '');
       }
       if (length % 2 !== 0) decrypted += evenStr[mid];  
       encryptedText = decrypted;
     } 
     return encryptedText;
   }

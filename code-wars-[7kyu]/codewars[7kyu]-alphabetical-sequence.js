// In this kata you will be given a random string of letters and tasked with returning them as a string of comma-separated sequences sorted alphabetically, with each sequence starting with an uppercase character followed by n-1 lowercase characters, where n is the letter's alphabet position 1-26.
// Example

// "ZpglnRxqenU" -> "Eeeee,Ggggggg,Llllllllllll,Nnnnnnnnnnnnnn,Nnnnnnnnnnnnnn,Pppppppppppppppp,Qqqqqqqqqqqqqqqqq,Rrrrrrrrrrrrrrrrrr,Uuuuuuuuuuuuuuuuuuuuu,Xxxxxxxxxxxxxxxxxxxxxxxx,Zzzzzzzzzzzzzzzzzzzzzzzzzz"

// Technical Details

//     The string will include only letters.
//     The first letter of each sequence is uppercase followed by n-1 lowercase.
//     Each sequence is separated with a comma.
//     Return value needs to be a string.

function alphaSeq (str) {
    const upperStringArray = str.toUpperCase().split('').sort();
    let num = 0;
    let string = ''
    for (let i = 0; i < str.length; i++) {
      num = upperStringArray[i].charCodeAt(0) - 65;
      string += upperStringArray[i] + upperStringArray[i].toLowerCase().repeat(num) + ','
    }
    return string.substring(0, string.length - 1)
  }

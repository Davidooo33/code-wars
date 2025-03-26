// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

//     the second and the last letter is switched (e.g. Hello becomes Holle)
//     the first letter is replaced by its character code (e.g. H becomes 72)

//     there are no special characters used, only letters and spaces
//     words are separated by a single space
//     there are no leading or trailing spaces

// Examples

// '72olle 103doo 100ya' --> 'Hello good day'
// '82yade 115te 103o'   --> 'Ready set go'

function decipherThis(str) {
  str = str.split(" ");
  const regex = /[0-9]/;
  for (let i = 0; i < str.length; i++) {
    let decode = str[i].split("");
    let newSecondLetter = "";
    if (!regex.test(decode[decode.length - 1])) {
      newSecondLetter = decode[decode.length - 1];
      decode.pop();
    }
    let newLastLetter = "";
    let numToDecode = "";
    let jumble = "";
    for (let j = 0; j < decode.length; j++) {
      if (regex.test(+decode[j])) {
        numToDecode += decode[j];
      } else if (regex.test(+decode[j - 1]) && typeof decode[j] == "string") {
        newLastLetter = decode[j];
      } else jumble += decode[j];
    }
    let startOfWord = String.fromCharCode(+numToDecode);
    str[i] = startOfWord + newSecondLetter + jumble + newLastLetter;
  }
  return str.join(" ");
}

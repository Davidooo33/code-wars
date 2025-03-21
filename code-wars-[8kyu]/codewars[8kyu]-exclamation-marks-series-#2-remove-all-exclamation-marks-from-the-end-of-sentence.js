// Description:

// Remove all exclamation marks from the end of sentence.
// Examples

// "Hi!"     ---> "Hi"
// "Hi!!!"   ---> "Hi"
// "!Hi"     ---> "!Hi"
// "!Hi!"    ---> "!Hi"
// "Hi! Hi!" ---> "Hi! Hi"
// "Hi"      ---> "Hi"

function remove(string) {
  string = string.split("").reverse();
  let regex = /[a-z]/i;
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] == "!") {
      count++;
    }
    if (regex.test(string[i])) {
      i = string.length;
    }
  }
  return string.slice(count, string.length).reverse().join("");
}

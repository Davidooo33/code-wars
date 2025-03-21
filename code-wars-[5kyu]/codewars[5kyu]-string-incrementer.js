// Your job is to write a function which increments a string, to create a new string.

//     If the string already ends with a number, the number should be incremented by 1.
//     If the string does not end with a number. the number 1 should be appended to the new string.

function incrementString(str) {
  const match = str.match(/(\d*)$/);
  const number = match[0];
  const prefix = str.slice(0, -number.length);
  if (number === "") {
    return str + "1";
  }
  const incremented = (parseInt(number, 10) + 1)
    .toString()
    .padStart(number.length, "0");
  return prefix + incremented;
}

// Modify the kebabize function so that it converts a camel case string into a kebab case.

// "camelsHaveThreeHumps"  -->  "camels-have-three-humps"
// "camelsHave3Humps"  -->  "camels-have-humps"
// "CAMEL"  -->  "c-a-m-e-l"

// Notes:

// the returned string should only contain lowercase letters

function kebabize(str) {
  str = str.replace(/[^a-zA-Z]/g, "");

  const strArray = [];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === char.toUpperCase() && i !== 0) {
      strArray.push("-");
      strArray.push(char.toLowerCase());
    } else {
      strArray.push(char.toLowerCase());
    }
  }

  return strArray.join("");
}

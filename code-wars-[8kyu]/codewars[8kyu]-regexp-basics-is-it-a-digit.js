// Implement String#digit? (in Java StringUtils.isDigit(String)), which should return true if given object is a digit (0-9), false otherwise.

String.prototype.digit = function () {
  console.log(this);
  const regex = /[0-9]/;
  if (this.length == 1 && regex.test(this)) {
    return true;
  }
  return false;
};

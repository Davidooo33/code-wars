// A number is called Automorphic number if and only if its square ends in the same digits as the number itself. For example, 25 is an automorphic number because its square (625) ends with 25.
// Task

// Given a positive number, determine if it is Automorphic or not. If it is, return "Automorphic", otherwise return "Not!!"

function automorphic(n) {
  const length = n.toString().length;
  const isIt = n ** 2;
  if (isIt.toString().slice(-length) == n.toString()) return "Automorphic";
  return "Not!!";
}

// Complete the function that calculates the area of the red square, when the length of the circular arc A is given as the input. Return the result rounded to two decimals.

// Note: use the π value provided in your language (Math::PI, M_PI, math.pi, etc)

function squareArea(A) {
  if (A == 0) {
    return 0;
  }
  const circumference = A * 4;
  const radius = circumference / (Math.PI * 2);
  return radius * radius;
}

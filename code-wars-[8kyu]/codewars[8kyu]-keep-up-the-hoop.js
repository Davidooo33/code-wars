// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message:

//     If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
//     If he doesn't get 10 hoops, return the string "Keep at it until you get it".

function hoopCount(n) {
  if (n > 9) {
    return "Great, now move on to tricks";
  }
  return "Keep at it until you get it";
}

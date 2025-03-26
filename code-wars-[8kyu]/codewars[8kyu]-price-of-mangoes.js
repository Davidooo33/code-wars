// Accountant time! For a given quantity and price (per mango), calculate the total cost of the mangoes.
// But! Every third mango is free!

function mango(quantity, price) {
  let numberGiven = 0;
  let totalCost = 0;
  while (numberGiven < quantity) {
    numberGiven++;
    if (numberGiven % 3 == 0) continue;
    totalCost += price;
  }
  return totalCost;
}

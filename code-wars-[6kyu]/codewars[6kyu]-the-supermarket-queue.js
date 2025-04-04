// Description:

// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!
// input

//     customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
//     n: a positive integer, the number of checkout tills.

// output

// The function should return an integer, the total time required.

function queueTime(customers, n) {
    
    if (customers.length === 0) {
      return 0;
    }
    
    if (n === 1) {
      return customers.reduce((a, b) => a + b, 0);
    }
  
    const tillArr = new Array(n).fill(0);
    
    for (let i = 0; i < customers.length; i++) {
      let minTillIndex = tillArr.indexOf(Math.min(...tillArr));
      
      tillArr[minTillIndex] += customers[i];
    }
  
    return Math.max(...tillArr);
  }

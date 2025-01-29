// Write a simple function that takes as a parameter a date object and returns a boolean value representing whether the date is today or not.

// Make sure that your function does not return a false positive by only checking the day.

function isToday(date) {
    
   const date2 = new Date;

   const checkDay = date.getDate();
   const checkMonth = date.getMonth();
   const checkYear = date.getFullYear();
    
   const newDay = date2.getDate();
   const newMonth = date2.getMonth();
   const newYear = date2.getFullYear();
    
   return checkDay === newDay && checkMonth === newMonth && newYear === checkYear;
  }

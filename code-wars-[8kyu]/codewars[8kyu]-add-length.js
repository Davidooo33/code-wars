// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]

// Your task is to write a function that takes a String and returns an Array/list with the length of each word added to each element .

// Note: String will have at least one element; words will always be separated by a space. 

function addLength(str) {
    //start-here
      let strArr = str.split(' ')
      strArr = strArr.map((string) => {
        return string + ` ${string.length}`
      })
      return strArr
    }
    

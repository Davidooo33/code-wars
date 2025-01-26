// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// If a or b are nil (or null or None, depending on the language), the problem doesn't make sense so return false

function comp(array1, array2){
  
    if (array1 == null || array2 == null) {
      return false
    }
      
    if (array1.length === 0 && array2.length === 0) {
      return true
    }
      
    const ar1Sorted = array1.sort(function (a, b) {  return a - b;  })
    const ar2Sorted = array2.sort(function (a, b) {  return a - b;  })
    
    let answer = false;
    let ar2Divided = []
    
    for (let i = 0; i < array2.length; i++) {
      if (ar2Sorted[i] > 0) {
      ar2Divided.push(ar2Sorted[i] / ar1Sorted[i]);
        } else if (ar2Sorted[i] == 0) {
          ar2Divided.push(ar2Sorted[i])
        }
    }
      
    for (let i = 0; i < array1.length; i++) {
      if (ar1Sorted[i] === ar2Divided[i]) {
        answer = true; }
        else if (ar1Sorted[i] !== ar2Divided[i]) 
          return false 
      }
      return answer  
    }

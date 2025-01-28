// Your function takes two arguments:

//     current father's age (years)
//     current age of his son (years)

// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old). The answer is always greater or equal to 0, no matter if it was in the past or it is in the future.

function twiceAsOld(dadYearsOld, sonYearsOld) {
    const sonsAgeDoubled = sonYearsOld * 2
    let count = 0
    while (sonsAgeDoubled != dadYearsOld) {
        if (dadYearsOld > sonsAgeDoubled) {
          dadYearsOld--
          count++
        } else if (dadYearsOld < sonsAgeDoubled) {
          dadYearsOld++
          count++
        }
      } 
      return count
    }

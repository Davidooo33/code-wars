function alphabetPosition(text) {
    let array = []
    const upperText = text.toUpperCase().split('')
    for (let i = 0; i < upperText.length; i++) {
      switch (upperText[i]) {
          case "A": 
          array.push(1)
          break;
          case "B": 
          array.push(2)
          break;
          case "C":
          array.push(3)
          break;
          case "D":
          array.push(4)
          break;
          case "E":
          array.push(5)
          break;
          case "F":
          array.push(6)
          break;
          case "G":
          array.push(7)
          break;
          case "H":
          array.push(8)
          break;
          case "I":
          array.push(9)
          break;
          case "J":
          array.push(10)
          break;
          case "K":
          array.push(11)
          break;
          case "L":
          array.push(12)
          break;
          case "M":
          array.push(13)
          break;
          case "N":
          array.push(14)
          break;
          case "O":
          array.push(15)
          break;
          case "P":
          array.push(16)
          break;
          case "Q":
          array.push(17)
          break;
          case "R":
          array.push(18)
          break;
          case "S":
          array.push(19)
          break;
          case "T": 
          array.push(20)
          break;
          case "U":
          array.push(21)
          break;
          case "V":
          array.push(22)
          break;
          case "W":
          array.push(23)
          break;
          case "X":
          array.push(24)
          break;
          case "Y":
          array.push(25)
          break;
          case "Z":
          array.push(26)
          break;
          
      }
    }
    return array.join(" ");
}

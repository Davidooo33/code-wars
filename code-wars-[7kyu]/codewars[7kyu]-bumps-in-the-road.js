// Unfortunately for you, your drive is very bumpy! Given a string showing either flat road (_) or bumps (n). If you are able to reach home safely by encountering 15 bumps or less, return Woohoo!, otherwise return Car Dead

function bump(x){
    let count = 0
    let i = 0
    for (i; i < x.length; i++) {
      if (x[i] === 'n') {
        count++
      }
    }
    if (count > 15) {
      return 'Car Dead'
    }
    return 'Woohoo!'
  }

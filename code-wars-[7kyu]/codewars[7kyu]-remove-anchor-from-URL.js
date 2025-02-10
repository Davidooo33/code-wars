// Complete the function/method so that it returns the url with anything after the anchor (#) removed.
// Examples

// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

function removeUrlAnchor(url){
    const splitUrl = url.split('')
    if (url.includes('#') === true) {
      return splitUrl.slice(0, (splitUrl.indexOf('#'))).join('')
    }
    return url
  }

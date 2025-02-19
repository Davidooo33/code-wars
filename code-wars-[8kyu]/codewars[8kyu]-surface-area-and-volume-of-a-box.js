// Write a function that returns the total surface area and volume of a box as an array: [area, volume]

function getSize(width, height, depth) {
    const area = 2 * (width * height + width * depth + height * depth)
    return [area, width * height * depth]
  }
  

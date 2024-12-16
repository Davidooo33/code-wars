// Given a number n, draw stairs using the letter "I", n tall and n wide, with the tallest in the top left.

function stair(n) {
    let string = 'I'
    let counter = 0
    for (let i = 0; i < n; i++) {
        counter += 1
        if (counter !== n) {
            string += '\n' + ' '.repeat(counter) + 'I'
        } 
    }
    return string
}

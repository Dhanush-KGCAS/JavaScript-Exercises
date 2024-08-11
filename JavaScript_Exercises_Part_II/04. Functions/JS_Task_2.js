// Write a JavaScript function that accepts a string as a parameter and converts 
// the first letter of each word of the string in upper case.
    // EXAMPLE STRING : 'the quick brown fox'
    // EXPECTED OUTPUT : 'The Quick Brown Fox

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    

function toUpperCase(str) {
    let words = str.split(' ');
    let result = ' ';
    for (let i = 0; i < words.length; i++) {
        result += words[i].charAt(0).toUpperCase() + words[i].slice(1)
        if (i < words.length - 1) {
            result += ' ';
        }
    }
    return result;
}

console.log(toUpperCase('the quick brown fox'))// Output: 'The Quick Brown Fox'

/* --------------------------------------------------------------------------------- */


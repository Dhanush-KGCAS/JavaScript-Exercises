// Write a JavaScript function that accepts a string as a parameter and find the longest 
// word within the string.
    // EXAMPLE STRING : 'Web Development Tutorial'
    // EXPECTED OUTPUT : 'Development'

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */

function longWord(string){
    let words = string.split(' ');
    let longest = words[0];
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longest.length){
            longest = words[i];
        }
    }
    return longest;
}

console.log(longWord('Web Development Tutorial'))// output : Development

/* --------------------------------------------------------------------------------- */
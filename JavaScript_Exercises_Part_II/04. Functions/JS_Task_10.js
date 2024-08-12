// Write a JavaScript function that returns a string that has letters in alphabetical order.
// Example string : 'webmaster'
// Expected Output : 'abeemrstw'
// Assume punctuation and numbers symbols are not included in the passed string.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */ 

function alphabetOrder(string){
    return [...string].sort().join('');
}

console.log(alphabetOrder('newyork'))// output: eknorwy;
/* --------------------------------------------------------------------------------- */
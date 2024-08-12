// Write a JavaScript function that reverses a number.
// Example x = 32243;
// Expected Output : 34223

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */ 

function reverseNumber(num){
    return parseInt(num.toString().split('').reverse().join(''));

}


console.log(reverseNumber(1234))// Output: 4321;
/* --------------------------------------------------------------------------------- */
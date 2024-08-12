// Write a custom function power ( a, b ), to calculate the value of a raised to b.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */

function powerOf(a, b){
    if (b === 0) return 1;
    else if (b < 0) return 1 / powerOf(a, -b);
    else return a * powerOf(a, b - 1);  
}

console.log(powerOf(2,5)) // output: 32

/* --------------------------------------------------------------------------------- */



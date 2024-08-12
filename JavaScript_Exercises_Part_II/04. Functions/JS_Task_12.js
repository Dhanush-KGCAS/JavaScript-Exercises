// Write a function that computes factorial of a number.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */

function factorial(){
    let num = parseInt(prompt("Enter a number: "));
    let result = 0;
    for (let i = 1; i <= num; i++) {
        result *= i;
    }
    return result;
}

alert(factorial()); // output : Enter a number : 7, result = 5040;

/* --------------------------------------------------------------------------------- */
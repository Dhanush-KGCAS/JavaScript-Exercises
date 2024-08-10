// Write a JavaScript program to compute the sum of the two given integers. 
// If the two values are the same, then return triple their sum.  

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */  

let calculaton = (a , b) => {
    let sum = a + b;
    if (a === b) {
        sum = sum * 3;
    }
    return sum;
}

console.log(calculaton(3, 3))

/* --------------------------------------------------------------------------------- */
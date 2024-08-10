// Write a JavaScript program to check a pair of numbers and return true if one of the 
// numbers is 50 or if their sum is 50.  

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */  

function checkPair(num1, num2) {
    return (num1 === 50 ? true : (num2 === 50 ? true : (num1 + num2 === 50 ? true : false)))
}

console.log(checkPair(25, 50))
/* --------------------------------------------------------------------------------- */
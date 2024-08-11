// Write a JavaScript program that accept two integers and display the larger. 
// Also show if the two integers are equal.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */

function integerFunc(num1, num2){
    if (num1 === num2){
        console.log("The two integers are equal.");
    } else if (num1 !== num2){
        console.log("The two integers are not equal.");
    }

    if(num1 > num2){
        console.log(`${num1} is greater than ${num2}`)
    } else if (num1 === num2){ 
        console.log(`${num2} is equal to ${num1}`)
    } else{
        console.log(`${num2} is greater than ${num1}`)
    }
}

integerFunc(25, 22) // Output: Both Integers are not equal, 25 is larger than 22.

/* --------------------------------------------------------------------------------- */
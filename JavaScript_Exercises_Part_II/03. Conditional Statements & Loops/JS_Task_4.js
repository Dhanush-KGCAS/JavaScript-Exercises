// Write a JavaScript conditional statement to find the largest of five numbers. 
// Display an alert box to show the results.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */

// Using function to find the largest of five numbers.

function largestNum (num1, num2, num3, num4, num5){
    if (num1 > num2 && num1 > num3 && num1 > num4 && num1 > num5){
        return `${num1} is the largest number`;
    } else if (num2 > num1 && num2 > num3 && num2 > num4 && num2 > num5){
        return `${num2} is the largest number`
    } else if (num3 > num1 && num3 > num2 && num3 > num4 && num3 > num5){
        return `${num3} is the largest number`
    } else if (num4 > num1 && num4 > num2 && num4 > num3 && num4 > num5){
        return `${num4} is the largest number`
    } else {
        return `${num5} is the largest number`
    }
}

console.log(largestNum(1,2,3,4,5))// Output : 5 is the largest number.

/* --------------------------------------------------------------------------------- */
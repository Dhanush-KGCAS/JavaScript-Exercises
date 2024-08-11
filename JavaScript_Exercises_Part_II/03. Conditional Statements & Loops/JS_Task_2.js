// Write a program that takes input a number from user & state 
// whether the number is positive, negative or zero.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */

let num = prompt('Enter a Number:') // getting number from the user

if(isNaN(num)){
    console.log('Invalid Input')
}else if(num == 0){
    console.log('Number is Zero')   
} else if(num > 0){
    console.log('Number is Positive')
} else if (num < 0){
    console.log('Number is Negative')
}

/* --------------------------------------------------------------------------------- */



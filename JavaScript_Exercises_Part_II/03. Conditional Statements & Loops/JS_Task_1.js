// Write a program that takes a character (number or string) in a variable & 
// checks whether the given input is a number, uppercase letter or lower case letter. 
// (Hint: ASCII codes:- A=65, Z=90, a=97, z=122)

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */    

//function to check the variable's value if it is a Number, Uppercase or Lowercase Letters using ASCII Codes:

// Ascii Values : numbers (48-57), uppercase letters (65-90), and lowercase letters (97-122)

let value = "A";

let checkVarValue = () => {
    let strInput = typeof value === 'number' ? String(value) : value;

    let asciiValue = strInput.charCodeAt(0);

    if (asciiValue >= 48 && asciiValue <= 57){
        console.log(`the Variable value : ${value} is a number`)
    } else if (asciiValue >= 65 && asciiValue <= 90){
        console.log(`the Variable value : ${value} is an Uppercase letter`)
    } else if (asciiValue >=97 && asciiValue <= 122){
        console.log(`the Variable value : ${value} is a Lowercase letter`)
    }
}

checkVarValue();// output: The Variable Value : A is an Uppercase letter.
/* --------------------------------------------------------------------------------- */



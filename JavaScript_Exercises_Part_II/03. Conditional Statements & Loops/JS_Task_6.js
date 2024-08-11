// Write a program that takes a character (i.e. string of length 1) 
// and returns true if it is a vowel, false otherwise.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */  

function isVowel(character) {
    // Convert the character to lower case to simplify comparison
    character = character.toLowerCase();

    // Define an array of vowels
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    // Check if the character is in the vowels array
    if (vowels.includes(character)) {
        return true;
    } else {
        return false;
    }
}


console.log(isVowel('a')); // Output: true
console.log(isVowel('b')); // Output: false
console.log(isVowel('E')); // Output: true, because it's converted to lower case first

/* --------------------------------------------------------------------------------- */
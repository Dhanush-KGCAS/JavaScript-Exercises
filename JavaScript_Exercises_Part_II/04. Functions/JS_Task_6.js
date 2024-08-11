// Write a JavaScript function to extract unique characters from a string.

// Example string : "thequickbrownfoxjumpsoverthelazydog"
// Expected Output : "thequickbrownfxjmpsvlazydg"

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */ 
function extractUniqueChars(str) {
    let uniqueChars = new Set(str);// Set Constructor is a object with a key-value pair which only holds unique values, so the duplicate values are automatically ignored.
    return [...uniqueChars].join('');// spreading the set object and joining it as a string
}

console.log(extractUniqueChars("thequickbrownfoxjumpsoverthelazydog"))


/* --------------------------------------------------------------------------------- */
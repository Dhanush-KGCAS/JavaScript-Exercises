// A cashier has currency notes of denominations 10, 50 and 100. 
// If the amount to be withdrawn is input through the keyboard in hundreds, 
// find the total number of currency notes of each denomination the cashier will 
// have to give to the withdrawer.

// Example: Amount - 470. You will have 4 hundred notes 1 fifity notes 2 ten notes.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */
function calcNotes(amount) {
    let hundredNotes = Math.floor(amount / 100);
    let fiftyNotes = Math.floor((amount % 100) / 50);
    let tenNotes = Math.floor(((amount % 100) % 50) / 10);
    return `Hundred Notes: ${hundredNotes}, Fifty Notes: ${fiftyNotes}, Ten Notes: ${tenNotes}`
}

console.log(calcNotes(470)) // Output: Hundred Notes: 4, Fifty Notes: 1, Ten Notes: 2

/* --------------------------------------------------------------------------------- */
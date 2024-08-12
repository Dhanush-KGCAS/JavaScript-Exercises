// If the lengths of the sides of a triangle are denoted by a, b, and c, then 
// area of triangle is given by
// area = S(S − a)(S − b)(S − c)
// where, S = ( a + b + c ) / 2
// Calculate area of triangle using 2 functions.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */
function calculateS(a, b, c) {
    return (a + b + c) / 2;
}

function calculateArea(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
        return "Invalid triangle";
    }
    let S = calculateS(a, b, c);
    return Math.sqrt(S * (S - a) * (S - b) * (S - c));
}

console.log(calculateArea(4, 4, 4)); //Output : 6.928203230275509;

/* --------------------------------------------------------------------------------- */
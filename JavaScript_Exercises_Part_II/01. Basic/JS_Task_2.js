// Write a JavaScript program to find the area of a triangle where 
// three sides are 5, 6, 7. 

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */  

function findArea(base, height, breath) {
    // Calculate the semi-perimeter of the triangle
    const semi = (base + height + breath) / 2;

    // Calculate the Area of the Triangle
    let area = Math.sqrt(semi * (semi - base) * (semi - height) * (semi - breath))
    return area
}

console.log(findArea(5,6,7))

/* --------------------------------------------------------------------------------- */
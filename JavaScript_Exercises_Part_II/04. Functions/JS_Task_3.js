// Create 2 functions that calculate properties of a circle, using the definitions here.
// Create a function called calcCircumference:
    // • Pass the radius to the function.
    // • Calculate the circumference based on the radius, and output
        // "The circumference is NN".
// Create a function called calcArea:
    // • Pass the radius to the function.
    // • Calculate the area based on the radius, and output 
        // "The area is NN".
// Circumference of circle = 2πr
// Area of circle = πr2

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */  

function clacCircumference(radius){
    let pi = 3.14;
    let circumference = 2 * pi * radius;
    console.log("The circumference is " + circumference);
}

function calcArea(radius){
    let pi = 3.14;
    let area = pi * radius * radius;
    console.log("The area is " + area);
}

clacCircumference(5);// Output: 31.400000000000002
calcArea(5);// Output: 78.5
/* --------------------------------------------------------------------------------- */
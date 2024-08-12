// The distance between two cities (in km.) is input through the keyboard. 
// Write four functions to convert and print this distance in 
// meters, feet, inches and centimeters.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */ 

function toMeters(km){
    return km * 1000// 1km = 1000 meters
}

function toFeet(km){
    return km * 3280.84; // 1km = 3280.84 feet
}

function toInches(km){
    return km * 39370.1; // 1km = 39370.1 inches
}

function toCentiMeters(km){
    return km * 100000; // 1km = 100000 centimeters
}

console.log(`Distance in meters: ${toMeters(2)}`); // output: Distance in meters: 2000
console.log(`Distance in feet: ${toFeet(2)}`);// output: Distance in feet: 6561.68
console.log(`Distance in inches: ${toInches(2)}`);// output: Distance in inches: 78740.2
console.log(`Distance in centimeters: ${toCentiMeters(2)}`);// output: Distance in centimeters: 200000

/* --------------------------------------------------------------------------------- */
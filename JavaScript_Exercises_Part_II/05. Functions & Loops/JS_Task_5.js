// Write a function that receives marks received by a student in 3 subjects and returns 
// the average and percentage of these marks. there should be 3 functions one is the 
// mainFunction and other are for average and percentage. Call those functions from 
// mainFunction and display result in mainFunction.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */
function average(marks) {
    return (marks[0] + marks[1] + marks[2]) / 3
}

function percentage(avg) {
    return (avg / 100) * 100;
}

function mainFunction() {
    let marks = [50, 50, 50];
    let avg = average(marks);
    let percent = percentage(avg);
    console.log("Average: " + avg);
    console.log("Percentage: " + percent);
}

mainFunction() // output- Average: 50, Percentage: 50

/* --------------------------------------------------------------------------------- */
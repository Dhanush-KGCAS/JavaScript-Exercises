// Write a program to calculate overtime pay of employees.
// Overtime is paid at the rate of Rs. 12.00 per hour for every hour worked above 40 hours. 
// Assume that employees do not work for fractional part of an hour.

/* --------------------------------------------------------------------------------- */

/* YOUR CODE HERE */

function overTimePay(hoursWorked) {
    let overtimeHours = 0;
    let overtimePay = 0;

    if (hoursWorked > 40) {
        overtimeHours = hoursWorked - 40;
        overtimePay = overtimeHours * 12;
    }

    return overtimePay;
}


let hoursWorked = parseInt(prompt("Enter the number of hours worked: "));
let overtimePay = overTimePay(hoursWorked);

console.log("Overtime pay: Rs. " + overtimePay);

/* --------------------------------------------------------------------------------- */
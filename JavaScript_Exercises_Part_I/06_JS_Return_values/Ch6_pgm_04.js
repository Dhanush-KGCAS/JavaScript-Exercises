// Returning the sum of two numbers

var add;
 
add = function (num1, num2) {
	number1 = num1
	number2 = num2
	return number1 + number2;
};

var sum = add(50, 23);
var sum = add(69, 420);

console.log(`The Sum of ${number1} and ${number2} is ${sum}`);

var add3num = function (num1, num2, num3) {
	number1 = num1
	number2 = num2
	number3 = num3
	return number1 + number2 + number3;
};

var sum3num = add3num(50, 23, 69);
var sum3num = add3num(69, 420, 69);

console.log(`The Sum of ${number1}, ${number2} and ${number3} is ${sum3num}`);

/* Further Adventures
 *
 * 1) Find and display the sum of
 *    a different pair of numbers
 *
 * 2) Change the call to console.log so that
 *    the display on the console reads:
 *    'The sum of 50 and 23 is 73'
 *    using the add function to generate the answer.
 *
 * 3) Can you use the add function as it is
 *    to add more than two numbers?
 *    Hint: You can nest calls to add.
 *
 * 4) Create a function to return the sum of
 *    three numbers given as arguments.
 *
 */
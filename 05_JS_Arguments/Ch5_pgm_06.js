// A function with two arguments

var showSum;

showSum = function (number1, number2) {
	var total = number1 + number2;
	console.log("The sum is " + total);
};

showSum(30, 23);
showSum(2.8, -5);

var showProduct = function(number1, number2){
	var product = number1 * number2;
	console.log("The product is " + product);
}

showProduct(5, 5);
showProduct(2.8, -5);

var showQuotient = function(num1, num2){
	var quotient = num1 / num2;
	console.log("The quotient is " + quotient);
}

showQuotient(5, 5);
showQuotient(2.8, -5);

var showDifference = function(num1, num2){
	var difference = num1 - num2;
	console.log("The difference is " + difference);
}

showDifference(5, 5);
showDifference(2.8, -5);


/* Further Adventures
 *
 * 1) Use the showSum function to add 56 and 74.
 *
 * To multiply two numbers, use the * symbol.
 * e.g. 3 * 5 is 3 multiplied by 5.
 *
 * 2) Create a showProduct function to multiply two numbers.
 *
 * 3) Use your function to multiply three pairs of numbers.
 *
 * To divide one number by another, use /.
 * e.g. 10 / 2 is 10 divided by 2.
 *
 * 4) What about showDifference and showQuotient
 *    for subtraction and division?
 *
 */
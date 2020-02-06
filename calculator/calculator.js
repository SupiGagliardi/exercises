function add (num1, num2) {
	return num1 + num2
};

function subtract (a, b) {
	return a - b
};

function sum (array) {
	
	// let total = 0;
	// array.forEach(item => total += item);

	// return total;

	return array.reduce((total, num) => num + total, 0);
}

function multiply (array) {
	
	return array.reduce((total, num) => num * total, 1);

}

function power(a, b) {
	
	return a**b;
}

function factorial(a) {
	
	let result = a;

	for (let i = (a - 1); i > 1; i--) {

		result *= i;
	}

	return result != 0 ? result : 1;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}
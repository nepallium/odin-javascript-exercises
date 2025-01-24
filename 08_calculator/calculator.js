const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(array) {
  return array.reduce((total, num) => total + num, 0)
};

const multiply = function(array) {
  return array.reduce((total, num) => total * num, 1)
};

const power = function(base, exponenant) {
	return Math.pow(base,exponenant);
};

const factorial = function(start) {
  let fact = 1;
	for (let i = start; i > 1; i--) {
    fact *= i;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

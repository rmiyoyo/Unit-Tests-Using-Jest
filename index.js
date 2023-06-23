// Task 1: a function stringLength(string) that takes any 
// string as an argument and returns its characters count
const stringLength = (string) => {
  const length = string.length;

  if (length === 0) {
    throw new Error('String must be at least 1 character long.');
  }

  if (length > 10) {
    throw new Error('String must not exceed 10 characters.');
  }

  return length;
};

// Task 2: a function reverseString(string) function. It should 
// take a string as an argument and return it reversed.
const reverseString = (string) => string.split('').reverse().join('');

// Task 3: a simple calculator class or object, which will have 4 
// methods: add, subtract, divide, and multiply.
class Calculator {
  add = (a, b) => a + b;

  subtract = (a, b) => a - b;

  divide = (a, b) => {
    if (b === 0) {
      throw new Error('Division by zero is not allowed');
    }
    return a / b;
  };

  multiply = (a, b) => a * b;
}

// Task 4
const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

module.exports = {
  stringLength,
  reverseString,
  Calculator,
  capitalize
};

const { stringLength, reverseString, Calculator, capitalize } = require('./index');

describe('stringLength', () => {
  test('should return the correct length of a non-empty string', () => {
    expect(stringLength('Hello')).toBe(5);
    expect(stringLength('OpenAI')).toBe(6);
  });

  test('should throw an error if the string is empty', () => {
    expect(() => stringLength('')).toThrow('String must be at least 1 character long.');
  });

  test('should throw an error if the string exceeds 10 characters', () => {
    expect(() => stringLength('This is a very long string')).toThrow('String must not exceed 10 characters.');
  });
});


// Task 2 - Test
test('reverseString should return the reversed string', () => {
  expect(reverseString('hello')).toBe('olleh');
  expect(reverseString('')).toBe('');
  expect(reverseString('12345')).toBe('54321');
});

// Task 3 - Tests
describe('Calculator', () => {
  let calculator;

  beforeEach(() => {
    calculator = new Calculator();
  });

  describe('add', () => {
    test('should return the sum of two numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
      expect(calculator.add(-1, 1)).toBe(0);
      expect(calculator.add(0, 0)).toBe(0);
    });
  });

  describe('subtract', () => {
    test('should return the difference of two numbers', () => {
      expect(calculator.subtract(5, 3)).toBe(2);
      expect(calculator.subtract(1, -1)).toBe(2);
      expect(calculator.subtract(0, 0)).toBe(0);
    });
  });

  describe('divide', () => {
    test('should return the quotient of two numbers', () => {
      expect(calculator.divide(6, 2)).toBe(3);
      expect(calculator.divide(10, 5)).toBe(2);
    });

    test('should throw an error when dividing by zero', () => {
      expect(() => calculator.divide(5, 0)).toThrow('Division by zero is not allowed');
    });
  });

  describe('multiply', () => {
    test('should return the product of two numbers', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
      expect(calculator.multiply(-1, 1)).toBe(-1);
      expect(calculator.multiply(0, 5)).toBe(0);
    });
  });
});

// Task 4 - Test
test('capitalize should capitalize the first character of a string', () => {
  expect(capitalize('hello')).toBe('Hello');
  expect(capitalize('world')).toBe('World');
  expect(capitalize('')).toBe('');
});

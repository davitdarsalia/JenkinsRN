// Implementation Functions
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => {
  if (b === 0) throw new Error('Division by zero');
  return a / b;
};

const capitalize = str =>
  str ? str.charAt(0).toUpperCase() + str.slice(1) : '';
const reverse = str => str.split('').reverse().join('');

// Test Suite
describe('Math Functions', () => {
  test('add() adds two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtract() subtracts two numbers', () => {
    expect(subtract(5, 3)).toBe(2);
  });

  test('multiply() multiplies two numbers', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  test('divide() divides two numbers', () => {
    expect(divide(6, 3)).toBe(2);
  });

  test('divide() throws error when dividing by zero', () => {
    expect(() => divide(6, 0)).toThrow('Division by zero');
  });
});

describe('String Utilities', () => {
  test('capitalize() capitalizes a string', () => {
    expect(capitalize('hello')).toBe('Hello');
  });

  test('capitalize() handles empty strings', () => {
    expect(capitalize('')).toBe('');
  });

  test('reverse() reverses a string', () => {
    expect(reverse('hello')).toBe('olleh');
  });

  test('reverse() handles empty strings', () => {
    expect(reverse('')).toBe('');
  });
});

describe('Additional Tests', () => {
  test('truthy values', () => {
    expect(true).toBeTruthy();
  });

  test('falsy values', () => {
    expect(false).toBeFalsy();
  });

  test('array contains element', () => {
    expect([1, 2, 3]).toContain(2);
  });

  test('object contains key', () => {
    expect({a: 1, b: 2}).toHaveProperty('a', 1);
  });

  test('string matches regex', () => {
    expect('jest-html-reporter').toMatch(/html/);
  });

  test('number comparison', () => {
    expect(10).toBeGreaterThan(5);
  });
});

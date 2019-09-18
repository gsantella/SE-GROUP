const lib = require('../src/frontend/js/script-library.js');
const libJonathan = require('../src/frontend/js/jonathan.js');
const libJason = require('../src/frontend/js/jason.js');
const libWinter = require('../src/frontend/js/winter.js');

describe('Original Tests', () => {
  test('CToF', () => {
    expect(lib.celsiusToFahrenheit(100)).toBe(212);
  });

  test('FtoC1', () => {
    expect(lib.fahrenheitToCelsius(212)).toBe(100);
  });

  test('FtoC2', () => {
    expect(lib.fahrenheitToCelsius(32)).toBe(0);
  });
});

describe('All addTwoNumbers', () => {
  test('addTwoNumbers Jonathan', () => {
    expect(libJonathan.addTwoNumbers(1, 2)).toBe(3);
  });

  test('addTwoNumbers Jason', () => {
    expect(libJason.addTwoNumbers(1, 2)).toBe(3);
  });

  test('addTwoNumbers Winter', () => {
    expect(libWinter.addTwoNumbers(1, 2)).toBe(3);
  });
});

describe('All averageThreeNumbers', () => {
  test('averageThreeNumbers Jonathan', () => {
    expect(libJonathan.averageThreeNumbers(1, 2, 3)).toBe(2);
  });

  test('averageThreeNumbers Jason', () => {
    expect(libJason.averageThreeNumbers(1, 2, 3)).toBe(2);
  });

  test('averageThreeNumbers Winter', () => {
    expect(libWinter.averageThreeNumbers(1, 2, 3)).toBe(2);
  });
});

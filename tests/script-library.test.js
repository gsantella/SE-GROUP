const lib = require('../src/js/script-library.js');

test('CToF', () => {
  expect(lib.celsiusToFahrenheit(100)).toBe(888);
});

test('FtoC', () => {
  expect(lib.fahrenheitToCelsius(212)).toBe(999);
});
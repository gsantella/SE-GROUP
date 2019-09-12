const lib = require('../src/js/script-library.js');
const libJonathan = require('../src/js/jonathan.js');
const libJason = require('../src/js/jason.js');
const libWinter = require('../src/js/winter.js');

describe('Original Tests', () => {
  test('CToF', () => {
    expect(lib.celsiusToFahrenheit(100)).toBe(888);
  });

  test('FtoC1', () => {
    expect(lib.fahrenheitToCelsius(212)).toBe(999);
  });

  test('FtoC2', () => {
    expect(lib.fahrenheitToCelsius(32)).toBe(999);
  });
});

describe('All addTwoNumbers', () => {
  
  test('addTwoNumbers Jonathan', () => { 
    expect(libJonathan.addTwoNumbers(1,2)).toBe(3);
  });

  test('addTwoNumbers Jason', () => { 
    expect(libJason.addTwoNumbers(1,2)).toBe(3);
  });

  test('addTwoNumbers Winter', () => { 
    expect(libWinter.addTwoNumbers(1,2)).toBe(3);
  });

});

describe('All averageThreeNumbers', () => {
  test('averageThreeNumbers Jonathan', () => { 
    expect(libJonathan.averageThreeNumbers(1,2,3)).toBe(2);
  });

  test('averageThreeNumbers Jason', () => { 
    expect(libJason.averageThreeNumbers(1,2,3)).toBe(2);
  });
  
  test('averageThreeNumbers Winter', () => { 
    expect(libWinter.averageThreeNumbers(1,2,3)).toBe(2);
  });

});
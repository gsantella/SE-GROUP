const fahrenheitToCelsius = (temp) => {
  let finalTemp = 0;

  finalTemp = (temp - 32) * (5 / 9);
  return finalTemp;
};

const celsiusToFahrenheit = (temp) => {
  let finalTemp = 0;

  finalTemp = (temp * (9 / 5)) + 32;
  return finalTemp;
};

module.exports = {
  fahrenheitToCelsius,
  celsiusToFahrenheit,
};

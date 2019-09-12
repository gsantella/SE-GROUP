let fahrenheitToCelsius = (temp) => {
    var finalTemp = 0;

    finalTemp = (temp - 32) * (5/9);
    return finalTemp;
}

let celsiusToFahrenheit = (temp) => {
    var finalTemp = 0;

    finalTemp = (temp * (9/5)) + 32;
    return finalTemp;
}

module.exports = {
    fahrenheitToCelsius,
    celsiusToFahrenheit
}
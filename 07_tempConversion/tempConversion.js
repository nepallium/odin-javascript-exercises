const convertToCelsius = function(fahrenheit) {
  let celcius = (fahrenheit-32) * 5/9;
  if (Number.isInteger(celcius)) {
    return celcius;
  }
  return +celcius.toFixed(1);
};

const convertToFahrenheit = function(celcius) {
  let fahrenheit = celcius*(9/5) + 32;
  if (Number.isInteger(fahrenheit)) {
    return fahrenheit;
  }
  return +fahrenheit.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

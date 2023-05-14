function convert() {
  const inputValue = document.getElementById("inputValue").value;
  const fromUnit = document.getElementById("fromUnit").value;
  const toUnit = document.getElementById("toUnit").value;

  if (fromUnit === toUnit) {
    document.getElementById("result").innerText = "Please select different units.";
    return;
  }

  let result;

  switch (fromUnit) {
    case "meter":
      result = convertFromMeter(inputValue, toUnit);
      break;
    case "kilometer":
      result = convertFromKilometer(inputValue, toUnit);
      break;
    case "mile":
      result = convertFromMile(inputValue, toUnit);
      break;
    case "centimeter":
      result = convertFromCentimeter(inputValue, toUnit);
      break;
  }

  document.getElementById("result").innerText = `${inputValue} ${fromUnit} is equal to ${result} ${toUnit}.`;
}

function convertFromMeter(value, toUnit) {
  switch (toUnit) {
    case "kilometer":
      return value / 1000;
    case "mile":
      return value * 0.000621371;
  }
}

function convertFromKilometer(value, toUnit) {
  switch (toUnit) {
    case "meter":
      return value * 1000;
    case "mile":
      return value * 0.621371;
  }
}

function convertFromMile(value, toUnit) {
  switch (toUnit) {
    case "meter":
      return value * 1609.34;
    case "kilometer":
      return value * 1.60934;
  }
}

function convertFromCentimeter(value, toUnit) {
  switch (toUnit) {
  case "meter":
    return value * 1;
   case "centimeter":
    return value * 100;
  }
}

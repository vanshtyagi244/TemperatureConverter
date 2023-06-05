function convertTemperature() {
    var inputTemp = parseFloat(document.getElementById("inputTemp").value);
    var inputUnit = document.getElementById("inputUnit").value;
    var resultDiv = document.getElementById("result");

    var celsius, fahrenheit, kelvin;

    if (inputUnit === "celsius") {
        celsius = inputTemp;
        fahrenheit = celsiusToFahrenheit(celsius);
        kelvin = celsiusToKelvin(celsius);
    } else if (inputUnit === "fahrenheit") {
        fahrenheit = inputTemp;
        celsius = fahrenheitToCelsius(fahrenheit);
        kelvin = celsiusToKelvin(celsius);
    } else if (inputUnit === "kelvin") {
        kelvin = inputTemp;
        celsius = kelvinToCelsius(kelvin);
        fahrenheit = celsiusToFahrenheit(celsius);
    }

    resultDiv.innerHTML = inputTemp + " " + inputUnit + " is equal to: <br>" +
        celsius + " Celsius<br>" +
        fahrenheit + " Fahrenheit<br>" +
        kelvin + " Kelvin";
}

function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

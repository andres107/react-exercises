import React, { useState } from 'react';
import TemperatureInput from "./TemperatureInput";
import BoilingVerdict from "./BoilingVerdict";

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

export function Calculator(){
  const [temperature, setTemperature] = useState(0.0);
  const [scale, setScale] = useState('c');

  const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
  const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

  const handleCelsiusChange = (newTemperature) => {
    setScale('c');
    setTemperature(newTemperature);
  }

  const handleFahrenheitChange = (newTemperature) => {
    setScale('f');
    setTemperature(newTemperature);
  }

  return (
    <div>
      <TemperatureInput
        scale="c"
        temperature={celsius}
        onTemperatureChange={handleCelsiusChange} />
      <TemperatureInput
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={handleFahrenheitChange} />
      <BoilingVerdict
        celsius={parseFloat(celsius)} />
    </div>
  );

}

export default Calculator;



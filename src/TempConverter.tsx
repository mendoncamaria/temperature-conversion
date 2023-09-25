import React, { useState } from 'react';
import { Container, Input, Label, Result, Select, TemperatureContainer } from './Styles';

function TemperatureConverter() {
  const [temperature, setTemperature] = useState('');
  const [unit, setUnit] = useState('celsius');

  const handleTemperatureChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setTemperature(event.target.value);
  };

  const handleUnitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setUnit(event.target.value);
  };

  const convertTemperature = () => {
    const inputTemperature = parseFloat(temperature);
    if (isNaN(inputTemperature)) {
      return '';
    }

    if (unit === 'celsius') {
      const fahrenheit = (inputTemperature * 9) / 5 + 32;
      return `${inputTemperature}°C is equal to ${fahrenheit.toFixed(2)}°F`;
    } else {
      const celsius = ((inputTemperature - 32) * 5) / 9;
      return `${inputTemperature}°F is equal to ${celsius.toFixed(2)}°C`;
    }
  };

  return (
    <Container>
      <TemperatureContainer>
        <div style={{ display: 'flex', gap: '2rem', flexDirection: 'column' }}>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Label>Enter Temperature:</Label>
            <Input
              type="number"
              value={temperature}
              onChange={handleTemperatureChange}
              placeholder="Enter temperature"
            />
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <Label>Select Unit:</Label>
            <Select value={unit} onChange={handleUnitChange}>
              <option value="celsius">Celsius</option>
              <option value="fahrenheit">Fahrenheit</option>
            </Select>
          </div>
        </div>
        <Result>{convertTemperature()}</Result>
      </TemperatureContainer>
    </Container>
  );
}

export default TemperatureConverter;

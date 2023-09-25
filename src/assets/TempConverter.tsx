import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
`;

const Label = styled.label`
  font-size: 18px;
  margin-bottom: 10px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 16px;
`;

const Result = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

function TemperatureConverter() {
  const [temperature, setTemperature] = useState('');
  const [unit, setUnit] = useState('celsius');

  const handleTemperatureChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
      <InputContainer>
        <Label>Enter Temperature:</Label>
        <Input
          type="number"
          value={temperature}
          onChange={handleTemperatureChange}
          placeholder="Enter temperature"
        />
      </InputContainer>
      <InputContainer>
        <Label>Select Unit:</Label>
        <Select value={unit} onChange={handleUnitChange}>
          <option value="celsius">Celsius</option>
          <option value="fahrenheit">Fahrenheit</option>
        </Select>
      </InputContainer>
      <Result>{convertTemperature()}</Result>
    </Container>
  );
}

export default TemperatureConverter;

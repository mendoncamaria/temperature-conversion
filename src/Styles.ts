import { styled } from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #ced3ed;
`;

export const TemperatureContainer = styled.div`
  background-color: #f0f0f0;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  height: auto;

  @media (max-width: 600px) {
    width: 80%;
  }
`;

export const Label = styled.label`
  font-size: 18px;
  margin-bottom: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid;
  border-radius: 10px;
  background-color: #f0f0f0;
`;

export const Select = styled.select`
  padding: 10px;
  font-size: 16px; 
  border-radius: 10px;
`;

export const Result = styled.div`
  padding-top: 2rem;
  font-size: 24px;
  font-weight: bold;
`;
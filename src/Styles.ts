import { styled } from "styled-components";


export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #bee1c0;
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
`;

export const Select = styled.select`
  padding: 10px;
  font-size: 16px;
`;

export const Result = styled.div`
  padding-top: 2rem;
  font-size: 24px;
  font-weight: bold;
`;
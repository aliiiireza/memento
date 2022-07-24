import styled, { css } from "styled-components";
export const Wrapper = styled.div`
  margin-bottom: 10px;
`;
export const Label = styled.label`
  font-size: 1rem;
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Field = styled.div<{ hasError: boolean }>`
  input {
    width: 100%;
    border: 1px solid black;
  }

  ${({ hasError }) =>
    hasError &&
    css`
      input {
        border: 1px solid red;
      }
    `}
`;

export const Error = styled.div`
  height: 20px;
  color: #ff4242;
  font-size: 0.9rem;
`;

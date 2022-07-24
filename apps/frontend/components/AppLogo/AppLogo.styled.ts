import styled from "styled-components";

export const Wrapper = styled.div<{ type: string }>`
  display: flex;
  flex-direction: ${({ type }) => (type === "vertical" ? "row" : "column")};
`;

export const Title = styled.h1`
  margin: 0px;
`;

export const Description = styled.p`
  margin: 0px;
`;

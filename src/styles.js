import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
body{
    background-color: ${(props) => props.theme.backgroundColor};
}
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.mainColor};
  text-align: center;
  font-weight: bold;
  font-style: italic;
  font-size: 75px;
  margin-top: -25px;
  padding-top: 4%;
`;

export const Description = styled.h4`
  font-style: italic;
  text-align: center;
  margin-top: -30px;
  margin-bottom: 30px;
  padding-top: 3%;
`;

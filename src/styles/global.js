import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    background: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.color};
    font-family: sans-serif;
  }
`;
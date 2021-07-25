import styled from 'styled-components';

export const Container = styled.header`
  background: ${({ theme }) => theme.headerBackgroundColor};
  color: ${({ theme }) => theme.textColor};
  height: 100px;
  display: flex;
  align-items: center;
  padding: ${({ theme }) => `0 ${theme.spacing.large}px`};
  border-radius: ${({ theme }) => theme.borderRadius};
  justify-content: space-between;
  
  button {
    cursor: pointer;
    background: transparent;
    border: none;
  }
`;

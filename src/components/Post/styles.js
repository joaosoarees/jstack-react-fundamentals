import styled, { css } from 'styled-components';

export const Container = styled.article`
  margin-bottom: 24px;

  ${(props) => css`
    color: ${props.removed ? '#F00' : '#FFF'};
    opacity: ${props.removed ? 0.5 : 1}
  `};
`;

export const Subtitle = styled.small`
  display: block;
`;

export const Rate = styled.span`
  font-size: 10px;
  opacity: 0.7;
`;
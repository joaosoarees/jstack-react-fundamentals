import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { ThemeContext } from '../../context/ThemeContext';

import { Button } from '../Button';

const Title = styled.h1`
  color: #637BF3;
`;
export function Header({ title, children }) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <>
      <Title>{title}</Title>
      <Button onClick={onToggleTheme}>
        Mudar Tema
      </Button>
      {children}
    </>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Header.defaultProps = {
  title: `JStack's Blog`,
};
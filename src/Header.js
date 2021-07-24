import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './Button';
export function Header({ theme, onToggleTheme, title, children }) {
  return (
    <>
      <h1>{title}</h1>
      <Button theme={theme} onClick={onToggleTheme}>
        Mudar Tema
      </Button>
      {children}
    </>
  );
};

Header.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  onToggleTheme: PropTypes.func.isRequired,
  theme: PropTypes.string.isRequired,
};

Header.defaultProps = {
  title: `JStack's Blog`,
};
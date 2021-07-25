import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../../context/ThemeContext';

import * as S from '../Title';
import { Button } from '../Button';
export function Header({ title, children }) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <>
      <S.Title>{title}</S.Title>
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
import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../../context/ThemeContext';

import { Button } from '../Button';

import styles from './Header.scss';
export function Header({ title, children }) {
  const { onToggleTheme } = useContext(ThemeContext);

  return (
    <>
      <h1 className={styles.title}>{title}</h1>
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
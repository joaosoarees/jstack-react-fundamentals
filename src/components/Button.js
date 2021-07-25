import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { ThemeContext } from '../context/ThemeContext';
export function Button({ onClick, children }) {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <button 
        onClick={onClick}
        style={{ 
          background: theme === 'dark' ? '#000' : '#FFF',
          color: theme === 'dark' ? '#FFF' : '#000',
        }}
      >
        {children}
      </button> <br />
    </>
  );
};

Button.propTypes = {
	onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
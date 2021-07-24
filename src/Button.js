import React from 'react';
import PropTypes from 'prop-types';
export function Button({ theme, onClick, children }) {
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
  theme: PropTypes.string.isRequired,
};
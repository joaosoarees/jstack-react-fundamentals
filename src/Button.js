import React from 'react';
import PropTypes from 'prop-types';

export function Button({ onClick, children }) {
  return (
    <>
      <button onClick={onClick}>
        {children}
      </button> <br />
    </>
  );
};

Button.propTypes = {
	onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
 };
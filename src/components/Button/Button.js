import React from 'react';
import './Button.scss';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { className, text } = props;

  return (
    <button className={className}>{text}</button>
  );
};

Button.propTypes = {
  className: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired
};

Button.defaultProps = {
  className: '',
  text: ''
};

export default Button;

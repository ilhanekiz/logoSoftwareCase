import React from 'react';
import './Tooltip.scss';
import PropTypes from 'prop-types';

const Tooltip = (props) => {
  const { text, logoUrl } = props.data;

  return (
    <div className="tooltip">
      <div className="box-circle blue">
        <img className="icon" src={logoUrl} />
      </div>
      <div className="tooltip-popup">
        {text}
      </div>
    </div>
  );
};

Tooltip.propTypes = {
  text: PropTypes.string.isRequired,
  logoUrl: PropTypes.string.isRequired
};

Tooltip.defaultProps = {
  text: '',
  logoUrl: ''
};

export default Tooltip;

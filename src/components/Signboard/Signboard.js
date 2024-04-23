import React, { useState, useEffect, useRef } from 'react';
import './Signboard.scss';
import PropTypes from 'prop-types';
import bigSizeIcon from '../../assets/images/icons/bigSize.svg';

const Signboard = (props) => {
  const { poster } = props;

  return (
    <div className="signboard">
      <div className="img-inner">
        <div className="big-size-icon">
          <img src={bigSizeIcon} alt="" />
          <span>Büyüt</span>
        </div>
        <div className="img-content">
          <img src={`https://image.tmdb.org/t/p/w300/${poster}`} alt="" />
        </div>
      </div>
      <div className="link">
        <div className="logo">
          <img src="/src/assets/images/netflix.jpg" alt="" />
        </div>
        <div className="text">
          <span className="title">Now Streaming</span>
          <span className="sub-title">Hemen İzle</span>
        </div>
      </div>
    </div>
  );
};

Signboard.propTypes = {
  poster: PropTypes.string.isRequired
};

Signboard.defaultProps = {
  poster: ''
};

export default Signboard;

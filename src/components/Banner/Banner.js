import React, { useState, useEffect, useRef } from 'react';
import './Banner.scss';
import PropTypes from 'prop-types';

import Button from '../Button/Button';

const Banner = (props) => {
  const { title, subTitle, imageBgUrl} = props.data;

  return (
    <section className="banner container" style={{ backgroundImage: `url(${imageBgUrl})` }}>
      <div className="inner">
        <h1 className="title">{title}</h1>
        <h2 className="sub-title">{subTitle}</h2>
        <div className="search-form">
          <input className="form-control" type="text" placeholder="Film, dizi, kişi ara" />
          <Button className="btn primary" text="Search" />
        </div>
      </div>
    </section>
  );
};

Banner.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
  imageBgUrl: PropTypes.string.isRequired
};

Banner.defaultProps = {
  title: '',
  subTitle: '',
  imageBgUrl: ''
};

export default Banner;

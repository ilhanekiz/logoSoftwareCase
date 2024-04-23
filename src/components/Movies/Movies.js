import React, { useState } from 'react';
import './Movies.scss';
import PropTypes from 'prop-types';

import Poster from '../../components/Poster/Poster';
import SwitchButton from '../../components/SwitchButton/SwitchButton';

const Movies = (props) => {
  const [shadow, setShadow] = useState(true);
  const { data } = props;
  const switchBtnData = [
    {id: 1, value: 'Filmler', active: true},
    {id: 2, value: 'TV', active: false}
  ];

  const getPosterRender = (posterList) => {
    if (posterList.length <=0) return null;
    return posterList && posterList.map((poster => {
      return <Poster data={poster} key={poster.id}/>
    }))
  }

  const onScroll = (e) => {
    let element = e.target;
    element.scrollLeft > 0 ? setShadow(false) : setShadow(true);
  }

  const handleSwitchBtn = (e) => {
    props.switchChanged(e);
  }

  return (
    <section className="movies container">
      <div className="movies-header">
        <h1 className="title">İzlemek Ücretsiz</h1>
        <SwitchButton data={{switchList: switchBtnData}} switchChanged={handleSwitchBtn}/>
      </div>
      <div className={`movies-inner ${shadow ? 'shadow' : ''}`} onScroll={onScroll}>
        {getPosterRender(data)}
      </div>
    </section>
  );
};

Movies.propTypes = {
  title: PropTypes.string.isRequired,
  posterList: PropTypes.array.isRequired,
  switchChanged: PropTypes.func
};

Movies.defaultProps = {
  title: '',
  posterList: []
};

export default Movies;

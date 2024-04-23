import React from 'react';
import './Poster.scss';
import PropTypes from 'prop-types';
import CircleProgressBar from '../../components/CircleProgressBar/CircleProgressBar';

const Poster = (props) => {  
  const { id, name, title, poster_path, release_date, first_air_date, popularity, movieType } = props.data;
  
  return (
    <div className="poster">
      <a href={`${movieType}/${id}`}>
        <div className="img-content">
          <img className="banner" src={`https://image.tmdb.org/t/p/w500/${poster_path}`} alt={name} />
          <CircleProgressBar percentage={Math.round(popularity / 100)} size=''/>
        </div>
        <div className="text-content">
          <a href="#!" className="title">{name || title}</a>
          <span className="subtitle">{first_air_date || release_date}</span>
        </div>
      </a>
    </div>
  );
};

Poster.propTypes = {
  name: PropTypes.string.isRequired, 
  poster_path: PropTypes.string.isRequired,
  first_air_date: PropTypes.string.isRequired,
  popularity: PropTypes.number.isRequired 
};

Poster.defaultProps = {
  name: '', 
  poster_path: '',
  first_air_date: '',
  popularity: 0
};

export default Poster;

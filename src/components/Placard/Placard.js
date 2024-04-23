import React from 'react';
import './Placard.scss';

import Signboard from '../../components/Signboard/Signboard';
import SignboardText from '../../components/SignboardText/SignboardText';

const Placard = (props) => {
  const { data } = props;
  
  return (
    <div className="placard" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1920_and_h800_multi_faces/${data.backdrop_path})`}}>
      <div className="container">
        <Signboard poster={data.poster_path} />
        <SignboardText data={data} />
      </div>
    </div>
  );
};

export default Placard;

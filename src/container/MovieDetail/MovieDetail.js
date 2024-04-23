import React, { useState, useEffect } from 'react';

import Placard from '../../components/Placard/Placard';

import { BASE_URL, API_KEY } from '../../utils/constants';
import axios from 'axios';

const MovieDetail = () => {
  const queryParams = window.location && window.location.pathname.split('/');
  const [ movie, setMovie ] = useState({}); 

  useEffect(() => {
    axios.get(`${BASE_URL}/${queryParams[1]}/${queryParams[2]}?api_key=${API_KEY}`)
      .then((response) => {
        if (response && response.status === 200) {
          setMovie(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <main>
      <section className="movieDetail">
        {
          movie && Object.entries(movie).length !== 0 && (
            <Placard data={movie}/>
          )
        }
      </section>
    </main>
  );
};

export default MovieDetail;

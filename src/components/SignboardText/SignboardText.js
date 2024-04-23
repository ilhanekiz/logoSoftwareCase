import React, { useState } from 'react';
import './SignboardText.scss';
import playButtonIcon from '../../assets/images/icons/play.svg';

import Tooltip from '../../components/Tooltip/Tooltip';
import CircleProgressBar from '../../components/CircleProgressBar/CircleProgressBar';

const SignboardText = (props) => {
  const { name, title, last_air_date, episode_run_time, runtime, vote_average, overview, genres, last_episode_to_air, release_date, popularity, percentage } = props.data;
  const badges = [
    {
      id: 1,
      text: 'Özelleştirilmiş listeleri yaratmak ve düzenlemek için giriş yap',
      logoUrl: '/src/assets/images/icons/thumbnails-list.svg'
    },
    {
      id: 2,
      text: 'Filmi favori listenize eklemek için giriş yapınız',
      logoUrl: '/src/assets/images/icons/bookmark.svg'
    },
    {
      id: 3,
      text: 'Filmi izlemeye almak için giriş yapınız',
      logoUrl: '/src/assets/images/icons/heart.svg'
    },
    {
      id: 4,
      text: 'Filmi değerlendirmek için giriş yapınız',
      logoUrl: '/src/assets/images/icons/star.svg'
    }
  ];

  return (
    <div className="signboard-text">
      <div className="head">
        <h1 className="title"><a href="#">{name || title}</a><span>({last_air_date && last_air_date.slice(0, 4) || release_date && release_date.slice(0, 4)})</span></h1>
        <div className="sub-title">
          <span className="box">{vote_average}</span>
          <ul>
            {
              genres && genres.length > 0 && genres.map((genre, index) => {
                return <li key={index}><a href="#">{genre.name}</a></li>
              })
            }
          </ul>
          <span>&#8226; {`${episode_run_time && episode_run_time[0]}m` || `${runtime}m`}</span>
        </div>
      </div>
      <div className="badges">
        <CircleProgressBar percentage={Math.round(popularity / 100)} size='large' />
        <span className="text">Üye<br/>Puanları</span>
        {
          badges && badges.map((badge, index)=> {
            return <Tooltip data={badge} key={index}/>
          })
        }
        <a href="#!" className="text-link"><img src={playButtonIcon} alt="Play Button"/>Fragmanı Oynat</a>
      </div>
      <div className="descriptions">
        <h2 className="info">{last_episode_to_air && last_episode_to_air.name}</h2>
        <h3 className="title">Özet</h3>
        <p className="text">{overview}</p>
        <ul className="identity-disc">
          <li>
            <a href="#!">Brian Andrew Mendoza</a>
            <span>Director</span>
          </li>
          <li>
            <a href="#!">Brian Andrew Mendoza</a>
            <span>Director</span>
          </li>
          <li>
            <a href="#!">Brian Andrew Mendoza</a>
            <span>Director</span>
          </li>
          <li>
            <a href="#!">Brian Andrew Mendoza</a>
            <span>Director</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SignboardText;

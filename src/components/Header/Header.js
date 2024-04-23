import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import './Header.scss';

import SearchSuggestion from '../SearchSuggestion/SearchSuggestion';

import closeIconWhite from '../../assets/images/icons/close-white.svg';
import searchIcon from '../../assets/images/icons/search.svg';
import tmdbLogo from '../../assets/images/icons/tmdbLogo.svg';

import { BASE_URL, API_KEY } from '../../utils/constants';
import axios from 'axios';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [suggestionList, setSuggestionList] = useState([]);

  useEffect(() => {
    axios.get(`${BASE_URL}/search/trending?api_key=${API_KEY}`)
      .then((response) => {
        if (response && response.status === 200) {
          const newSuggesionList = [];
          response.data && response.data.results.forEach(item => {
            newSuggesionList.push(item.name || item.title);
          });
          setSuggestionList(newSuggesionList.slice(0, 10))
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleToogle = (event) => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = () => {
    console.log('handleSubmit');
  }

  return (
    <>
    <header id="header">
      <div className="container">
        <nav>
          <div className="menu">
            <div className="logo">
              <Link to="/"><img src={tmdbLogo} alt="TMDB Logo" /></Link>
            </div>
            <ul className="menu-list">
              <li>
                <a href="/" alt="">Filmler</a>
                <ul>
                  <li><a href="/" alt="">Popüler</a></li>
                  <li><a href="/" alt="">Gösterimdekiler</a></li>
                  <li><a href="/" alt="">Yakında</a></li>
                  <li><a href="/" alt="">En Fazla oy Alanlar</a></li>
                </ul>
              </li>
              <li>
                <a href="/" alt="">Diziler</a>
                <ul>
                  <li><a href="/" alt="">Popüler</a></li>
                  <li><a href="/" alt="">Gösterimdekiler</a></li>
                  <li><a href="/" alt="">Yakında</a></li>
                  <li><a href="/" alt="">En Fazla oy Alanlar</a></li>
                </ul>
              </li>
              <li><a href="/" alt="">Kişiler</a></li>
              <li><a href="/" alt="">Daha Fazla</a></li>
            </ul>
          </div>
          <a href="#!" onClick={handleToogle} className="search">
            {
              isOpen ? <img src={closeIconWhite} alt="Close" /> : <img src={searchIcon} alt="Search" />
            }            
          </a>
        </nav>
      </div>
    </header>
    <SearchSuggestion isOpen={isOpen} onSubmit={handleSubmit} suggestionList={suggestionList}/>
    </>
  );
};

Header.propTypes = {};

Header.defaultProps = {};

export default Header;

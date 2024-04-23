import React, { useState, useEffect, useRef } from 'react';
import './SearchSuggestion.scss';
import PropTypes from 'prop-types';

import searchIconGray from '../../assets/images/icons/search-gray.svg';
import arrowIconBlack from '../../assets/images/icons/arrow.svg';

const SearchSuggestion = (props) => {
  const { isOpen, suggestionList } = props;
  const [val, setVal] = useState('');
  const inputElement = useRef(null);

  const onChangeHandler = (e) => {
    setVal(e.target.value);
  };

  useEffect(() => {
    if (inputElement.current) {
      setTimeout(() => {
        inputElement.current.focus();
      }, 250);
    }
  });

  const onSubmit = () => {
    props.onSubmit(val);
    setVal(val);
  };

  const suggestionListRender = (suggestionList) => {
    if (suggestionList.length <=0) return null;
    return suggestionList.map((suggestion, index) => 
      <li key={index}><span className="container text">
      <img className="search-icon" src={searchIconGray} alt="Search"/>
    {suggestion}</span></li>);
  } 

  return (
    <section className={`search-suggestion ${isOpen ? 'active' : ''}`}>
      <div className="search-input">
        <div className="container">
          <img className="search-icon" src={searchIconGray} alt="Search"/>
          <input className="form-control" type="text" placeholder="Film, dizi, kişi ara" ref={inputElement} onChange={(event) => onChangeHandler(event)} />
        </div>
      </div>
      { suggestionList && suggestionList.length > 0 && (
        <>
        <div className="title"><span className="container"><img src={arrowIconBlack} />Revaçta</span></div>
        <ul className="suggestion-list">
          {suggestionListRender(suggestionList)}
        </ul>
        </>
      )}
    </section>
  );
};

SearchSuggestion.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  suggestionList: PropTypes.array
};

SearchSuggestion.defaultProps = {};

export default SearchSuggestion;

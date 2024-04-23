import React, { useEffect } from 'react';
import './App.scss';
import Home from './container/Home/Home';
import MovieDetail from './container/MovieDetail/MovieDetail';
import Header from './components/Header/Header';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const App = () => {

  useEffect(() => {
    document.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      const $header = document.getElementById('header');
      
      if (scrollPosition > 64){
        $header.classList.add('rollup');
      } else {
        $header.classList.remove('rollup');
      }
    });
  })

  return (
    <Router>
    <Header />
    <Switch>
      <Route path={`/:movieType/:id`}>
        <MovieDetail />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  </Router>
  )
}

export default App;
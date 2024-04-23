import React, { useState, useEffect } from 'react';

import Banner from '../../components/Banner/Banner';
import Movies from '../../components/Movies/Movies';

import { BASE_URL, API_KEY } from '../../utils/constants';
import axios from 'axios';

const Home = () => {
  const [ movies, setMovies] = useState([]);
  const [ tvList, setTvList] = useState([]);
  const [ railsData, setRailsData] = useState([]);

  const bannerData = {
    imageBgUrl: 'src/assets/images/hero.jpg',
    title: 'Hoş Geldiniz.',
    subTitle: 'Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin.'
  };

  useEffect(() => {
    axios.get(`${BASE_URL}/discover/tv?api_key=${API_KEY}`)
      .then((response) => {
        if (response && response.status === 200) {
          response.data.results.forEach((item) => item.movieType = 'tv');
          setTvList(response.data.results);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios.get(`${BASE_URL}/discover/movie?api_key=${API_KEY}`)
      .then((response) => {
        if (response && response.status === 200) {
          response.data.results.forEach((item) => item.movieType = 'movie');
          setMovies(response.data.results);
          setRailsData(response.data.results);  
        }
      })
      .catch((error) => {
        console.log(error);
      });
  },[]);

  const handleSwitchBtn = (e) => {
    if (e === 1) {
      setRailsData(movies);
      return;
    }
    setRailsData(tvList);
  }

  return (
    <main>
      <Banner data={bannerData} />
      {railsData && railsData.length > 0 && (
        <Movies data={railsData} switchChanged={handleSwitchBtn} />
      )}
      <div className="container"> {/* Header'daki slide'ı görmek için eklendi. */}
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ac bibendum enim, non semper nisi. Nam diam felis, blandit ut iaculis non, elementum non eros. Sed ac scelerisque quam, ac euismod felis. Donec imperdiet sagittis mauris, eu molestie enim placerat eu. Fusce blandit sagittis nulla, nec laoreet odio pellentesque sit amet. Aenean sed magna maximus dolor fringilla tincidunt. Cras nec erat vitae nibh convallis aliquet quis quis massa. Mauris condimentum hendrerit lorem, id viverra ipsum viverra ut. Suspendisse neque nunc, euismod in fringilla non, facilisis ut dui. Suspendisse viverra tellus vel nunc lacinia, consequat malesuada odio accumsan. Curabitur dictum turpis fringilla tellus molestie, et elementum est pulvinar. Ut id rutrum quam, sed porta lorem. Suspendisse sit amet lorem eu elit scelerisque interdum consequat eget nunc. Praesent malesuada id lorem at accumsan. Proin sodales leo turpis, in iaculis ex efficitur a.</p>
        <p>Sed quis egestas felis. Duis sit amet faucibus ante, quis placerat magna. Ut feugiat tempor elit, tristique ullamcorper orci vestibulum vitae. Duis congue mi sed quam interdum suscipit. Sed vel consectetur ex. Duis consectetur viverra venenatis. Sed in sapien venenatis tortor fringilla tempor. Phasellus ligula elit, hendrerit et tempus ut, sodales a massa. Mauris a ipsum ut elit vulputate aliquet. Quisque faucibus sapien sed velit vestibulum egestas</p>
        <p>Nam tempus nisl non elit sodales, aliquet tempus ligula fringilla. Pellentesque eleifend nisl non augue accumsan feugiat. Duis ac turpis porta massa imperdiet suscipit id et magna. Nam scelerisque tortor ac lectus egestas, et pellentesque leo tristique. Suspendisse potenti. Etiam ac malesuada enim, sagittis porttitor felis. Curabitur at semper libero, nec euismod augue. Nulla facilisi. Aenean id imperdiet nibh. Duis enim risus, pellentesque quis auctor vel, fermentum sed sem. Nunc ligula dui, condimentum quis dolor vitae, ullamcorper dapibus</p>
      </div>
    </main>
  );
};

export default Home;
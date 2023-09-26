import './App.css';
import style from './style.module.css';
import Row from './components/Row.jsx'
import requests from './request';
import Banner from './components/Banner';
import Nav from './components/Nav';


function App() {
  return (
    <div className='body'>
      <Nav />
      <Banner fetchUrl={requests.fetchNetflixOriginals} />
      <Row isPoster={true} title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries Movies" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;

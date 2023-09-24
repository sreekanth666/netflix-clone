import './App.css';
import style from './style.module.css';
import Row from './components/Row.jsx'
import requests from './request';


function App() {
  return (
    <>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} />
    </>
  );
}

export default App;

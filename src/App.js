import './App.css';
import style from './style.module.css';

function App() {
  return (
    <>
        <nav className={`navbar ps-5 pe-5 ${style.navbar}`}>
          <div className="container p-3">
            <a className="navbar-brand" href="">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="Bootstrap" width="150" />
            </a>
          </div>
        </nav>

      <div className={`container-fluid ${style.banner1}`}>
        <div className={`items ${style.items}`}>
          <h1>Stranger Things</h1>
          <p className={`${style.shortInfo}`}>When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces and one strange little girl.</p>
          <button type="button" class="btn btn-light"><i class="bi bi-play-fill"></i>Play</button> <button type="button" class="btn btn-light">More Info</button>
        </div>
      </div>

      <div className={`container-fluid ${style.categories}`}>
        <div className={`row`}>
          <p className={`${style.categoryHead}`}>Trending Now</p>
        </div>
        <div className={`row`}>
          <div className={`${style.showCard}`}>
            <img src='https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQWAJ68nKbSun1YQc4HdkX7Lk5Q2BRy8ZWOPiWiIFmuVece6NCorgfzsAkX8ZvkItQhsSDbLpBuog0Ux1EumB0cxzFKamXpcSNdu36Tdk1XgmJgITbQsi5QvJOdbGSihsS3Sr30ukw0r3R1bW3dFdiyaS.jpg?r=0a3' className={`${style.cardImg}`}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

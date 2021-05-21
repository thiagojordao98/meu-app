import logo from './logo.svg';
import Menu from './Pages/Menu';
import perfil from './perfil.jpeg';
import instagram from './instagram.png';
import github from './github.png';
import linkedin from './linkedin.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <Menu />
      <header className="App-header">
        <img src={perfil} className="App-logo" alt="logo" />
        <div className="img">
          <a href="github.com/thiagojordao98">
            <img src={instagram} alt="github" width="30px" />
          </a>
          <a href="#">
            <img src={github} hspace="10px" alt="github" width="30px" />
          </a>
          <a href="github.com/thiagojordao98">
            <img src={linkedin} alt="github" width="30px" />
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;

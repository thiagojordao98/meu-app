import logo from './logo.svg';
import perfil from './perfil.jpeg';
import instagram from './instagram.png';
import github from './github.png';
import linkedin from './linkedin.png';
import './App.css';

function App() {
  return (
    <div className="App">
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
          <div className="area-cabecalho">
            <div className="area-menu">
              <a href="index.html">Home</a>
              <a href="postagens.html">Postagens</a>
              <a href="Códigos.html">Projetos</a>
              <a href="Sobre.html">Sobre</a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;

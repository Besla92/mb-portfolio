import './App.css';
import Home from './Home';

function App() {

  return (
    <div className="App">
      <nav className="navbar navbar-dark">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      <div className="collapse" id="navbarToggleExternalContent">
        <div className="bg-dark p-4 menu-container">
          <div className="menu-text-container">
            <div className="vertical-menu">
              <a href="#home" className="active">Home</a>
              <a href="#about">About</a>
              <a href="#services">Services</a>
              <a href="#portfolio">Portfolio</a>
              <a href="#contact">Contact</a>
            </div>
          </div>  
        </div>
      </div>
      <Home />
    </div>
  );
}

export default App;

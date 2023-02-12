import './App.css';

function App() {
  return (
    <div className="App">
      <div className="heder__logo">

      </div>

      <div className="header__search"></div>
      <div className="header__nav">
        <div className="nav__item">
          <span className="nav__itemlineone">Hello Guest</span>
          <span className="nav__itemlinetwo">Shop In</span>
        </div>
        <div className="nav__item">
          <span className="nav__itemlineone">Your</span>
          <span className="nav__itemlinetwo">shop</span>

        </div>
        <div className="nav__item">
          <span className="nav__itemlineone">Basket</span>
          <span className="nav__itemlinetwo">0</span>

        </div>
      </div>
    </div>
  );
}

export default App;

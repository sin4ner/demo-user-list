import logo from './logo.svg';
import './App.css';

import users from './data/randomuser.json' // from https://github.com/pixelastic/fakeusers/tree/master/data

function App() {
  console.log(users)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

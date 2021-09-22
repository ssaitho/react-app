import logo from './logo.svg';
import './App.css';
import { Button } from "./stories/components/Button";

function App() {
  const onClickButton = () => alert("押しちゃったね");
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
        <Button
          size="large" 
          backgroundColor="#61dafb"
          label="購入はこちらから"
          onClick={onClickButton}
        />
      </header>
    </div>
  );
}

export default App;

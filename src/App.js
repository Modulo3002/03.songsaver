import logo from "./logo.svg";
import "./App.css";
import Inputbox from "./components/Inputboxes";
import Dropdownmenu from "./components/Dropdown";

function App() {
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
      <Inputbox />
      <Dropdownmenu />
    </div>
  );
}

export default App;

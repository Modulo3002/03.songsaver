import logo from "./logo.svg";
import "./App.css";
import Inputbox from "./components/Inputboxes";
import Dropdownmenu from "./components/Dropdown";
import Addsongbtn from "./components/Addsongbtn";
import Listoverview from "./components/List-overview";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { changeArtist } from "./actions";

function App() {
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Header />
      <Inputbox
        placeholder="Artist"
        onchange={(newArtist) => dispatch(changeArtist(newArtist))}
      />
      <Inputbox placeholder="Song name" />
      <Dropdownmenu />
      <Dropdownmenu />
      <Addsongbtn />
      <Listoverview />
    </div>
  );
}

export default App;

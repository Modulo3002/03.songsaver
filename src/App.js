import logo from "./logo.svg";
import "./App.css";
import Inputbox from "./components/Inputboxes";
import Dropdownmenu from "./components/Dropdown";
import Addsongbtn from "./components/Addsongbtn";
import Listoverview from "./components/List-overview";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import { changeArtist, changeSong } from "./actions";
import { useSelector } from "react-redux";

function App() {
  const inputboxState = useSelector((state) => state.inputboxReducer);
  const inputboxState2 = useSelector((state) => state.inputboxReducer2);
  console.log(inputboxState2);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Header />
      <Inputbox
        placeholder="Artist"
        value={inputboxState}
        onchange={(newArtist) => dispatch(changeArtist(newArtist))}
      />
      <Inputbox
        placeholder="Song name"
        value={inputboxState2}
        onchange={(newSong) => dispatch(changeSong(newSong))}
      />
      <Dropdownmenu />
      <Dropdownmenu />
      <Addsongbtn />
      <Listoverview />
    </div>
  );
}

export default App;

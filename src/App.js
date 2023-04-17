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
import Testcomponent from "./components/Testcomponent";

function App() {
  const inputboxState = useSelector((state) => state.inputboxReducer);
  const inputboxState2 = useSelector((state) => state.inputboxReducer2);
  console.log(inputboxState2);
  const rating = [1, 2, 3, 4, 5];
  const genre = ["pop", "rock", "dance", "disco", "electro"];
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Header />
      <Testcomponent />
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
      <Dropdownmenu selection={genre} />
      <Dropdownmenu selection={rating} />

      <Addsongbtn />
      <Listoverview />
    </div>
  );
}

export default App;

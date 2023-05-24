import "./App.css";
import Inputbox from "./components/Inputboxes";
import Dropdownmenu from "./components/Dropdown";
import Addsongbtn from "./components/Addsongbtn";
import Listoverview from "./components/List-overview";
import Header from "./components/Header";
import { useDispatch } from "react-redux";
import {
  changeArtist,
  changeSong,
  changeSelectedGenre,
  changeSelectedRating,
  updateListoverview,
  deleteLatestEntry,
} from "./actions";
import { useSelector } from "react-redux";
import Deletesongbtn from "./components/Deletesongbtn";

function App() {
  const inputboxArtistState = useSelector(
    (state) => state.inputboxArtistReducer
  );
  const inputboxSongState = useSelector((state) => state.inputboxSongReducer);
  const dropdownRatingState = useSelector(
    (state) => state.dropdownRatingReducer
  );
  const dropdownGenreState = useSelector((state) => state.dropdownGenreReducer);
  const listoverviewState = useSelector((state) => state.listOverviewReducer);
  const rating = [1, 2, 3, 4, 5];
  const genre = ["pop", "rock", "dance", "disco", "electro"];
  const dispatch = useDispatch();

  return (
    <div className="App">
      <Header />
      <div className="inputFields">
        <Inputbox
          placeholder="Artist"
          value={inputboxArtistState}
          onchange={(newArtist) => dispatch(changeArtist(newArtist))}
        />
        <Inputbox
          placeholder="Song name"
          value={inputboxSongState}
          onchange={(newSong) => dispatch(changeSong(newSong))}
        />
        <Dropdownmenu
          selection={genre}
          onchange={(item) => dispatch(changeSelectedGenre(item))}
        />
        <Dropdownmenu
          selection={rating}
          onchange={(item) => dispatch(changeSelectedRating(item))}
        />

        <Addsongbtn
          onclick={() =>
            dispatch(
              updateListoverview(
                inputboxArtistState,
                inputboxSongState,
                dropdownGenreState,
                dropdownRatingState 
              )
            )
          }
        />
        <Deletesongbtn onclick={()=>dispatch(deleteLatestEntry()) }/>
      </div>
      <Listoverview overview={listoverviewState} />
    </div>
  );
}

export default App;

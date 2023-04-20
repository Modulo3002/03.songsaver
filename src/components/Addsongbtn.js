import React from "react";

function Addsongbtn(props) {
  return (
    <button className="addSongBtn" onClick={props.onclick}>
      Add Song
    </button>
  );
}

export default Addsongbtn;

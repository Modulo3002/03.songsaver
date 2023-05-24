import React from "react";

function Deletesongbtn(props) {
  return (
    <button className="deleteSongBtn" onClick={props.onclick}>
      Delete Latest Entry
    </button>
  );
}

export default Deletesongbtn;

import React from "react";

function Inputbox(props) {
  return (
    <form>
      <input
        className="inputBoxes"
        type="text"
        name="inputbox"
        placeholder={props.placeholder}
        value={props.value}
        onChange={(event) => {
          props.onchange(event.target.value);
        }}
      ></input>
    </form>
  );
}

export default Inputbox;

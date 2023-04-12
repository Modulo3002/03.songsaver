import React from "react";

function Inputbox(props) {
  return (
    <form>
      <input
        type="text"
        name="inputbox"
        placeholder={props.placeholder}
        onChange={(event) => {
          props.onchange(event.target.value);
        }}
      ></input>
    </form>
  );
}

export default Inputbox;

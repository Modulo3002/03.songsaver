import React from "react";

function Dropdownmenu(props) {
  const dropDownMenuItems = props.selection.map((x) => {
    return <option value={x}>{x}</option>;
  });

  return (
    <select
      id="ddmenu"
      onChange={(event) => {
        props.onchange(event.target.value);
      }}
    >
      <option value="">Rating</option>
      {dropDownMenuItems}
    </select>
  );
}

export default Dropdownmenu;

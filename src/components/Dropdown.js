import React from "react";

function Dropdownmenu(props) {
  const dropDownMenuItems = props.selection.map((x) => {
    return <option value={x}>{x}</option>;
  });

  return (
    <select
      className="dropDown"
      id="ddmenu"
      onChange={(event) => {
        props.onchange(event.target.value);
      }}
    >
      <option value=""></option>
      {dropDownMenuItems}
    </select>
  );
}

export default Dropdownmenu;

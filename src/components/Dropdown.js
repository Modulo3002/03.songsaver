import React from "react";

// const log = (event) => {
//   console.log(event.target.value);
//   return event.target.value;
// };

function Dropdownmenu(props) {
  console.log(props.selection);
  const dropDownMenuItems = props.selection.map((x) => {
    console.log(x);
    return <option value={x}>{x}</option>;
  });

  return (
    <select
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

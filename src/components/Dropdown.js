import React from "react";

const log = (event) => {
  console.log(event.target.value);
};

function Dropdownmenu(props) {
  console.log(props.selection);
  const selectionFunction = props.selection.map((x) => {
    console.log(x);
    return <option value={x}>{x}</option>;
  });

  return (
    <select id="ddmenu" onChange={log}>
      <option value=""></option>
      {selectionFunction}
    </select>
  );
}

export default Dropdownmenu;

import React from "react";

function Listoverview(props) {
  const makeList = (list) => {
    return list.map((listElement) => {
      return (
        <tr>
          <td>{listElement.artist}</td>
          <td>{listElement.song}</td>
          <td>{listElement.genre}</td>
          <td>{listElement.rating}</td>
        </tr>
      );
    });
  };
  return (
    <div>
      <table className="listOverview">
        <tr>
          <th>Artist</th>
          <th>Songname</th>
          <th>Genre</th>
          <th>Rating</th>
        </tr>
        {makeList(props.overview)}
      </table>
    </div>
  );
}

export default Listoverview;

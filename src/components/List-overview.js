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
      <table>
        <tr>
          <th>Artist</th>
          <th>Songname</th>
          <th>Genre</th>
          <th>Rating</th>
        </tr>
        {makeList(props.overview)}
        <tr>
          <td>Artist 1</td>
          <td>songname 1 blablablabla</td>
          <td>genre 1</td>
          <td>rating 1</td>
        </tr>
      </table>
    </div>
  );
}

export default Listoverview;

import React from "react";

function Listoverview() {
  return (
    <div>
      <table>
        <tr>
          <th>Artist</th>
          <th>Songname</th>
          <th>Genre</th>
          <th>Rating</th>
        </tr>
        <tr>
          <td>Artist 1</td>
          <td>songname 1 blablablabla</td>
          <td>genre 1</td>
          <td>rating 1</td>
        </tr>
        <tr>
          <td>Artist 2</td>
          <td>songname 2</td>
          <td>genre 2 sadfasdfasd</td>
          <td>rating 2</td>
        </tr>
        <tr>
          <td>Artist 3</td>
          <td>songname 3</td>
          <td>genre 3</td>
          <td>rating 3</td>
        </tr>
      </table>
    </div>
  );
}

export default Listoverview;

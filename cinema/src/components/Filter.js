
import React from "react";

function Filter({ setFilterTitle, setFilterRating }) {
  return (
    <div style={{margin:"20px 0"}}>
      <input
        type="text"
        placeholder="Rechercher par titre..."
        onChange={(e) => setFilterTitle(e.target.value)}
      />
      <input
        type="number"
        min="0"
        max="5"
        placeholder="Note minimale"
        onChange={(e) => setFilterRating(Number(e.target.value))}
        style={{marginLeft:"10px"}}
      />
    </div>
  );
}

export default Filter;

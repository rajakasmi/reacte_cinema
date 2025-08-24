import React from "react";

function Navbar({ setFilterTitle, setFilterRating }) {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: "#222",
      color: "#fff",
      padding: "10px 20px"
    }}>
      {/* Logo / Titre */}
      <h2 style={{margin: 0}}>🎬 MyMovies</h2>

      {/* Zone recherche */}
      <div style={{display: "flex", gap: "10px"}}>
        <input
          type="text"
          placeholder="Rechercher un film..."
          onChange={(e) => setFilterTitle(e.target.value)}
          style={{padding: "5px", borderRadius: "4px", border: "none"}}
        />
        <input
          type="number"
          min="0"
          max="5"
          placeholder="Note min"
          onChange={(e) => setFilterRating(Number(e.target.value))}
          style={{padding: "5px", borderRadius: "4px", width:"80px", border: "none"}}
        />
      </div>
    </nav>
  );
}

export default Navbar;

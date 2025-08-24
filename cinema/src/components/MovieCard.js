
import React from "react";

function MovieCard({ movie }) {
  return (
    <div className="movie-card" style={{border:"1px solid #ccc", borderRadius:"8px", padding:"10px", width:"250px"}}>
      <img src={movie.posterURL} alt={movie.title} style={{width:"100%", borderRadius:"8px"}} />
      <h3>{movie.title}</h3>
      <p>{movie.description}</p>
      <p>⭐ {movie.rating}/5</p>
    </div>
  );
}

export default MovieCard;


import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies }) {
  return (
    <div style={{display:"flex", gap:"20px", flexWrap:"wrap"}}>
      {movies.length > 0 ? (
        movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
      ) : (
        <p>Aucun film trouvé 😢</p>
      )}
    </div>
  );
}

export default MovieList;

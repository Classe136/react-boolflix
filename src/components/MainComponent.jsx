import { useState, useEffect } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";
import MediaList from "./MediaList";
function MainComponent() {
  const { movies } = useGlobalContext();
  console.log(movies);
  return (
    <main className="container-fluid">
      {movies.length < 1 ? (
        <div className="d-flex container h-100 align-items-center justify-content-center">
          <h2>Prova a cercare un film o una serie tv!</h2>
        </div>
      ) : (
        <MediaList title="Movies" list={movies} />
      )}
    </main>
  );
}
export default MainComponent;

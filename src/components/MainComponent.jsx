import { useState, useEffect } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";
import MediaList from "./MediaList";
function MainComponent() {
  const { movies, series, isSearching, loading } = useGlobalContext();
  //console.log(movies);
  return (
    <main className="container-fluid">
      {!isSearching ? (
        <div className="d-flex container h-100 align-items-center justify-content-center">
          <h2>Prova a cercare un film o una serie tv!</h2>
        </div>
      ) : (
        <>
          <MediaList title="Movies" list={movies} key="movie" />
          <MediaList title="TV Series" list={series} key="tv" />
        </>
      )}
    </main>
  );
}
export default MainComponent;

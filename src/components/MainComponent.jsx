import { useGlobalContext } from "../contexts/GlobalContext";
import Loader from "./Loader";
import MediaList from "./MediaList";
function MainComponent() {
  const { movies, series, isSearching, loading, popular } = useGlobalContext();
  //console.log(movies);
  const renderResults = () => {
    if (!isSearching) {
      return (
        <>
          <MediaList title="Popular" list={popular} key="popular" />
          <div className="d-flex container h-100 align-items-center justify-content-center">
            <h2>Prova a cercare un film o una serie tv!</h2>
          </div>
        </>
      );
    }
    if (isSearching && loading) return <Loader />;
    return (
      <>
        <MediaList title="Popular" list={popular} key="popular" />
        <MediaList title="Movies" list={movies} key="movie" />
        <MediaList title="TV Series" list={series} key="tv" />
      </>
    );
  };
  return <main className="container-fluid">{renderResults()}</main>;
}
export default MainComponent;

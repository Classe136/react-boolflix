import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const apiUrl = import.meta.env.VITE_API_URL;
const apiKey = import.meta.env.VITE_API_KEY;

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  useEffect(getPopular, []);
  function getData(query, endpoint) {
    setLoading(true);
    axios
      .get(apiUrl + "search/" + endpoint, {
        params: {
          api_key: apiKey,
          query,
        },
      })
      .then((res) => {
        //console.log(res.data);
        if (endpoint === "movie") {
          //per ogni film chiamare
          // https://api.themoviedb.org/3/movie/461191/credits
          setMovies(res.data.results);
        } else {
          setSeries(res.data.results);
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  function getPopular() {
    setLoading(true);
    axios
      .get(apiUrl + "movie/popular", {
        params: {
          api_key: apiKey,
        },
      })
      .then((res) => {
        //console.log(res.data);

        setPopular(res.data.results);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }
  function search(query) {
    if (!query) {
      setMovies([]);
      setSeries([]);
      setIsSearching(false);
    } else {
      getData(query, "movie");
      getData(query, "tv");
      setIsSearching(true);
    }
  }
  const data = {
    movies,
    series,
    popular,
    loading,
    isSearching,
    search,
  };
  return (
    <GlobalContext.Provider value={data}>{children}</GlobalContext.Provider>
  );
};

function useGlobalContext() {
  const context = useContext(GlobalContext);
  return context;
}

export { GlobalProvider, useGlobalContext };

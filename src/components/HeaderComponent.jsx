import { useState } from "react";
import { useGlobalContext } from "../contexts/GlobalContext";
function HeaderComponent() {
  const { search } = useGlobalContext();
  const [query, setQuery] = useState("");

  function handleInput(e) {
    setQuery(e.target.value);
  }
  function handleSearch(e) {
    e.preventDefault();
    search(query.trim());
  }
  function searchOnEnter(e) {
    console.log(e);
    if (!query) search("");
    if (e.code === "Enter") search(query);
  }
  return (
    <header>
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <h1 className="bebas-neue-regular">BOOLFLIX</h1>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              name="query"
              id="query"
              value={query}
              onChange={handleInput}
              onKeyUp={searchOnEnter}
            />
            <button
              className="btn btn-danger"
              type="search"
              onClick={handleSearch}
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
}

export default HeaderComponent;

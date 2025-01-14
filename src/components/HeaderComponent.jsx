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
    search(query);
  }
  return (
    <header>
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <h1>BOOLFLIX</h1>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              name="query"
              id="query"
              onChange={handleInput}
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

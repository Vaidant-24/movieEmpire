import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "./components/MovieCard";

function App() {
  const [movie, setMovie] = useState([]);

  const [search, setSearch] = useState("");

  const searchMovies = async (title) => {
    try {
      const response = await fetch(
        `http://www.omdbapi.com/?apikey=c032e2d7&s=${title}`
      );

      const data = await response.json();
      setMovie(data.Search);
    } catch (error) {
      console.log("Error while fetching: ", error);
    }
  };

  useEffect(() => {
    searchMovies(search);
  }, []);

  return (
    <>
      <div className="app">
        <h1>Movie Empire</h1>

        <div className="search">
          <input
            placeholder="Search for movies"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <img
            src="search.svg"
            alt="search"
            onClick={() => searchMovies(search)}
          />
        </div>

        <div className="container">
          {movie.length > 0 ? (
            movie.map((movies, ind) => <MovieCard key={ind} movie1={movies} />)
          ) : (
            <div className="empty">No movie found!</div>
          )}
        </div>
      </div>
    </>
  );
}

export default App;

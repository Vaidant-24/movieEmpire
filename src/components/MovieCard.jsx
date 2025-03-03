const MovieCard = ({ movie1 }) => {
  return (
    <div className="movie">
      <div>{movie1.Title}</div>
      <div>
        <img
          src={
            movie1.Poster === "N/A"
              ? "https://via.www.placeholder.com/400"
              : movie1.Poster
          }
          alt={movie1.Title}
        />
      </div>

      <div>
        <span>{movie1.Type}</span>
        <h3>{movie1.Title}</h3>
      </div>
    </div>
  );
};

export default MovieCard;

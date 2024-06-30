import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import "./MovieLists.css";

const MovieList = () => {
  const Movies = useSelector((state) => state.movie.movies);

  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-GB", options);
  };

  return (
    <Container>
      {Movies.map((movie, index) => (
        <div className="movieCardItem">
          <div>
            <img src={movie.image} alt="Movie imag" />
            <h4>{movie.name}</h4>
          </div>
          <div className="movieDetails">
            <h5>Release Date:- {formatDate(movie.releaseDate)}</h5>
            <h5>Language:- {movie.language}</h5>
            <h5>IMDB Rating:- {movie.imdbRating}</h5>
            <h5>Show Time:- {movie.showtime}</h5>
            <h5>Category:- </h5>
            <a href={movie.trailerLink}>Watch trailer</a>
          </div>
        </div>
      ))}
    </Container>
  );
};

export default MovieList;

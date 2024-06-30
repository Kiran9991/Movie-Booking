import Container from "../../components/Container";
import AddMovieForm from "./Form/AddMovieForm";
import { useSelector } from "react-redux";
import MovieList from "./listItems/MovieLists";

const Movie = () => {
  const MoviesCollection = useSelector((state) => state.movie.movies);

//   console.log(MoviesCollection);
  return (
    <Container size={"5rem"}>
        <h2>Category</h2>
      <AddMovieForm />
      <h2>Movie list Items</h2>
      <MovieList/>
    </Container>
  );
};

export default Movie;

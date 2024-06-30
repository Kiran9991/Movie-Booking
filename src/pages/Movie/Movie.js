import Container from "../../components/Container";
import AddMovieForm from "./Form/AddMovieForm";

const Movie = () => {
    return (
        <Container size={'5rem'}>
            <AddMovieForm/>
            <h2>Movie list Items</h2>
        </Container>
    )
}

export default Movie;
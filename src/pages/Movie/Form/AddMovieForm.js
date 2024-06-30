import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { movieActions } from "../../../store/moviesSlice";
import "./AddMovieForm.css";

const AddMovieForm = () => {
  const imageRef = useRef();
  const nameRef = useRef();
  const descriptionRef = useRef();
  const releaseDateRef = useRef();
  const languageRef = useRef();
  const imdbRatingRef = useRef();
  const showtimeRef = useRef();
  const trailerLinkRef = useRef();
  const categoryRef = useRef();

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const movie = {
      image: imageRef.current.value,
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      releaseDate: releaseDateRef.current.value,
      language: languageRef.current.value,
      imdbRating: imdbRatingRef.current.value,
      showtime: showtimeRef.current.value,
      trailerLink: trailerLinkRef.current.value,
      category: categoryRef.current.value,
    };

    console.log(movie);
    dispatch(movieActions.addMovie(movie));
  };

  return (
    <form className="movie-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="name">Name:-</label>
          <input type="text" id="name" name="name" ref={nameRef} />
        </div>
        <div className="form-group">
          <label htmlFor="image">Movie Image address:-</label>
          <input type="text" id="image" name="image" ref={imageRef} />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:-</label>
          <input
            type="text"
            id="description"
            name="description"
            ref={descriptionRef}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="releaseDate">Release Date:-</label>
          <input
            type="date"
            id="releaseDate"
            name="releaseDate"
            ref={releaseDateRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="language">Language:-</label>
          <input type="text" id="language" name="language" ref={languageRef} />
        </div>
        <div className="form-group">
          <label htmlFor="imdbRating">IMDB Rating:-</label>
          <input
            type="number"
            id="imdbRating"
            name="imdbRating"
            ref={imdbRatingRef}
            step="0.1"
            min="0"
            max="10"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="showtime">Showtime:-</label>
          <input type="text" id="showtime" name="showtime" ref={showtimeRef} />
        </div>
        <div className="form-group">
          <label htmlFor="trailerLink">Trailer Link:-</label>
          <input
            type="text"
            id="trailerLink"
            name="trailerLink"
            ref={trailerLinkRef}
          />
        </div>
        <div className="form-group">
          <label htmlFor="category">Select Category:-</label>
          <input type="text" id="category" name="category" ref={categoryRef} />
        </div>
      </div>
      <button className="moviebutton" type="submit">
        Add Movie
      </button>
    </form>
  );
};

export default AddMovieForm;

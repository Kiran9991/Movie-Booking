import React, { useState } from "react";
import "./AddMovieForm.css";

const AddMovieForm = () => {
  const [movie, setMovie] = useState({
    image: "",
    title: "",
    description: "",
    releaseDate: "",
    language: "",
    imdbRating: "",
    showtime: "",
    trailerLink: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setMovie({ ...movie, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(movie);
    // Handle form submission logic
  };

  return (
    <form className="movie-form" onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="image">Movie Image</label>
          <input
            type="text"
            id="image"
            name="image"
            value={movie.image}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={movie.title}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input
            type="text"
            id="description"
            name="description"
            value={movie.description}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="releaseDate">Release Date</label>
          <input
            type="date"
            id="releaseDate"
            name="releaseDate"
            value={movie.releaseDate}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="language">Language</label>
          <input
            type="text"
            id="language"
            name="language"
            value={movie.language}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="imdbRating">IMDB Rating</label>
          <input
            type="number"
            id="imdbRating"
            name="imdbRating"
            value={movie.imdbRating}
            onChange={handleChange}
            step="0.1"
            min="0"
            max="10"
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="showtime">Showtime</label>
          <input
            type="text"
            id="showtime"
            name="showtime"
            value={movie.showtime}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="trailerLink">Trailer Link</label>
          <input
            type="text"
            id="trailerLink"
            name="trailerLink"
            value={movie.trailerLink}
            onChange={handleChange}
          />
        </div>
      </div>
      <button className="moviebutton" type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovieForm;

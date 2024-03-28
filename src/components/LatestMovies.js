import React from 'react';

function LatestMovies({ awaitingMovies }) {
  // Rename AwaitingMovies prop to awaitingMovies for consistency
  const latestMovies = awaitingMovies.map((movie, index) => (
    // Use index as key only if there's no unique movie ID available
    <div key={movie.id || index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
      <img src={movie.poster} className="d-block w-100" alt={`Slide ${index + 1}`} />
      <div className="carousel-caption d-none d-md-block">
        <h5>{movie.title}</h5>
        <p>{movie.description}</p>
      </div>
    </div>
  ));

  return (
    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        {/* Generate carousel indicators based on the number of movies */}
        {latestMovies.map((_, index) => (
          <button key={index} type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={index} className={index === 0 ? "active" : ""} aria-label={`Slide ${index + 1}`}></button>
        ))}
      </div>
      <div className="carousel-inner">
        {/* Render the array of movie components */}
        {latestMovies}
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default LatestMovies;

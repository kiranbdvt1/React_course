import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LatestMovieDetails = () => {
  const [latestMovie, setLatestMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLatestMovie = async () => {
      try {
        const response = await axios.get('http://localhost:3001/latestMovieDetails');
        setLatestMovie(response.data); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching latest movie details:', error);
        setError('Failed to fetch latest movie details. Please try again later.');
        setLoading(false);
      }
    };

    fetchLatestMovie();

    return () => {
    };
  }, []); 

  return (
    <div>
      <h2>Latest Movie Details</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {latestMovie && (
        <div>
          <h3>{latestMovie.title}</h3>
          <p>{latestMovie.description}</p>
        </div>
      )}
    </div>
  );
};

export default LatestMovieDetails;

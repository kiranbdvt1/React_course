// components/AllLatestMovies.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Nav } from 'react-bootstrap';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css"
import LatestMovies from './LatestMovies'; 

function AllLatestMovies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/latestMovies')
      .then(response => {
        setMovies(response.data);
      })
      .catch(error => {
        console.error('Error fetching latest movies: ', error);
      });
  }, []);

  return (
    <div>
       <Tab.Container defaultActiveKey="latestMovies">
          <Nav variant="tabs" className="mb-4">
            <Nav.Item>
              <Link to="/allLatestMovies" className="nav-link" eventKey="latestMovies">Latest Movies</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/upcoming-movies" className="nav-link" eventKey="upcomingMovies">Upcoming Movies</Link>
            </Nav.Item>
            <Nav.Item>
              <Link to="/event" className="nav-link" eventKey="nearbyEvents">Nearby Events</Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
            <Tab.Pane eventKey="latestMovies">
            </Tab.Pane>
            <Tab.Pane eventKey="upcomingMovies">
              <h2>Upcoming Movies</h2>
            </Tab.Pane>
            <Tab.Pane eventKey="nearbyEvents">
              <h2>Nearby Events</h2>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container> 
      <h1>All Latest Movies</h1>
      <div>
        <LatestMovies awaitingMovies={movies} />
     </div>
     <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <div>
              <img src="../../assests/images/photo.jpg" alt={movie.title} />
              <h2>{movie.title}</h2>
              <p>{movie.description}</p>
              <p>Release Date: {movie.releaseDate}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );

}

export default AllLatestMovies;

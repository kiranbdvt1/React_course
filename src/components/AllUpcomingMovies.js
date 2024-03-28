import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Tab, Nav } from 'react-bootstrap';
import axios from 'axios';

const AllUpcomingMovies = () => {
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      try {
        const response = await axios.get('http://localhost:3001/allUpcomingMovies');
        setUpcomingMovies(response.data.results); // Assuming the response data has a "results" array containing movie data
      } catch (error) {
        console.error('Error fetching upcoming movies:', error);
      }
    };

    fetchUpcomingMovies();

    // Clean up function if needed
    return () => {
      // Any cleanup code if necessary
    };
  }, []); // Empty dependency array ensures this effect runs only once after initial render

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
        <h2>Upcoming Movies</h2>
        
{upcomingMovies && upcomingMovies.length > 0 ? (
  <ul>
    {upcomingMovies.map(movie => (
      <li key={movie.id}>
        <div>
          <h2>{movie.title}</h2>
          <p>Release Date: {movie.releaseDate}</p>
        </div>
      </li>
    ))}
  </ul>
) : (
  <p>No upcoming movies found.</p>
)}

  </div>
    );
};

export default AllUpcomingMovies;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Tab, Nav } from 'react-bootstrap';

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await axios.get('http://localhost:3001/events');
        setEvents(response.data); 
        setLoading(false);
      } catch (error) {
        console.error('Error fetching events:', error);
        setLoading(false);
      }
    };

    fetchEvents();

    return () => {
    };
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
      <h2>Events</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {events.map(event => (
            <li key={event.id}>
              <h3>{event.title}</h3>
              <p>{event.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Events;

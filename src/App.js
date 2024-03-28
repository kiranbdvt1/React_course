// App.js
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

import AllLatestMovies from './components/AllLatestMovies';
import LatestMovieDetails from './components/LatestMovieDetails';
import TicketBookingPage from './components/TicketBookingPage';
import AllUpcomingMovies from './components/AllUpcomingMovies';
import Event from './components/Event';

function App() {
  return (
    <Router>
      <div className="card text-center">
        <div className="card-header">
        <h1>E-Cube booking online tickets</h1>
        <div className='App-right-align'>
        <button className="btn btn-primary position-relative">
          Search
        </button>
      </div>
        </div>
      </div>
      <div className='App-body'>
        <Routes>
          <Route exact path="/" element={<AllLatestMovies />} /> 
          <Route exact path="/allLatestMovies" element={<AllLatestMovies />} /> 
          <Route exact path="/latest-movie/:id" element={<LatestMovieDetails />} />
          <Route exact path="/ticket-booking" element={<TicketBookingPage />} />
          <Route exact path="/upcoming-movies" element={<AllUpcomingMovies />} />
          <Route exact path="/event" element={<Event />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;

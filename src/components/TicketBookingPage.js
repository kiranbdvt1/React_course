import React, { useState } from 'react';
import axios from 'axios';

const TicketBookingPage = () => {
  const [bookingDetails, setBookingDetails] = useState({
    movieName: '',
    date: '',
    time: '',
  });
  const [loading, setLoading] = useState(false);
  const [confirmation, setConfirmation] = useState(null);
  const [error, setError] = useState(null);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setBookingDetails(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleBookTicket = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:3001/bookings', bookingDetails);
      setConfirmation(response.data);
    } catch (error) {
      setError('Error booking ticket. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2>Ticket Booking Page</h2>
      <form>
        <label>
          Movie Name:
          <input type="text" name="movieName" value={bookingDetails.movieName} onChange={handleInputChange} />
        </label>
        <label>
          Date:
          <input type="date" name="date" value={bookingDetails.date} onChange={handleInputChange} />
        </label>
        <label>
          Time:
          <input type="time" name="time" value={bookingDetails.time} onChange={handleInputChange} />
        </label>
        <button type="button" onClick={handleBookTicket} disabled={loading}>
          Book Ticket
        </button>
      </form>
      {loading && <p>Booking in progress...</p>}
      {error && <p>{error}</p>}
      {confirmation && (
        <div>
          <h3>Confirmation</h3>
          <p>Ticket booked successfully!</p>
        </div>
      )}
    </div>
  );
};

export default TicketBookingPage;

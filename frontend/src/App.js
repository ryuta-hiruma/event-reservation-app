import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserForm from './components/UserForm';
import EventForm from './components/EventForm';
import EventList from './components/EventList';
import ReservationForm from './components/ReservationForm';
import ReservationList from './components/ReservationList';

function App() {
  const [users, setUsers]             = useState([]);
  const [events, setEvents] = useState([]);
  const [reservations, setReservations] = useState([]);

  const fetchUsers = async () => {
    const res = await axios.get('/users');
    setUsers(res.data);
  };
  const fetchEvents = async () => {
    const res = await axios.get('/events');
    setEvents(res.data);
  };
  const fetchReservations = async () => {
    const res = await axios.get('/reservations');
    setReservations(res.data);
  };

  useEffect(() => {
    fetchUsers();
    fetchEvents();
    fetchReservations();
  }, []);

  const containerStyle = {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '16px'
  };

  return (
    <div style={{ padding: '32px 0', backgroundColor: '#f9f9f9' }}>
      <div style={containerStyle}>
        <UserForm onUserAdded={fetchUsers} />
      </div>
      <div style={containerStyle}>
        <EventForm onEventAdded={fetchEvents} />
      </div>
      <div style={containerStyle}>
        <EventList events={events} />
      </div>
      <div style={containerStyle}>
        <ReservationForm  users={users} events={events}  onReservationAdded={fetchReservations} />
      </div>
      <div style={containerStyle}>
        <ReservationList reservations={reservations} />
      </div>
    </div>
  );
}

export default App;
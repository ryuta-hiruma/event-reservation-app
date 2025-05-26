import React, { useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';

const ReservationForm = ({ users = [], events = [], onReservationAdded }) => {
  const [userId, setUserId]     = useState('');
  const [eventId, setEventId]   = useState('');
  const [message, setMessage]   = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/reservations', {
        userId: Number(userId),
        eventId: Number(eventId)
      });
      setMessage('✅ 予約を登録しました！');
      setUserId('');
      setEventId('');
      onReservationAdded && onReservationAdded();
    } catch (err) {
      console.error(err);
      setMessage('⚠️ 予約登録に失敗しました…');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{
      backgroundColor: '#fff',
      padding: '24px',
      borderRadius: '8px',
      boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
      maxWidth: '500px',
      margin: '32px auto',
      border: '1px solid #ddd',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{
        color: '#900',
        borderBottom: '2px solid #ccc',
        paddingBottom: '8px',
        marginBottom: '16px'
      }}>
        📝 予約登録
      </h2>

      {/* ユーザー選択 */}
      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', marginBottom: '6px', color: '#333' }}>
          ユーザー：
        </label>
        <select
          value={userId}
          onChange={e => setUserId(e.target.value)}
          required
          style={{
            width: '100%', padding: '8px', borderRadius: '4px',
            border: '1px solid #ccc', fontSize: '14px'
          }}
        >
          <option value="" disabled>ユーザーを選択してください</option>
          {users.map(user => (
            <option key={user.id} value={user.id}>
              {user.name} ({user.email})
            </option>
          ))}
        </select>
      </div>

      {/* イベント選択 */}
      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', marginBottom: '6px', color: '#333' }}>
          イベント：
        </label>
        <select
          value={eventId}
          onChange={e => setEventId(e.target.value)}
          required
          style={{
            width: '100%', padding: '8px', borderRadius: '4px',
            border: '1px solid #ccc', fontSize: '14px'
          }}
        >
          <option value="" disabled>イベントを選択してください</option>
          {events.map(ev => (
            <option key={ev.id} value={ev.id}>
              {ev.title} ({dayjs(ev.date).format('YYYY/MM/DD HH:mm')})
            </option>
          ))}
        </select>
      </div>

      <button type="submit" style={{
        backgroundColor: '#900', color: 'white',
        padding: '10px 20px', border: 'none',
        borderRadius: '4px', cursor: 'pointer',
        fontWeight: 'bold'
      }}>
        予約する
      </button>

      {message && (
        <p style={{
          marginTop: '16px',
          color: message.includes('失敗') ? 'red' : 'green'
        }}>
          {message}
        </p>
      )}
    </form>
  );
};

export default ReservationForm;
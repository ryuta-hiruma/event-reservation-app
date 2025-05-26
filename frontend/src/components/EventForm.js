import React, { useState } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';

const EventForm = ({ onEventAdded }) => {
  const [title, setTitle]     = useState('');
  const [date, setDate]       = useState('');  // datetime-local用
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const isoDate = dayjs(date).toISOString();
      await axios.post('/events', { title, date: isoDate });
      setMessage('イベントを登録しました！');
      setTitle('');
      setDate('');

      if (onEventAdded) {
        onEventAdded();  // 一覧を更新してもらう
      }
    } catch (err) {
      console.error(err);
      setMessage('登録に失敗しました…');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: '#fff',
        padding: '24px',
        borderRadius: '8px',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.08)',
        fontFamily: 'Arial, sans-serif',
        maxWidth: '500px',
        margin: '32px auto',
        border: '1px solid #ddd',
      }}
    >
      <h2 style={{
        color: '#900',
        marginBottom: '20px',
        borderBottom: '2px solid #ccc',
        paddingBottom: '8px'
      }}>
        ✍ イベント登録
      </h2>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', marginBottom: '6px', color: '#333' }}>
          タイトル：
        </label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: '14px',
          }}
        />
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', marginBottom: '6px', color: '#333' }}>
          日時：
        </label>
        <input
          type="datetime-local"
          value={date}
          onChange={e => setDate(e.target.value)}
          required
          style={{
            width: '100%',
            padding: '8px',
            borderRadius: '4px',
            border: '1px solid #ccc',
            fontSize: '14px',
          }}
        />
      </div>

      <button
        type="submit"
        style={{
          backgroundColor: '#900',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: 'bold',
        }}
      >
        登録する
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

export default EventForm;
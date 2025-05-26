import React from 'react';
import dayjs from 'dayjs';

const EventList = ({ events = [] }) => {
  return (
    <div>
      <h2 style={{ color: '#900', borderBottom: '2px solid #ccc', paddingBottom: '8px' }}>
        🎪 イベント一覧
      </h2>
      {events.length === 0 ? (
        <p>イベントがまだ登録されていません。</p>
      ) : (
        events.map(event => (
          <div key={event.id} style={{ /* カードスタイル */ }}>
            <h3 style={{ margin: 0, color: '#333' }}>{event.title}</h3>
            <p style={{ margin: '4px 0 0', color: '#555' }}>
              {dayjs(event.date).format('YYYY年MM月DD日 HH:mm')}
            </p>
          </div>
        ))
      )}
    </div>
  );
};

export default EventList;
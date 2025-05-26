import React from 'react';
import dayjs from 'dayjs';

const ReservationList = ({ reservations = [] }) => {
  return (
    <div>
      <h2 style={{ color: '#900', borderBottom: '2px solid #ccc', paddingBottom: '8px' }}>
        📋 予約一覧
      </h2>
      {reservations.length === 0 ? (
        <p>予約がまだ登録されていません。</p>
      ) : (
        reservations.map((res) => (
          <div key={res.id} style={{
            border: '1px solid #ccc',
            borderRadius: '6px',
            padding: '12px',
            marginBottom: '12px',
            backgroundColor: '#fff'
          }}>
            <p><strong>ユーザー：</strong>{res.user?.name} ({res.user?.email})</p>
            <p><strong>イベント：</strong>{res.event?.title}（{dayjs(res.event?.date).format('YYYY/MM/DD HH:mm')}）</p>
          </div>
        ))
      )}
    </div>
  );
};

export default ReservationList;
import React, { useState } from 'react';
import axios from 'axios';

const UserForm = ({ onUserAdded }) => {
  const [name, setName]   = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/users', { name, email });
      setMessage('✅ ユーザーを登録しました！');
      setName(''); setEmail('');
      onUserAdded && onUserAdded();
    } catch (err) {
      console.error(err);
      setMessage('⚠️ ユーザー登録に失敗しました…');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{
      backgroundColor: '#fff', padding: '24px',
      borderRadius: '8px', boxShadow: '0 2px 6px rgba(0,0,0,0.08)',
      maxWidth: '500px', margin: '32px auto', border: '1px solid #ddd',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h2 style={{
        color: '#900', borderBottom: '2px solid #ccc',
        paddingBottom: '8px', marginBottom: '16px'
      }}>
        👤 ユーザー登録
      </h2>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', marginBottom: '6px', color: '#333' }}>
          名前：
        </label>
        <input
          type="text" value={name}
          onChange={e => setName(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', borderRadius: '4px',
                   border: '1px solid #ccc', fontSize: '14px' }}
        />
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', marginBottom: '6px', color: '#333' }}>
          メールアドレス：
        </label>
        <input
          type="email" value={email}
          onChange={e => setEmail(e.target.value)}
          required
          style={{ width: '100%', padding: '8px', borderRadius: '4px',
                   border: '1px solid #ccc', fontSize: '14px' }}
        />
      </div>

      <button type="submit" style={{
        backgroundColor: '#900', color: 'white',
        padding: '10px 20px', border: 'none',
        borderRadius: '4px', cursor: 'pointer',
        fontWeight: 'bold'
      }}>
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

export default UserForm;
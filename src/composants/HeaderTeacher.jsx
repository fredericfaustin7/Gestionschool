import React from 'react';
import { useNavigate } from 'react-router-dom';
import BigCalendar from './BigCalendar.jsx';

export default function HeaderTeacher() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // (Optionnel) Tu peux ici vider le localStorage si tu l'utilises
    // localStorage.clear();
    navigate('/');
  };

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Bienvenue dans l’espace enseignant</h1>
      <p>Voici votre emploi du temps :</p>

      <BigCalendar />

      <button
        style={{
          marginTop: '30px',
          padding: '10px 20px',
          fontWeight: 'bold',
          backgroundColor: '#dc3545',
          color: 'white',
          border: 'none',
          borderRadius: '6px',
          cursor: 'pointer',
        }}
        onClick={handleLogout}
      >
        Se déconnecter
      </button>
    </div>
  );
}

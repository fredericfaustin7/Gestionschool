import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BigCalendar from './BigCalendar.jsx';
import '../css/HeaderEleve.css';

export default function HeaderEleve() {
  const navigate = useNavigate();

  const [events] = useState(() => {
    const stored = localStorage.getItem('cours');
    return stored ? JSON.parse(stored) : [];
  });

  const [nextCourse, setNextCourse] = useState(null);

  useEffect(() => {
    const now = new Date();
    const upcoming = events
      .map(e => ({
        ...e,
        datetime: new Date(`${e.date}T${e.start}`)
      }))
      .filter(e => e.datetime > now)
      .sort((a, b) => a.datetime - b.datetime);

    if (upcoming.length > 0) setNextCourse(upcoming[0]);
  }, [events]);

  const handleLogout = () => {
    navigate('/');
  };

  const handleDownload = () => {
    window.print();
  };

  return (
    <div className="eleve-container">
      <h1>Bienvenue dans votre espace étudiant</h1>

      {nextCourse ? (
        <div className="next-course">
          📅 Prochain cours : <strong>{nextCourse.title}</strong> — {nextCourse.date} à {nextCourse.start}
        </div>
      ) : (
        <p>Aucun cours à venir</p>
      )}

      <BigCalendar events={events} />

      <div className="eleve-buttons">
        <button onClick={handleDownload} className="eleve-button">
          Télécharger mon planning
        </button>
        <button onClick={handleLogout} className="eleve-button logout">
          Se déconnecter
        </button>
      </div>
    </div>
  );
}



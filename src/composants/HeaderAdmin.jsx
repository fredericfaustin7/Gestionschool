import React, { useState, useEffect } from 'react';

export default function HeaderAdmin() {
  // Champs du formulaire
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [lieu, setLieu] = useState('');
  const [name,setName]= useState ('');

  // Demandeur et fonction
  const [nomDemandeur] = useState('Makosso');
  const [fonction] = useState(() => localStorage.getItem('role') || '');

  const [creneaux, setCreneaux] = useState([]);

  // 🗂 Charger les créneaux enregistrés depuis localStorage au lancement
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('cours')) || [];
    setCreneaux(saved);
  }, []);

  // ➕ Ajouter un nouveau créneau
  const handleAdd = (e) => {
    e.preventDefault();

    if (start >= end) {
      alert("L'heure de fin doit être après l'heure de début.");
      return;
    }

    const newCreneau = {
      title,
      date,
      start,
      end,
      lieu,
      nomDemandeur,
      fonction,
    };

    const updated = [...creneaux, newCreneau].sort(
      (a, b) => new Date(`${a.date}T${a.start}`) - new Date(`${b.date}T${b.start}`)
    );

    setCreneaux(updated);
    localStorage.setItem('cours', JSON.stringify(updated));

    // 🔁 Réinitialiser les champs du formulaire
    setTitle('');
    setDate('');
    setStart('');
    setEnd('');
    setLieu('');
    setName('');
  };

  // 🗑️ Supprimer un créneau
  const handleDelete = (index) => {
    const updated = creneaux.filter((_, i) => i !== index);
    setCreneaux(updated);
    localStorage.setItem('cours', JSON.stringify(updated));
  };

  // 📅 Générer automatiquement les cours du mois de juin
  const handleGenererCoursJuin = () => {
    const joursCours = [
      { date: '2025-06-02', title: 'Maths' },
      { date: '2025-06-04', title: 'Anglais' },
      { date: '2025-06-06', title: 'Physique' },
      { date: '2025-06-09', title: 'Maths' },
      { date: '2025-06-11', title: 'Anglais' },
      { date: '2025-06-13', title: 'Physique' },
      { date: '2025-06-16', title: 'Maths' },
      { date: '2025-06-18', title: 'Anglais' },
      { date: '2025-06-20', title: 'Physique' },
      { date: '2025-06-23', title: 'Maths' },
      { date: '2025-06-25', title: 'Anglais' },
      { date: '2025-06-27', title: 'Physique' },
      { date: '2025-06-30', title: 'Libre' }
    ];

    const nouveaux = joursCours.map((jour) => ({
      title: jour.title,
      date: jour.date,
      start: "09:00",
      end: "12:00",
      lieu: "B103",
      nomDemandeur,
      fonction
    }));

    const updated = [...creneaux, ...nouveaux].sort(
      (a, b) => new Date(`${a.date}T${a.start}`) - new Date(`${b.date}T${b.start}`)
    );

    setCreneaux(updated);
    localStorage.setItem('cours', JSON.stringify(updated));
  };

  return (
    <div className="admin-container">
      <h2>Ajouter un créneau</h2>

      <form onSubmit={handleAdd}>
        <input type="text" placeholder="Titre" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <input type="time" value={start} onChange={(e) => setStart(e.target.value)} required />
        <input type="time" value={end} onChange={(e) => setEnd(e.target.value)} required />
        <input type="text" placeholder="Salle" value={lieu} onChange={(e) => setLieu(e.target.value)} required />
        <button type="submit">Ajouter</button>
        <button type="button" onClick={handleGenererCoursJuin} style={{ marginLeft: '10px' }}>
          📅 Générer les cours de juin
        </button>
      </form>

      <h3>Liste des créneaux programmés</h3>
      <ul>
        {creneaux.map((cr, index) => (
          <li key={index}>
            <strong>{cr.title}</strong> — {cr.date} ({cr.start} - {cr.end})<br />
            📍 {cr.lieu}<br />
            👤 {cr.nomDemandeur} ({cr.fonction})<br />
            <button onClick={() => handleDelete(index)}>❌ Supprimer</button>
          </li>
        ))}
      </ul>
    </div>
  );
}







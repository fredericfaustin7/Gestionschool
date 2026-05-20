import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Import correct
import '../css/HeaderStudent.css';

export default function HeaderStudent() {
  const [role, setRole] = useState('etudiant');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // 🔁 Redirection en fonction du rôle sélectionné
    if (role === 'etudiant') {
      navigate('/etudiant');
    } else if (role === 'prof') {
      navigate('/prof');
    } else if (role === 'admin') {
      navigate('/admin');
    }
  };

  return (
    <form className="login-box" onSubmit={handleSubmit}>
      <div className="login-header">
        <h1>Connexion</h1>
      </div>

      <div className="input-box">
        <input
          type="text"
          className="input-field"
          placeholder="Email"
          autoComplete="off"
          required
        />
      </div>

      <div className="input-box">
        <input
          type="password"
          className="input-field"
          placeholder="Mot de passe"
          autoComplete="off"
          required
        />
      </div>

      <div className="input-box">
        <p>Choisissez votre rôle :</p>

        <label>
          <input
            type="radio"
            name="role"
            value="etudiant"
            checked={role === 'etudiant'}
            onChange={(e) => setRole(e.target.value)}
          />
          Étudiant
        </label><br />

        <label>
          <input
            type="radio"
            name="role"
            value="prof"
            checked={role === 'prof'}
            onChange={(e) => setRole(e.target.value)}
          />
          Enseignant
        </label><br />

        <label>
          <input
            type="radio"
            name="role"
            value="admin"
            checked={role === 'admin'}
            onChange={(e) => setRole(e.target.value)}
          />
          Administrateur
        </label>
      </div>

      <div className="input-submit">
        <button className="submit-btn" id="submit">Se connecter</button>
      </div>
    </form>
  );
}

  
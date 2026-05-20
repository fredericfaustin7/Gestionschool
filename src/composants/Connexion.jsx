import React, { useState } from 'react';                 // Import des hooks React
import { useNavigate } from 'react-router-dom';          // Permet de changer de page après connexion

export default function Connexion() {
  const navigate = useNavigate();                        // Initialisation de la navigation

  // États pour stocker l’email et le mot de passe tapés
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Données simulées représentant les comptes autorisés
  const comptes = [
    { email: 'etudiant@mail.com', password: 'Etudiant1!', role: 'etudiant' },
    { email: 'admin@mail.com',    password: 'Admin2024@', role: 'admin' },
    { email: 'prof@mail.com',     password: 'Prof',   role: 'prof' }
  ];

  // Fonction qui vérifie si le mot de passe est sécurisé
  const motDePasseValide = (pwd) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%&\-+]).{8,}$/;
    return regex.test(pwd);  // true si le mot de passe respecte toutes les règles
  };

  // Fonction appelée au clic sur "Se connecter"
 
  const handleConnexion = (e) => {
    e.preventDefault();
  
    // Recherche de l’utilisateur par email
    const utilisateur = comptes.find((u) => u.email === email);
  
    // Si l’utilisateur n’existe pas ou le mot de passe ne correspond pas
    if (!utilisateur || utilisateur.password !== password) {
      alert("Identifiants incorrects ❌");
      return;
    }
  
    // Vérification de la force du mot de passe saisi
    if (!motDePasseValide(password)) {
      alert(
        "Mot de passe invalide :\n" +
        "- Minimum 8 caractères\n" +
        "- Au moins une majuscule\n" +
        "- Au moins un chiffre\n" +
        "- Au moins un caractère spécial (!@#$%&*-+)"
      );
      return;
    }
  
    // Connexion réussie
    localStorage.setItem("email", email);
    localStorage.setItem("role", utilisateur.role);
    navigate(`/${utilisateur.role}`);
  };
  

  // Affichage du formulaire de connexion
  return (
    <div className="connexion-container">
      <h2>Connexion</h2>

      <form onSubmit={handleConnexion}>
        <input
          type="email"
          placeholder="Adresse e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Mise à jour de l’état email
          required
        />
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)} // Mise à jour de l’état mot de passe
          required
        />
        <button type="submit">Se connecter</button> {/* Lance handleConnexion */}
      </form>
    </div>
  );
}


  
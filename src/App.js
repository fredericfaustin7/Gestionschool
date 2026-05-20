import './App.css';
import HeaderStudent from './composants/HeaderStudent.jsx';
import HeaderAdmin from './composants/HeaderAdmin.jsx';
import HeaderTeacher from './composants/HeaderTeacher.jsx';
import BigCalendar from './composants/BigCalendar.jsx';
import HeaderEleve from './composants/HeaderEleve.jsx';
import Connexion from './composants/Connexion.jsx';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
     <Router basename="/Gestionschool">
      <Routes>
        <Route path="/" element={<HeaderStudent />} />
        <Route path="/etudiant" element={<HeaderEleve />} />
        <Route path="/prof" element={<HeaderTeacher />} />
        <Route path="/admin" element={<HeaderAdmin />} />
        <Route path="/" element={<Connexion />} />

      </Routes>

      {/* Le calendrier peut être affiché partout, ou intégré par rôle */}
      
    </Router>
  );
}

export default App;


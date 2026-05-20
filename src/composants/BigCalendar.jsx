import React, { useState } from 'react';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/fr'; // Pour que le calendrier soit en français
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../css/BigCalendar.css'; // (facultatif) tes styles personnalisés

// 🗓️ Configuration de moment.js pour la localisation française
moment.locale('fr');
const localizer = momentLocalizer(moment); // Rend le calendrier compatible avec moment

export default function BigCalendar({ events }) {
  // 🌐 Vue actuelle (par défaut : mois)
  const [view, setView] = useState(Views.MONTH);

  // 🎛️ Gérer le changement de vue (mois/semaine/jour)
  const handleOnChangeView = (selectedView) => {
    setView(selectedView);
  };

  // ✅ Conversion des événements en objets Date (requis par react-big-calendar)
  const cours = (events || []).map((e) => ({
    ...e,
    start: new Date(e.date + 'T' + e.start),
end: new Date(e.date + 'T' + e.end)
  }));

  return (
    <Calendar
      localizer={localizer}             // 🧭 Localisation moment.js
      events={cours}                    // 📅 Liste des événements à afficher
      startAccessor="start"             // 🕒 Clé pour la date de début
      endAccessor="end"                 // 🕓 Clé pour la date de fin
      views={['month', 'week', 'day']}  // 👀 Vues disponibles
      view={view}                       // Vue actuelle
      onView={handleOnChangeView}       // Permet de changer la vue depuis l’interface
      popup                             // Affiche une info-bulle dans la vue mensuelle
      style={{ height: '98%' }}         // Taille du calendrier
      min={new Date(2025, 0, 1, 8, 0)}  // Plage horaire visible : 08h00...
      max={new Date(2025, 0, 1, 17, 0)} // ...jusqu’à 17h00
    />
  );
}

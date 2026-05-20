import React from 'react';
import '../css/StudentCalendar.css'; 
import BigCalendar from '../BigCalendar.jsx'


export default function StudentCalendar() {
    return (
      <div className="p-4 flex gap-4 flex-col xl:flex-row">
       
        <div className="w-full xl:w-2/3">
          <div className="h-full bg-white p-4 rounded-md">
            <h1 className="text-xl font-semibold">Programme (4A)</h1>
            <BigCalendar/>
          </div>
        </div>
        
      </div>
    );
  };
  

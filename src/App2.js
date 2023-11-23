
import React from 'react';
import OrganizedTimetable from './OrganizedTimetable';
import './App2.css'; 

const App2 = () => {
  const timetableData = [
    ['9:00 AM - 10:00 AM', 'Math', 'BC', 'Break', 'PHY', 'CAO'],
    ['10:00 AM - 11:00 AM', 'DS', 'DEN', 'Break', 'Biology', 'Music'],
    ['11:00 AM - 12:00 PM', 'DS', 'PHY', 'Lunch', 'TOC', 'BC'],
    ['12:00 PM - 1:00 PM', 'DS', 'PHY', 'Lunch', 'CAO', 'BC'],
  ];
  return (
    <div className="app-container">
      <h1>Well-Organized Timetable</h1>
      <OrganizedTimetable timetableData={timetableData} />
    </div>
  );
};

export default App2;

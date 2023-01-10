import React, { useState, useEffect } from 'react';
import RosterTable from './RosterTable';
import useCSV from './FileReader';

function App() {
  
  const roster = useCSV("roster.csv");
  const times = useCSV("times.csv");

  console.log(roster);
  return (
    <div>
      <h1>Viswim</h1>
      <RosterTable athletes={roster} filters={{ AgeGroup: 'Men 15-18' }} />

    </div>
  );
}

export default App;
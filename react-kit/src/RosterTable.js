import React, { useState } from 'react';

function RosterTable(props) {
  const { athletes, filters } = props;
  const [highlighted, setHighlighted] = useState([]);

  // Filter the athletes based on the filters prop
  const filteredAthletes = athletes.filter(athlete => {
    for (const [key, value] of Object.entries(filters)) {
      if (athlete[key] !== value) {
        return false;
      }
    }
    return true;
  });

  function handleRowClick(idx) {
    setHighlighted(prevHighlighted => {
      if (prevHighlighted.includes(idx)) {
        return prevHighlighted.filter(i => i !== idx);
      }
      return [...prevHighlighted, idx];
    });
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Last Name</th>
          <th>First Name</th>
          <th>Age</th>
          <th>Age Group</th>
        </tr>
      </thead>
      <tbody>
        {filteredAthletes.map((athlete, idx) => (
          <tr
            key={athlete.AthleteRegistrationNumber}
            onClick={() => handleRowClick(idx)}
            className={ highlighted.includes(idx) ? 'sel' : '' }
          >
            <td>{athlete.AthleteLastName}</td>
            <td>{athlete.AthleteFirstName}</td>
            <td>{athlete.AthleteAge}</td>
            <td>{athlete.AgeGroup}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default RosterTable;
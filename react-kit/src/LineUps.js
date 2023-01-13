//import React, { useState, useEffect } from 'react';

function LineUps({ athletes, selectedAthletes, times }) {

// For automatically pulling out group names
//  const ageGroups = [...new Set(athletes.map((athlete) => athlete.AgeGroup))].sort();

  const ageGroups = ['8 & Under Boys', '8 & Under Girls', '9-10 Boys', '9-10 Girls', '11-12 Boys', '11-12 Girls', '13-14 Boys', '13-14 Girls', '15-18 Boys', '15-18 Girls'];

const tables =  ageGroups.map(ag => (
    <div className="col" key={ag}>
      <RosterTable groupName={ag} athletes={athletes} filters={{ ageGroup: ag }} selectedAthletes={selectedAthletes}/>
    </div>
  ));

  return (
    <div id="lineups" className="twoCols">
      {tables}
    </div>
  );
}

function RosterTable(props) {
  const { groupName, athletes, filters, selectedAthletes } = props;

  // Filter the athletes based on the filters prop
  const filteredAthletes = athletes.filter(athlete => {
    for (const [key, value] of Object.entries(filters)) {
      if (athlete[key] !== value) {
        return false;
      }
    }
    return true;
  });

  const n = filteredAthletes.length;

  return (
    <table className="lineup" >
      <thead>
        <tr>
          <th>{groupName} <span style={{fontWeight:"normal"}}> ({n})</span></th>
        </tr>
      </thead>
      <tbody>
        {filteredAthletes.map((athlete, idx) => (
          <tr
            key={athlete.ID}
            data-key={athlete.ID}
            className={selectedAthletes.includes(athlete.ID) ? 'sel' : ''}
          >
            <td>{athlete.displayName}, {athlete.firstName} {athlete.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default LineUps;
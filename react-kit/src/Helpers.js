import { findAllByTestId } from "@testing-library/react";

function filterAthletes(athletes, ids) {
    const set = new Set(ids);
    return athletes.filter(athlete => set.has(athlete.ID)).sort((a, b) => 
        a.lastName.localeCompare(b.lastName));;
}

function fltr(arr, filters) {
    return arr.filter(a => {
        for (const [key, value] of Object.entries(filters)) {
           if (a[key] !== value) return false;
        }
        return true;
    });
}

function diffAthletes(selectedAthletes, newAthletes) {
    for (let i = 0; i < newAthletes.length; i++) {
        if (!selectedAthletes.includes(newAthletes[i])) {
            return [...new Set(selectedAthletes.concat(newAthletes))];
        }
   }
    return [...new Set(selectedAthletes.filter(x => !newAthletes.includes(x)))];
}


function createSwimObjects(csvData) {
    const swimObjects = [];
    let numberOfMeets = 0;
    Object.keys(csvData[0]).forEach(property => {
        if (property.startsWith("Meet")) {
            const meetNumber = parseInt(property.replace("Meet", "").replace("-Name", ""));
            if (meetNumber > numberOfMeets) {
                numberOfMeets = meetNumber;
            }
        }
    });
    csvData.forEach(row => {
        for (let i = 1; i <= numberOfMeets; i++) {
            const meet = `Meet${i}-Name`;
            const result = `Meet${i}-Result`;
            const resultSec = `Meet${i}-ResultSec`;
            const date = `Meet${i}-Date`;
            if (row[resultSec] && row[meet] && row[result] && row[date]) {
                swimObjects.push({
                    time: row[resultSec],
                    athleteID: row.AthleteId,
                    athleteName: `${row.FirstName} ${row.LastName}`,
                    eventDistance: row.EventDistance,
                    eventStroke: row.EventStroke,
                    meet: row[meet],
                    date: row[date],
                });
            }
        }
    });
    return swimObjects;
}

export { filterAthletes, diffAthletes, createSwimObjects, fltr }
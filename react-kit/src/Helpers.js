
function filterAthletes(athletes, registrationNumbers) {
    const set = new Set(registrationNumbers);
    return athletes.filter(athlete => set.has(athlete.AthleteRegistrationNumber)).sort((a, b) => 
        a.AthleteLastName.localeCompare(b.AthleteLastName));;
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
    csvData.forEach(row => {
        for (let i = 1; i <= 15; i++) {
            const meet = `Meet${i}-Name`;
            const result = `Meet${i}-Result`;
            const resultSec = `Meet${i}-ResultSec`;
            const date = `Meet${i}-Date`;
            if (row[meet] && row[result] && row[resultSec] && row[date]) {
                swimObjects.push({
                    time: row[resultSec],
                    athleteID: row.AthleteId,
                    athleteName: `${row.FirstName} ${row.LastName}`,
                    meet: row[meet],
                    date: row[date],
                    eventDistance: row.EventDistance,
                    eventStroke: row.EventStroke
                });
            }
        }
    });
    return swimObjects;
}


export { filterAthletes, diffAthletes, createSwimObjects }
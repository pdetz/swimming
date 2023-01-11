
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

export { filterAthletes, diffAthletes }
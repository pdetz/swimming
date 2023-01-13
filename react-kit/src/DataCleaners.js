import { useState, useEffect } from 'react';

function useUpdateIds(times, roster) {
    const [updatedTimes, setUpdatedTimes] = useState(times);

    useEffect(() => {
        const newTimes = times.map(time => {
          let athlete = roster.find(a => isSameName(a.firstName, time.firstName) && isSameName(a.lastName, time.lastName));
          if(athlete) return {
            ID: athlete.ID,
            displayName: time.displayName,
            eventDistance: time.eventDistance,
            eventStroke: time.eventStroke,
            times: time.times
            };
          return time;
        });
        setUpdatedTimes(newTimes);
    }, [times, roster]);

    return [updatedTimes, setUpdatedTimes];
}


function fixAthleteData(csvData) {
    let athleteData = [];
    csvData.forEach(row => {
        athleteData.push({
            ageGroup: row.AgeGroup,
            lastName: row.AthleteLastName,
            firstName: row.AthleteFirstName,
            middle: row.AthleteMiddle,
            preferredName: row.AthletePreferredName,
            displayName: row.AthleteDisplayName,
            gender: row.AthleteGender,
            age: row.AthleteAge,
            birthdate: row.AthleteBirthdate,
            ID: row.AthleteRegistrationNumber,
            addressLine1: `${row.AddressLine1} ${row.AddressLine2}`,
            city: row.City,
            state: row.State,
            zipCode: row.ZipCode,
            homePhone: row.HomePhone,
            internalNotes: row.InternalNotes,
            parent1: `${row.Parent1_FirstName} ${row.Parent1_LastName}`,
            parent1Phone: row.Parent1_Phone,
            parent1Email: row.Parent1_Email,
            parent2: `${row.Parent2_FirstName} ${row.Parent2_LastName}`,
            parent2Phone: row.Parent2_Phone,
            parent2Email: row.Parent2_Email            
        });
    });
    return athleteData.sort((a, b) => (a.lastName === b.lastName) ? ((a.firstName > b.firstName) ? 1 : -1) : ((a.lastName > b.lastName) ? 1 : -1));
}

function fixTimeData(csvData) {
    let timeData = [];
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
        let times = [];
        for (let i = 1; i <= numberOfMeets; i++) {
            let t = row[`Meet${i}-ResultSec`]
            if (t !== "") {
                times.push({
                    time: t,
                    date: row[`Meet${i}-Date`],
                    meet: row[`Meet${i}-Name`]
                });
            }
        }
        if (times.length > 0){
            timeData.push({
                ID: row.AthleteId,
                lastName: row.LastName,
                firstName: row.FirstName,
                displayName: row.LastName_FirstName,
                eventDistance: row.EventDistance,
                eventStroke: row.EventStroke,
                times: times    
            });
        }
    });
    return timeData.sort((a, b) => (a.lastName === b.lastName) ? ((a.firstName > b.firstName) ? 1 : -1) : ((a.lastName > b.lastName) ? 1 : -1));
}

function isSameName(n1, n2) {
    return n1.toLowerCase() === n2.toLowerCase();
}

function cleanName(name) {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}


export { fixAthleteData, fixTimeData, useUpdateIds }
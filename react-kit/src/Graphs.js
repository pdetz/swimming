function Graphs({ selectedAthletes, times }) {

    console.log(times);

    return (
        <div className="graphs">
            {selectedAthletes.map(athlete => (
                <div key={athlete.AthleteRegistrationNumber}> {athlete.AthleteLastName}  </div> 
            ))}
        </div>
    );

}

export default Graphs;
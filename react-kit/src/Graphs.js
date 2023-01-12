function Graphs({ selectedAthletes, times }) {


    return (
        <div className="graphs">
            {selectedAthletes.map(athlete => (
                <div key={athlete.AthleteRegistrationNumber}> {athlete.AthleteLastName}  </div> 
            ))}
        </div>
    );

}

export default Graphs;
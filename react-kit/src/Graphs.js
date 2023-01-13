function Graphs({ selectedAthletes, times }) {


    return (
        <div className="graphs">
            {selectedAthletes.map(athlete => (
                <div key={athlete.ID}> {athlete.lastName}  </div> 
            ))}
        </div>
    );

}

export default Graphs;
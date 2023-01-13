import { fltr } from './Helpers'

function Graphs({ selectedAthletes, times }) {

    const strokes = ["Free", "Back", "Fly", "IM"];
    const timesList = selectedAthletes.map(athlete => ( 
        <div>
            {athlete.displayName}
            <TimeList times = {fltr(times, {ID: athlete.ID})}/>
        </div>
        )
    );

    return (
        <div className="graphs">
            {timesList}
        </div>
    );

}

function TimeList({times}){

    times.forEach(time => {
        console.log(time.times);
    });

    const timesList = times.map(time => ( 
        <div>
            {time.eventStroke} - 
                    {time.times.map(t => (
                        <span> {t.time} </span>    
                    ))}
        </div>
    ));

    console.log(timesList);

    return (
        <div>
            {timesList}
        </div>
    );
}


export default Graphs;
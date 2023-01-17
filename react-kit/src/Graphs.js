import { fltr } from './Helpers'
import { SwimChart, TestChart } from './Charts'

function Graphs({ selectedAthletes, times }) {

    const strokes = ["Free", "Back", "Breast", "Fly", "IM"];
    const timesList = selectedAthletes.map(athlete => ( 
        <div>
            {athlete.displayName}
            <div className="twoCols">
            {strokes.map(stroke => (
              <div>
                <SwimChart times = {fltr(times, {ID: athlete.ID, eventStroke: stroke})}
                    chartTitle =  {`${athlete.displayName} - ${stroke}`}/>
                <TimeList times = {fltr(times, {ID: athlete.ID, eventStroke: stroke})}/>
              </div>
            ))}
            </div>
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
    //console.log(times);
    return (
    <div className="col">
    {times.map((t, idx) => (
    <table key={idx} className="lineup">
        <thead>
          <tr>
            <th>{t.eventDistance} {t.eventStroke}</th>
            <th>Date</th>
            <th>Meet</th>
          </tr>
        </thead>
        <tbody>
            {t.times.map( (ti, idx) => (
                <tr
                /*key={athlete.ID}
                data-key={athlete.ID}
                className={selectedAthletes.includes(athlete.ID) ? 'sel' : ''}*/
              >
                  <td>{ti.time}</td>
                  <td>{ti.date.toDateString()}</td>
                  <td>{ti.meet}</td>
              </tr>
            ))}
        </tbody>
      </table>
    ))}
    </div>
    );
  }

export default Graphs;
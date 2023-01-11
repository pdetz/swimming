import React, { useState, useEffect } from 'react';
import { useClick } from './CustomHooks';
import LineUps from './LineUps';
import useCSV from './FileReader';
import Graphs from './Graphs';
import { filterAthletes, diffAthletes } from './Helpers'

function App() {
  
  const athletes = useCSV("roster.csv");
  const times = useCSV("times.csv");

  const [selectedAthletes, setSelectedAthletes] = useState([]);

  console.log("selected", selectedAthletes);

  function handleLineUpsClick(e) {
    console.log(e.target.tagName);
    let newAthletes = [];
    if(e.target.tagName === "TD"){
        let swimmerID = e.target.closest('tr').dataset.key;//.getAttribute("key");

        newAthletes.push(swimmerID);
        // code to handle adding or removing a swimmer from the selectedAthletes array based on the swimmerId
    }
    else if(e.target.tagName === "TH"){
      let swimmers = Array.from(e.target.closest("table").querySelectorAll("td"));
      swimmers.forEach(swimmer => {
        let swimmerID = swimmer.closest('tr').dataset.key;
        newAthletes.push(swimmerID);
      });
    }
    setSelectedAthletes(diffAthletes(selectedAthletes, newAthletes));
    console.log(selectedAthletes);
  }

  useClick("#lineups", handleLineUpsClick);


  return (
  <div className="parent">  
      <div className="left column">
        <div className="displayArea">

            <div id="leftbar" className="topbar">
            </div>
          
            <div id="left" className="frame">   
              <LineUps athletes={athletes} selectedAthletes={selectedAthletes} times={times}/>
            </div>
        </div>
      </div>
    <div className="column">
        <div className="displayArea">
            
            <div id="rightbar" className="topbar">
            </div>
            
            <div id="right" className="frame">
              <Graphs selectedAthletes={filterAthletes(athletes, selectedAthletes)}/>
            </div>
            <div id = "copyright">© 2023 Patrick Detzner</div>
        </div>
    </div>
  </div>);
}

export default App;
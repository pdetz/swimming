import { fltr } from './Helpers'
import { format } from 'date-fns'
import { Chart as ChartJS, 
    LineController, 
    LineElement, 
    PointElement, 
    Legend, 
    Title,
    CategoryScale, 
    TimeScale, 
    LinearScale } from "chart.js";
import 'chartjs-adapter-date-fns';
import { Line } from "react-chartjs-2";

ChartJS.register(LineController, LineElement, PointElement, Legend, Title, CategoryScale, TimeScale, LinearScale);

function SwimChart( { times, chartTitle } ){

    let swims = [];
    let meetTicks = [];
    let meetLabels = [];

    times.forEach(timeRow => {
        if (typeof timeRow !== 'undefined') {
            meetLabels = timeRow.times.map(t => (t.meet));
            meetTicks = timeRow.times.map(t => ({value: t.date, label: t.meet}));
            swims = timeRow.times.map(t => ({x: t.date, y: t.time}));
        }
    });

    return (
        <Line
        data = {{
            datasets: [{
              data: swims,
            }],
          }}
        options = {{
                    plugins: {
                        legend: {
                            display: true,
                            labels: {
                                color: 'rgb(255, 99, 132)'
                            }
                        },
                        title: {
                            display: true,
                            text: chartTitle,
                            callback: function(title) {
                                return "fuck this button";
                        }            
            }},
            scales: {
                y: {
                },
                x: {
                    type: 'time',
                    min: '2022-06-11 00:00:00',
                    max: '2022-07-23 00:00:00',
                    ticks: {
       
                    },
                    afterBuildTicks: function(scale){
                        scale.ticks = meetTicks;
                        return;
                    }
                }
            }
        }}
        />
    );
}

function TestChart(){
    return(
        <Line
            data = {{
                datasets: [{
                    label: 'First dataset',
                    data: [0, 20, 40, 50]
                }],
                labels: ['January', 'February', 'March', 'April']
            }}
        />
    );
}
export { SwimChart, TestChart }
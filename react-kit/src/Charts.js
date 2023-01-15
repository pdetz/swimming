import { fltr } from './Helpers'
import { Chart as ChartJS, LineController, LineElement, PointElement, Legend, CategoryScale, LinearScale } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineController, LineElement, PointElement, Legend, CategoryScale, LinearScale);

function SwimChart( { times } ){

    let meetLabels = [];
    let timeData = [];

    times.forEach(timeRow => {
        if (typeof timeRow !== 'undefined') {
            console.log(timeRow.eventStroke);
            meetLabels = timeRow.times.map(t => t.meet);
            timeData = timeRow.times.map(t => t.time);
        }
        console.log(meetLabels, timeData);
    });

    return (
        <Line
        datasetIdKey='id'
        data={{
            labels: meetLabels,
            datasets: [
            {
                id: 1,
                label: '',
                data: timeData,
            },
            ],
        }}
        />
    );
}
export { SwimChart }
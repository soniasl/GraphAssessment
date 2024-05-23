import Graph from "./Graph/Graph";

const graphData = [
    { Day: "Monday", TheMostActiveHours: "16:30" },
    { Day: "Tuesday", TheMostActiveHours: "12:15" },
    { Day: "Wednesday", TheMostActiveHours: "14:45" },
    { Day: "Thursday", TheMostActiveHours: "11:10" },
    { Day: "Friday", TheMostActiveHours: "10:00" },
    { Day: "Saturday", TheMostActiveHours: "17:00" },
    { Day: "Sunday", TheMostActiveHours: "14:00" },
];

export default function Home() {
    return (
        <div>
            <Graph data={graphData} />
        </div>
    );
}

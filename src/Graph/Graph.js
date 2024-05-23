import {
    Area,
    CartesianGrid,
    AreaChart,
    XAxis,
    YAxis,
    Tooltip,
} from "recharts";

export default function Graph({ data }) {
    const chartData = data.map((obj) => {
        const [hour, minutes] = obj.TheMostActiveHours.split(":").map((str) =>
            Number(str)
        );

        return {
            Day: obj.Day,
            TheMostActiveHours: obj.TheMostActiveHours,
            Time: hour * 60 + minutes,
        };
    });

    return (
        <AreaChart height={400} width={800} data={chartData}>
            <defs>
                <linearGradient id="hour" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#33FF8A" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#33FF8A" stopOpacity={0} />
                </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Day" />
            <YAxis dataKey="Time" />
            <Tooltip />
            <Area type="monotone" dataKey="Time" fill="url(#hour)" />
        </AreaChart>
    );
}

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
                <linearGradient id="stroke" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="50%" stopColor="#F0FF33" stopOpacity={1} />
                    <stop offset="100%" stopColor="#33FF8A" stopOpacity={1} />
                </linearGradient>
                <linearGradient id="area" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="10%" stopColor="#33FF8A" stopOpacity={0.5} />
                    <stop offset="95%" stopColor="#33FF8A" stopOpacity={0} />
                </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="Day" />
            <YAxis dataKey="Time" type="number" />
            <Tooltip />
            <Area
                type="monotone"
                dataKey="Time"
                stroke="url(#stroke)"
                strokeWidth={8}
                fill="url(#area)"
            />
        </AreaChart>
    );
}

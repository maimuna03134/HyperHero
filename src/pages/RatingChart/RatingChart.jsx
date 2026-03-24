import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";
import Container from "../../components/Container/Container";

const RatingChart = ({ ratings }) => {
    if (!ratings || ratings.length === 0) return null;

    const sortRatings = [...ratings].sort((a, b) => parseInt(b.name) - parseInt(a.name));

    return (
        <Container>
            <div className="w-full ">
                <h2 className="text-lg font-semibold text-gray-800  ml-10">
                    Ratings
                </h2>

                <ResponsiveContainer width="100%" height={250}>
                    <BarChart
                        data={sortRatings}
                        layout="vertical"
                        margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
                    // barGap={12}
                    >
                        <XAxis type="number" tick={{ fill: "#627382" }} />
                        <YAxis
                            type="category"
                            dataKey="name"
                            width={70}
                            tick={{ fill: "#627382", fontSize: 13 }}
                            axisLine={false}
                            tickLine={false}
                        />
                        <Tooltip cursor={{ fill: "#f9f9f9" }} />
                        <Bar dataKey="count" fill="#ff8c1a" barSize={15} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Container>
    );
};

export default RatingChart;

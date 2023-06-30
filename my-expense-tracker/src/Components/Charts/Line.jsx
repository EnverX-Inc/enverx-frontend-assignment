import {
  LineChart,
  Line as ReLine,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { array } from "prop-types";
import * as dayjs from "dayjs";
// const data = [
//   {
//     name: "Page A",
//     uv: 4000,
//     pv: 2400,
//     amt: 2400,
//   },
//   {
//     name: "Page B",
//     uv: 3000,
//     pv: 1398,
//     amt: 2210,
//   },
//   {
//     name: "Page C",
//     uv: 2000,
//     pv: 9800,
//     amt: 2290,
//   },
//   {
//     name: "Page D",
//     uv: 2780,
//     pv: 3908,
//     amt: 2000,
//   },
//   {
//     name: "Page E",
//     uv: 1890,
//     pv: 4800,
//     amt: 2181,
//   },
//   {
//     name: "Page F",
//     uv: 2390,
//     pv: 3800,
//     amt: 2500,
//   },
//   {
//     name: "Page G",
//     uv: 3490,
//     pv: 4300,
//     amt: 2100,
//   },
// ];

const renderColorfulLegendText = (value, entry) => {
  const { color } = entry;

  return <span style={{ color }}>{value}</span>;
};

const Line = ({ list }) => {
  const groupedData = list.reduce((result, item) => {
    const date = dayjs(item.date).format("DD MMMM"); // Extract the date as a string

    // Check if the date already exists in the result
    if (!result[date]) {
      result[date] = {
        name: date,
        expense: 0,
        income: 0,
      };
    }

    // Update the expense or income based on the item's type
    if (item.type === "expense") {
      result[date].expense += item.amount;
    } else if (item.type === "income") {
      result[date].income += item.amount;
    }

    return result;
  }, {});

  // Convert the groupedData object to an array of values
  const result = Object.values(groupedData);

  return (
    <LineChart
      width={500}
      height={300}
      data={result}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend formatter={renderColorfulLegendText} />
      <ReLine
        type="monotone"
        dataKey="expense"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <ReLine type="monotone" dataKey="income" stroke="#82ca9d" />
    </LineChart>
  );
};

Line.propTypes = {
  list: array.isRequired,
};

export default Line;

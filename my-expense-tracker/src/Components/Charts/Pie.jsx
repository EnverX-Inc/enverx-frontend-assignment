import { Cell, Legend, PieChart, Pie as RePie } from "recharts";
import { array } from "prop-types";
const Pie = ({ list }) => {
  const data = [
    {
      id: 1,
      name: "Rent",
      value: list.reduce(
        (acc, item) => (item.category === "rent" ? acc + item.amount : acc),
        0
      ),
      color: "#E7B10A",
    },
    {
      id: 2,
      name: "Groceries",
      value: list.reduce(
        (acc, item) =>
          item.category === "groceries" ? acc + item.amount : acc,
        0
      ),
      color: "#898121",
    },
  ];
  return (
    <>
      <p style={{ fontSize: 8, textAlign: "center" }}>
        note: if you don&apos;t see graph, it means you have no expense.
      </p>
      <PieChart
        width={500}
        height={250}
        defaultShowTooltip
        title="Expense by category"
        style={{
          margin: 10,
        }}
      >
        <RePie data={data} dataKey="value" nameKey="name" label>
          {data.map((entry) => (
            <Cell key={entry.id} fill={entry.color} />
          ))}
        </RePie>
        <Legend verticalAlign="bottom" height={36} />
      </PieChart>
    </>
  );
};

Pie.propTypes = {
  list: array.isRequired,
};
export default Pie;

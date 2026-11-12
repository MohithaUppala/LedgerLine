import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#22C55E", "#EF4444"];

function PieChartComponent({ transactions }) {
  const data = [
    {
      name: "Income",
      value: transactions
        .filter((t) => t.type === "Income")
        .reduce((sum, t) => sum + t.amount, 0),
    },
    {
      name: "Expense",
      value: transactions
        .filter((t) => t.type === "Expense")
        .reduce((sum, t) => sum + t.amount, 0),
    },
  ];

  return (
    <div className="card">
      <h3>Expense Distribution</h3>

      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            outerRadius={100}
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={index}
                fill={COLORS[index]}
              />
            ))}
          </Pie>

          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default PieChartComponent;
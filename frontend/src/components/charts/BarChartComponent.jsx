import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

function BarChartComponent({ transactions }) {
  const data = [
    {
      name: "Income",
      amount: transactions
        .filter((t) => t.type === "Income")
        .reduce((sum, t) => sum + t.amount, 0),
    },
    {
      name: "Expense",
      amount: transactions
        .filter((t) => t.type === "Expense")
        .reduce((sum, t) => sum + t.amount, 0),
    },
  ];

  return (
    <div className="card">
      <h3>Income vs Expense</h3>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="amount" fill="#4F46E5" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default BarChartComponent;
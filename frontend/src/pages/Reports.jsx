import Navbar from "../components/Navbar";
import ReportCard from "../components/ReportCard";
import ReportFilter from "../components/ReportFilter";
import ReportTable from "../components/ReportTable";

function Reports({ transactions }) {
  const totalIncome = transactions
    .filter((t) => t.type === "Income")
    .reduce((sum, t) => sum + t.amount, 0);

  const totalExpense = transactions
    .filter((t) => t.type === "Expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = totalIncome - totalExpense;

  return (
    <>
      <Navbar />

      <div style={{ padding: "30px" }}>
        <h1>Reports</h1>

        <div
          style={{
            display: "flex",
            gap: "20px",
            marginBottom: "20px",
            flexWrap: "wrap",
          }}
        >
          <ReportCard
            title="Total Income"
            amount={totalIncome}
            color="green"
          />

          <ReportCard
            title="Total Expense"
            amount={totalExpense}
            color="red"
          />

          <ReportCard
            title="Net Balance"
            amount={balance}
            color="blue"
          />
        </div>

        <ReportFilter />

        <ReportTable transactions={transactions} />
      </div>
    </>
  );
}

export default Reports;
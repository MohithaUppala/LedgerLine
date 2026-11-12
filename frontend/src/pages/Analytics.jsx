import Navbar from "../components/Navbar";
import BarChartComponent from "../components/charts/BarChartComponent";
import PieChartComponent from "../components/charts/PieChartComponent";
import LineChartComponent from "../components/charts/LineChartComponent";

function Analytics({ transactions }) {
  return (
    <>
      <Navbar />

      <div style={{ padding: "30px" }}>
        <h1 style={{ marginBottom: "30px" }}>Analytics Dashboard</h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(450px, 1fr))",
            gap: "20px",
          }}
        >
          <BarChartComponent transactions={transactions} />

          <PieChartComponent transactions={transactions} />

          <LineChartComponent transactions={transactions} />
        </div>
      </div>
    </>
  );
}

export default Analytics;
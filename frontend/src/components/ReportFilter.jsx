function ReportFilter() {
  return (
    <div className="card" style={{ marginBottom: "20px" }}>
      <h3>Filter Reports</h3>

      <div
        style={{
          display: "flex",
          gap: "15px",
          flexWrap: "wrap",
          marginTop: "15px",
        }}
      >
        <input type="date" />

        <input type="date" />

        <select>
          <option>All</option>
          <option>Income</option>
          <option>Expense</option>
        </select>

        <button>Filter</button>
      </div>
    </div>
  );
}

export default ReportFilter;
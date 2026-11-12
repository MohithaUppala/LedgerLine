function ReportCard({ title, amount, color }) {
  return (
    <div
      className="card"
      style={{
        borderTop: `5px solid ${color}`,
      }}
    >
      <h3>{title}</h3>
      <h2>₹{amount}</h2>
    </div>
  );
}

export default ReportCard;
function IncomeCard({ transactions }) {
  const income = transactions
    .filter((t) => t.type === "Income")
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="card income">
      <h3>Total Income</h3>
      <h1>₹{income}</h1>
    </div>
  );
}

export default IncomeCard;
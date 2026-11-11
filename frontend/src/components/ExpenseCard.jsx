function ExpenseCard({ transactions }) {
  const expense = transactions
    .filter((t) => t.type === "Expense")
    .reduce((sum, t) => sum + t.amount, 0);

  return (
    <div className="card expense">
      <h3>Total Expense</h3>
      <h1>₹{expense}</h1>
    </div>
  );
}

export default ExpenseCard;
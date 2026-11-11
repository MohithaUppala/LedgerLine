function BalanceCard({ transactions }) {
  const income = transactions
    .filter((t) => t.type === "Income")
    .reduce((sum, t) => sum + t.amount, 0);

  const expense = transactions
    .filter((t) => t.type === "Expense")
    .reduce((sum, t) => sum + t.amount, 0);

  const balance = income - expense;

  return (
    <div className="card balance">
      <h3>Current Balance</h3>
      <h1>₹{balance}</h1>
    </div>
  );
}

export default BalanceCard;
function TransactionList({ transactions, setTransactions }) {
  const deleteTransaction = (id) => {
    setTransactions(
      transactions.filter((transaction) => transaction.id !== id)
    );
  };

  return (
    <div className="card transaction-list">
      <h3>Recent Transactions</h3>

      {transactions.length === 0 ? (
        <p>No Transactions Found</p>
      ) : (
        transactions.map((transaction) => (
          <div key={transaction.id} className="transaction-item">
            <div>
              <strong>{transaction.title}</strong>
              <br />
              <small>{transaction.type}</small>
            </div>

            <div className="transaction-actions">
              <h4>₹{transaction.amount}</h4>

              <button
                className="delete-btn"
                onClick={() => deleteTransaction(transaction.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TransactionList;
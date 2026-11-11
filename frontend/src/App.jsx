import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import "./App.css";

function App() {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      title: "Salary",
      type: "Income",
      amount: 30000,
    },
    {
      id: 2,
      title: "Groceries",
      type: "Expense",
      amount: 2500,
    },
    {
      id: 3,
      title: "Electricity Bill",
      type: "Expense",
      amount: 1500,
    },
  ]);

  return (
    <Dashboard
      transactions={transactions}
      setTransactions={setTransactions}
    />
  );
}

export default App;
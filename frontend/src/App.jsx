import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Analytics from "./pages/Analytics";

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
    <Routes>
      <Route
        path="/"
        element={
          <Dashboard
            transactions={transactions}
            setTransactions={setTransactions}
          />
        }
      />

      <Route
        path="/reports"
        element={<Reports transactions={transactions} />}
      />

      <Route
        path="/analytics"
        element={<Analytics transactions={transactions} />}
      />
    </Routes>
  );
}

export default App;
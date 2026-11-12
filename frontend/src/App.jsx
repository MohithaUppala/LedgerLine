import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Reports from "./pages/Reports";
import Analytics from "./pages/Analytics";
import Login from "./pages/Login";
import Register from "./pages/Register";

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

  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );

  return (
    <Routes>
      <Route
        path="/login"
        element={
          isLoggedIn ? (
            <Navigate to="/" replace />
          ) : (
            <Login setIsLoggedIn={setIsLoggedIn} />
          )
        }
      />

      <Route
        path="/register"
        element={
          isLoggedIn ? (
            <Navigate to="/" replace />
          ) : (
            <Register />
          )
        }
      />

      <Route
        path="/"
        element={
          isLoggedIn ? (
            <Dashboard
              transactions={transactions}
              setTransactions={setTransactions}
              setIsLoggedIn={setIsLoggedIn}
            />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      <Route
        path="/reports"
        element={
          isLoggedIn ? (
            <Reports
              transactions={transactions}
              setIsLoggedIn={setIsLoggedIn}
            />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      <Route
        path="/analytics"
        element={
          isLoggedIn ? (
            <Analytics
              transactions={transactions}
              setIsLoggedIn={setIsLoggedIn}
            />
          ) : (
            <Navigate to="/login" replace />
          )
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
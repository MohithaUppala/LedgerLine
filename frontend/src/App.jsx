import { useEffect, useState } from "react";
import API from "./services/api";

function App() {
  const [budgets, setBudgets] = useState([]);

  useEffect(() => {
    API.get("/budgets")
      .then((response) => {
        setBudgets(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1>LedgerLine</h1>

      {budgets.map((budget) => (
        <div key={budget.id}>
          <h3>{budget.category}</h3>
          <p>₹ {budget.amount}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;
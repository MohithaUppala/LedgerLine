import Navbar from "../components/Navbar";
import BalanceCard from "../components/BalanceCard";
import BudgetCard from "../components/BudgetCard";
import IncomeCard from "../components/IncomeCard";
import ExpenseCard from "../components/ExpenseCard";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";

function Dashboard({ transactions, setTransactions }) {
  return (
    <>
      <Navbar />

      <div className="top-cards">
        <BalanceCard transactions={transactions} />
        <BudgetCard />
        <IncomeCard transactions={transactions} />
        <ExpenseCard transactions={transactions} />
      </div>

      <TransactionForm
        transactions={transactions}
        setTransactions={setTransactions}
      />

      <TransactionList
        transactions={transactions}
        setTransactions={setTransactions}
      />
    </>
  );
}

export default Dashboard;
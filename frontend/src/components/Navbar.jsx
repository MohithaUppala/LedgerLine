import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        background: "#4F46E5",
        color: "white",
      }}
    >
      <h2>LedgerLine</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <Link
          to="/"
          style={{ color: "white", textDecoration: "none" }}
        >
          Dashboard
        </Link>

        <Link
          to="/reports"
          style={{ color: "white", textDecoration: "none" }}
        >
          Reports
        </Link>

        <Link
          to="/analytics"
          style={{ color: "white", textDecoration: "none" }}
        >
          Analytics
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
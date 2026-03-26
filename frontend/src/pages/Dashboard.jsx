import SalesTable from "../components/SalesTable";
import PredictForm from "../components/PredictForm";

export default function Dashboard() {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Dashboard</h2>

      <button className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>

      <PredictForm />
      <hr />
      <SalesTable />
    </div>
  );
}

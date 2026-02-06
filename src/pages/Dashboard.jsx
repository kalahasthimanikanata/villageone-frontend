import { useNavigate } from "react-router-dom";

function Dashboard() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Welcome, {user ? user.username : "User"}!</h2>
      <p>Company: {user?.companyName}</p>
      <p>Email: {user?.email}</p>
      <p>Phone: {user?.phone}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;

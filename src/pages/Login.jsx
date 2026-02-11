import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <div className="form-page">
      <div className="form-box">
        <h2>Login</h2>

        <input placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input placeholder="Mobile Number" />

        <button>Login</button>

        <p onClick={() => navigate("/register")} className="link">
          Don't have account? Register
        </p>
      </div>
    </div>
  );
}

export default Login;

import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  return (
    <div className="form-page">
      <div className="form-box">
        <h2>Register</h2>

        <h3>Company Details</h3>
        <input placeholder="Company Name" />
        <input placeholder="Company Address" />
        <input placeholder="Company GST" />
        <input placeholder="Company Contact" />
        <input placeholder="Company Mail" />

        <h3>Business User</h3>
        <input placeholder="Full Name" />
        <input placeholder="Address" />
        <input placeholder="Contact" />
        <input placeholder="Mail" />

        <h3>Login Credentials</h3>
        <input placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input placeholder="Mobile Number" />
        <input placeholder="Mail" />

        <button>Submit</button>

        <p onClick={() => navigate("/login")} className="link">
          Already have account? Login
        </p>
      </div>
    </div>
  );
}

export default Register;

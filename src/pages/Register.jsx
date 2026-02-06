import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Register() {
  const [companyName, setCompanyName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [pincode, setPincode] = useState("");
  const [msg, setMsg] = useState("");

  const navigate = useNavigate();

  const handleRegister = async () => {
    setMsg(""); // clear previous message
    if (!username || !password || !phone) {
      setMsg("Username, password, and phone are required!");
      return;
    }

    try {
      const res = await api.post("/auth/register", {
        companyName,
        username,
        password,
        reEnterPassword: password,
        email,
        phone,
        address,
        pincode,
      });

      // Check if backend explicitly returned success or error message
      if (res.status === 200 || res.data) {
        alert("Registered Successfully!");
        navigate("/");
      } else {
        setMsg("Registration failed. Please check your data.");
      }
    } catch (err) {
      console.error(err);
      // Extract backend error message if exists
      const errorMsg =
        err.response?.data || "Registration failed. Please check your data.";
      setMsg(errorMsg);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>VillageOne Register</h2>

      <input
        placeholder="Company Name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      /><br /><br />

      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      /><br /><br />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      /><br /><br />

      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      /><br /><br />

      <input
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      /><br /><br />

      <input
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      /><br /><br />

      <input
        placeholder="Pincode"
        value={pincode}
        onChange={(e) => setPincode(e.target.value)}
      /><br /><br />

      <button onClick={handleRegister}>Register</button>

      {msg && <p style={{ color: "red" }}>{msg}</p>}
    </div>
  );
}

export default Register;

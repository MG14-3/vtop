import React, { useState } from "react";
import "../styles/Login.css";
import Header from "../components/Header";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = ({ setUser }) => {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // 2. Initialize this

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/users/login", {
        studentId,
        password,
      });

      if (res.data) {
        setUser(res.data); // 3. Update App.jsx state
        navigate("/dashboard"); // 4. Redirect to dashboard
      }
    } catch (err) {
      alert("Invalid ID or Password");
    }
  };

  return (
    <>
      <div>
        <Header />
      </div>
      <div className="login-container">
        <div className="vtop-login-card">
          <h2 className="vtop-header">VTOP Login</h2>

          <form className="vtop-form" onSubmit={handleLogin}>
            {" "}
            {/* 1. Add onSubmit */}
            <div className="vtop-input-group">
              <input
                type="text"
                placeholder="Student ID"
                value={studentId} // 2. Link state
                onChange={(e) => setStudentId(e.target.value)} // 3. Update state
                required
              />
              <span className="input-icon">
                <FaUserAlt />
              </span>
            </div>
            <div className="vtop-input-group">
              <input
                type="password"
                placeholder="Password"
                value={password} // 4. Link state
                onChange={(e) => setPassword(e.target.value)} // 5. Update state
                required
              />
              <span className="input-icon">
                <RiLockPasswordLine />
              </span>
            </div>
            <button type="submit" className="vtop-submit-btn">
              Submit
            </button>
          </form>

          <div className="vtop-links">
            <div className="left-links">
              <a href="#">Forgot Password</a>
              <a href="#">Forgot LoginId</a>
            </div>
            <a href="/" className="home-link">
              Go to Home Page
            </a>
          </div>
        </div>
      </div>
      <div className="footer-container">
        VTOP-Replica | Portfolio Project | Developed by: Mangalam | VIT-AP
        University
      </div>
    </>
  );
};

export default Login;

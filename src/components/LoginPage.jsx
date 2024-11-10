import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./LoginPage.css";

function LoginPage() {
  const [rollNumber, setRollNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    setRollNumber(rollNumber.toUpperCase());
    setPassword(password.toUpperCase());
    const data = { RollNumber: rollNumber, password: password };

    try {
      const response = await axios.post(
        "https://snist-hzjb.onrender.com/api/signin",
        data
      );
      localStorage.setItem("token", response.data.token);
      navigate("/myResult");
    } catch (error) {
      setErrorMessage("Incorrect Roll Number or Password");
      console.error("Error during submission:", error);
    }
  };

  return (
    <div className="container">
      <div className="main-form">
        <h1>Enter your Details</h1>
        <form onSubmit={submit}>
          <label>
            Roll Number:
            <input
              type="text"
              value={rollNumber}
              onChange={(e) => setRollNumber(e.target.value)}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button type="submit">
            Search <span></span>
          </button>
          {errorMessage && <div className="error">{errorMessage}</div>}
        </form>
      </div>
    </div>
  );
}

export default LoginPage;

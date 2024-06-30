import React, { useState } from "react";
import "./Login.css";

const Login = () => {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userId === "" || password === "") {
      setErrorMessage("Please kiran fill in both fields");
      return;
    }

    console.log("User ID:", userId);
    console.log("Password:", password);
    setErrorMessage("");

    setUserId("");
    setPassword("");
  };

  return (
    <div className="maincontainer">
      <div className="login-container">
        <h2>Admin Login</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="userid">User ID:</label>
          <input
            type="text"
            id="userid"
            name="userid"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button type="submit">Login</button>
        </form>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </div>
    </div>
  );
};

export default Login;

import { useState } from "react";
import { loginUser } from "../services/authService";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = await loginUser({
        email,
        password,
      });

      localStorage.setItem("token", data.token);

      alert("Login Successful");
    } catch (error) {
      console.error(error);
      alert("Login Failed");
    }
  };

  return (
    <div className="auth-container">
      <h1>Login</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
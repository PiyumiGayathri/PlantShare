import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault(); // VERY IMPORTANT

    try {
      const res = await api.post("/auth/login", {
        email,
        password
      });

      console.log(res.data); // check response

      // store token
      localStorage.setItem("token", res.data.token);

      // redirect
      navigate("/feed");

    } catch (err) {
      console.log(err);
      alert("Login failed");
    }
  };

  return (
    <div>

      <h2>Login</h2>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button type="submit">Login</button>

      </form>

    </div>
  );
}
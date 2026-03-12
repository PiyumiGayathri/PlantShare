import { Link, useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

export default function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  let userId = "";

  if (token) {
    const decoded = jwtDecode(token);
    userId = decoded.id;
  }

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
      <Link to="/feed">Feed</Link>
      <Link to="/create-post">Create Post</Link>
      <Link to={`/profile/${userId}`}>Profile</Link>
      <button onClick={logout}>Logout</button>
    </nav>
  );
}
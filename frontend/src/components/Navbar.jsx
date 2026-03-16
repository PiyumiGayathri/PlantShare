// import { Link, useNavigate } from "react-router-dom";
// import { jwtDecode } from "jwt-decode";

// export default function Navbar() {
//   const navigate = useNavigate();

//   const token = localStorage.getItem("token");
//   let userId = "";

//   if (token) {
//     const decoded = jwtDecode(token);
//     userId = decoded.id;
//   }

//   const logout = () => {
//     localStorage.removeItem("token");
//     navigate("/login");
//   };

//   return (
//     <nav style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
//       <Link to="/feed">Feed</Link>
//       <Link to="/create-post">Create Post</Link>
//       <Link to={`/profile/${userId}`}>Profile</Link>
//       <button onClick={logout}>Logout</button>
//     </nav>
//   );
// }

import { Link, useNavigate } from "react-router-dom";
import { FaSignOutAlt, FaUser, FaPlus, FaHome } from "react-icons/fa";
import logo from "../assets/plantshare.png";
import { jwtDecode } from "jwt-decode";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  let userId = "profile";
  const token = localStorage.getItem("token");
  if (token) {
    try {
      const decoded = jwtDecode(token);
      userId = decoded.id;
    } catch {}
  }

  return (
    <nav className="bg-gradient-to-r from-[#3F7A0A] to-[#7FAF47] shadow-lg px-4 py-2 flex items-center justify-between border-b-4 border-[#C8A96A]">
      <div className="flex items-center space-x-2">
        <img src={logo} alt="PlantShare Logo" className="h-10 w-10 rounded-lg shadow-md" />
        <span className="text-[#1F3D0A] text-2xl font-extrabold tracking-wide" style={{fontFamily: 'Inter, sans-serif'}}>PlantShare</span>
      </div>
      <div className="flex items-center space-x-4">
        <Link
          to="/feed"
          className="flex items-center text-[#2B2B2B] hover:bg-[#EFEDE6] px-3 py-2 rounded transition duration-200 font-semibold"
        >
          <FaHome className="mr-1" /> Feed
        </Link>
        <Link
          to="/create-post"
          className="flex items-center text-[#2B2B2B] hover:bg-[#EFEDE6] px-3 py-2 rounded transition duration-200 font-semibold"
        >
          <FaPlus className="mr-1" /> Create Post
        </Link>
        <Link
          to={`/profile/${userId}`}
          className="flex items-center text-[#2B2B2B] hover:bg-[#EFEDE6] px-3 py-2 rounded transition duration-200 font-semibold"
        >
          <FaUser className="mr-1" /> Profile
        </Link>
        <button
          onClick={handleLogout}
          className="flex items-center text-[#C96C4A] hover:bg-[#EFEDE6] px-3 py-2 rounded transition duration-200 font-semibold"
        >
          <FaSignOutAlt className="mr-1" /> Logout
        </button>
      </div>
    </nav>
  );
}
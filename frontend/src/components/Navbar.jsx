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
import { FaLeaf, FaSignOutAlt, FaUser, FaPlus, FaHome } from "react-icons/fa";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Add your logout logic here
    navigate("/login");
  };

  return (
    <nav className="bg-gradient-to-r from-green-700 to-green-500 shadow-lg px-4 py-2 flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <FaLeaf className="text-white text-3xl" />
        <span className="text-white text-2xl font-bold tracking-wide">PlantShare</span>
      </div>
      <div className="flex items-center space-x-4">
        <Link
          to="/feed"
          className="flex items-center text-white hover:bg-green-600 px-3 py-2 rounded transition duration-200"
        >
          <FaHome className="mr-1" /> Feed
        </Link>
        <Link
          to="/create"
          className="flex items-center text-white hover:bg-green-600 px-3 py-2 rounded transition duration-200"
        >
          <FaPlus className="mr-1" /> Create Post
        </Link>
        <Link
          to="/profile"
          className="flex items-center text-white hover:bg-green-600 px-3 py-2 rounded transition duration-200"
        >
          <FaUser className="mr-1" /> Profile
        </Link>
        <button
          onClick={handleLogout}
          className="flex items-center text-white hover:bg-green-600 px-3 py-2 rounded transition duration-200"
        >
          <FaSignOutAlt className="mr-1" /> Logout
        </button>
      </div>
    </nav>
  );
}
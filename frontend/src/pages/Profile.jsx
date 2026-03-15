// // src/pages/Profile.jsx
// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import api from "../api/axios";
// import Post from "../components/Post";

// export default function Profile() {
//   const { id } = useParams();
//   const [user, setUser] = useState(null);
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchProfile = async () => {
//       try {
//         const res = await api.get(`/users/${id}`);
//         setUser(res.data.user);
//         setPosts(res.data.posts);
//         console.log("Profile ID:", id);
//       } catch (err) {
//         console.error(err);
//       }
//     };
//     fetchProfile();
//   }, [id]);

//   if (!user) return <p>Loading...</p>;

//   return (
//     <div>
//       <h2>{user.username}'s Profile</h2>
//       <p>Email: {user.email}</p>
//       <h3>Posts</h3>
//       {posts.length === 0 ? <p>No posts yet.</p> : posts.map(post => <Post key={post._id} post={post} />)}
//     </div>
//   );
// }
import Navbar from "../components/Navbar";
import { FaHeart, FaComment, FaUserCircle } from "react-icons/fa";
import { useState, useEffect } from "react";

const user = {
  username: "plantlover",
  email: "plantlover@email.com",
  profilePic: "",
};

const userPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    title: "Monstera Magic",
    content: "Check out my new Monstera! 🌱",
    likes: 12,
    comments: 3,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    title: "Succulent Sunday",
    content: "Succulents are the best for beginners.",
    likes: 8,
    comments: 2,
  },
];

function PostCard({ post }) {
  const [likeCount, setLikeCount] = useState(post.likes);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl fade-in">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-40 object-cover"
        onError={e => (e.target.src = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80")}
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-green-800">{post.title}</h2>
        <p className="text-gray-700 mt-1">{post.content}</p>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center space-x-4">
            <button
              className="flex items-center text-green-600 hover:text-green-800 transition"
              onClick={() => setLikeCount(likeCount + 1)}
            >
              <FaHeart className="mr-1" /> {likeCount}
            </button>
            <button className="flex items-center text-green-600 hover:text-green-800 transition">
              <FaComment className="mr-1" /> {post.comments}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Profile() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Replace with API call to fetch user's posts
    setTimeout(() => setPosts(userPosts), 400);
  }, []);

  return (
    <div className="min-h-screen bg-green-50">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex flex-col items-center bg-white rounded-xl shadow-lg p-8 mb-8">
          {user.profilePic ? (
            <img
              src={user.profilePic}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover border-4 border-green-400"
            />
          ) : (
            <FaUserCircle className="w-24 h-24 text-green-400" />
          )}
          <h2 className="text-2xl font-bold text-green-800 mt-4">{user.username}</h2>
          <p className="text-gray-600">{user.email}</p>
        </div>
        <h3 className="text-xl font-semibold text-green-700 mb-4">Your Posts</h3>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {posts.length === 0
            ? Array.from({ length: 2 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-md h-60 animate-pulse"
                ></div>
              ))
            : posts.map(post => <PostCard key={post.id} post={post} />)}
        </div>
      </div>
      <style>
        {`
          .fade-in {
            opacity: 0;
            animation: fadeIn 0.8s forwards;
          }
          @keyframes fadeIn {
            to { opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}
// import { useEffect, useState } from "react";
// import api from "../api/axios";
// import Post from "../components/Post";
// import Navbar from "../components/Navbar";

// export default function Feed() {
//   const [posts, setPosts] = useState([]);

//   const fetchPosts = async () => {
//     try {
//       const res = await api.get("/posts");
//       setPosts(res.data);
//     } catch (err) {
//       console.error("Error fetching posts:", err);
//     }
//   };

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   return (
//     <div>
//       <Navbar />

//       <h2>Feed</h2>

//       {posts.length === 0 ? (
//         <p>No posts yet.</p>
//       ) : (
//         posts.map((post) => <Post key={post._id} post={post} />)
//       )}
//     </div>
//   );
// }
import Navbar from "../components/Navbar";
import { FaHeart, FaComment } from "react-icons/fa";
import { useEffect, useState } from "react";

const placeholderPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    title: "Monstera Magic",
    content: "Check out my new Monstera! 🌱",
    author: "plantlover",
    likes: 12,
    comments: 3,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    title: "Succulent Sunday",
    content: "Succulents are the best for beginners.",
    author: "greenthumb",
    likes: 8,
    comments: 2,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1444392069729-5c52b6a3c8e5?auto=format&fit=crop&w=400&q=80",
    title: "Blooming Beauty",
    content: "My peace lily just bloomed!",
    author: "floraqueen",
    likes: 15,
    comments: 5,
  },
];

function PostCard({ post }) {
  const [likeCount, setLikeCount] = useState(post.likes);

  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl fade-in">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
        onError={e => (e.target.src = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80")}
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-green-800">{post.title}</h2>
        <p className="text-gray-700 mt-1">{post.content}</p>
        <div className="flex items-center justify-between mt-4">
          <span className="text-sm text-green-600 font-medium">@{post.author}</span>
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

export default function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Replace with API call to fetch posts
    setTimeout(() => setPosts(placeholderPosts), 400);
  }, []);

  return (
    <div className="min-h-screen bg-green-50">
      <Navbar />
      <div className="max-w-5xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-green-800 mb-6">Feed</h1>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {posts.length === 0
            ? Array.from({ length: 3 }).map((_, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl shadow-md h-80 animate-pulse"
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
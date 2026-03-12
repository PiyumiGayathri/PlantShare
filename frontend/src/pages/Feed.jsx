import { useEffect, useState } from "react";
import api from "../api/axios";
import Post from "../components/Post";
import Navbar from "../components/Navbar";

export default function Feed() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await api.get("/posts");
      setPosts(res.data);
    } catch (err) {
      console.error("Error fetching posts:", err);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <Navbar />

      <h2>Feed</h2>

      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        posts.map((post) => <Post key={post._id} post={post} />)
      )}
    </div>
  );
}
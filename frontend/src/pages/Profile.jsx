// src/pages/Profile.jsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api/axios";
import Post from "../components/Post";

export default function Profile() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await api.get(`/users/${id}`);
        setUser(res.data.user);
        setPosts(res.data.posts);
        console.log("Profile ID:", id);
      } catch (err) {
        console.error(err);
      }
    };
    fetchProfile();
  }, [id]);

  if (!user) return <p>Loading...</p>;

  return (
    <div>
      <h2>{user.username}'s Profile</h2>
      <p>Email: {user.email}</p>
      <h3>Posts</h3>
      {posts.length === 0 ? <p>No posts yet.</p> : posts.map(post => <Post key={post._id} post={post} />)}
    </div>
  );
}
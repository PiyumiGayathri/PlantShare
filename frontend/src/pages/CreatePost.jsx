// src/pages/CreatePost.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

export default function CreatePost() {
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post("/posts", { content });
      navigate("/feed"); // redirect to feed after posting
    } catch (err) {
      alert(err.response?.data?.message || "Failed to create post");
    }
  };

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleSubmit}>
        <textarea
        placeholder="Share your plant 🌱"
        value={content}
        onChange={(e)=>setContent(e.target.value)}
        required
        />

        <br/>

        <button type="submit">
          Post
        </button>
      </form>
    </div>
  );
}
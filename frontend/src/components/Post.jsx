// src/components/Post.jsx
export default function Post({ post }) {
  return (
    <div style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
      <p><strong>{post.author.username}</strong></p>
      <p>{post.content}</p>
      <small>{new Date(post.createdAt).toLocaleString()}</small>
    </div>
  );
}
import { Link } from "react-router-dom";

export default function Post({ post }) {

  return (
    <div style={{
      border:"1px solid #ddd",
      padding:"10px",
      marginBottom:"10px",
      borderRadius:"8px"
    }}>

      <h4>
        <Link to={`/profile/${post.author._id}`}>
          {post.author.username}
        </Link>
      </h4>

      <p>{post.content}</p>

      <small>
        {new Date(post.createdAt).toLocaleString()}
      </small>

    </div>
  );
}
// // src/pages/CreatePost.jsx
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import api from "../api/axios";

// export default function CreatePost() {
//   const [content, setContent] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await api.post("/posts", { content });
//       navigate("/feed"); // redirect to feed after posting
//     } catch (err) {
//       alert(err.response?.data?.message || "Failed to create post");
//     }
//   };

//   return (
//     <div>
//       <h2>Create Post</h2>
//       <form onSubmit={handleSubmit}>
//         <textarea
//         placeholder="Share your plant 🌱"
//         value={content}
//         onChange={(e)=>setContent(e.target.value)}
//         required
//         />

//         <br/>

//         <button type="submit">
//           Post
//         </button>
//       </form>
//     </div>
//   );
// }

import Navbar from "../components/Navbar";
import { useState } from "react";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    let errs = {};
    if (!title.trim()) errs.title = "Title is required.";
    if (!content.trim()) errs.content = "Content is required.";
    if (!image) errs.image = "Image is required.";
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      // Submit logic here
      alert("Post created!");
      setTitle("");
      setContent("");
      setImage(null);
    }
  };

  return (
    <div className="min-h-screen bg-green-50">
      <Navbar />
      <div className="max-w-xl mx-auto mt-10 bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-green-800 mb-6">Create a New Post</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-green-700 font-medium mb-1">Title</label>
            <input
              type="text"
              className={`w-full px-4 py-2 rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition ${errors.title ? "border-red-500" : "border-gray-200"}`}
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
          </div>
          <div>
            <label className="block text-green-700 font-medium mb-1">Content</label>
            <textarea
              className={`w-full px-4 py-2 rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition ${errors.content ? "border-red-500" : "border-gray-200"}`}
              rows={4}
              value={content}
              onChange={e => setContent(e.target.value)}
            />
            {errors.content && <p className="text-red-500 text-sm mt-1">{errors.content}</p>}
          </div>
          <div>
            <label className="block text-green-700 font-medium mb-1">Image</label>
            <input
              type="file"
              accept="image/*"
              className={`w-full px-4 py-2 rounded-lg border shadow-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition ${errors.image ? "border-red-500" : "border-gray-200"}`}
              onChange={e => setImage(e.target.files[0])}
            />
            {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image}</p>}
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg shadow-md hover:bg-green-700 transition transform hover:scale-105"
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
}
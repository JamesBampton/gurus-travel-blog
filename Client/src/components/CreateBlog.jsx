import React, { useState, useEffect } from "react";
import { useSession } from "../../src/contexts/SessionContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function CreatePost() {
  const { user } = useSession();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState(""); // category ID
  const [thumbnail, setThumbnail] = useState("");
  const [categories, setCategories] = useState([]);
  // Redirect if not logged in
  useEffect(() => {
    if (!user) {
      navigate("/login"); //redirect to login
    }
  }, [user, navigate]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/categories") // replace with your categories route
      .then((res) => setCategories(res.data))
      .catch((err) => console.error("Failed to fetch categories:", err));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("authToken");

      //Added use of formdata
      const formData = new FormData();
      formData.append("blog_title", title);
      formData.append("blog_content", content);
      formData.append("category_id", parseInt(category));
      formData.append("user_id", user.id);
      formData.append("thumbnail", thumbnail); // file object
      //End formdata add

      const response = await axios.post(
        "http://localhost:3001/api/blogs",
        formData,

        //Removed as this is being taken care of above
        /* {
          blog_title: title,
          blog_content: content,
          category_id: parseInt(category),
          user_id: user.id,
          thumbnail_image: thumbnail || "https://example.com/default-thumbnail.jpg",
        }, */
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Blog Created:", response.data);
      navigate("/"); // redirect to home or blog list
    } catch (error) {
      console.error("Failed to create blog:", error);
      alert("Failed to create blog post.");
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h1>Create Blog Post</h1>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "10px" }}
      >
        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <textarea
          placeholder="Write your blog..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          style={{ padding: "10px", fontSize: "16px", minHeight: "150px" }}
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
          style={{ padding: "10px", fontSize: "16px" }}
        >
          <option value="">Select Category</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
        <input
          type="file"
          accept="image/*"
          placeholder="Thumbnail URL (optional)"
          //value={thumbnail}
          // onChange={(e) => setThumbnail(e.target.value)} replaced with line below to use file input
          onChange={(e) => setThumbnail(e.target.files[0])}
          style={{ padding: "10px", fontSize: "16px" }}
        />
        <button
          type="submit"
          style={{ padding: "10px", fontSize: "16px", cursor: "pointer" }}
        >
          Create Post
        </button>
      </form>
    </div>
  );
}

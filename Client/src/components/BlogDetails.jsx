import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useSession } from "../contexts/SessionContext";
import "../assets/css/BlogDetails.css";

const BlogDetails = () => {
  const { id } = useParams();
  const { user } = useSession();
  const [blog, setBlog] = useState(null);
  const [error, setError] = useState("");
  const [alert, setAlert] = useState("");

  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    blog_title: "",
    blog_content: "",
    thumbnail_image: "",
  });

  // Fetch blog on mount
  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/api/blogs/${id}`
        );
        setBlog(response.data);
        console.log("Fetched blog:", response.data);
      } catch (err) {
        setError("Failed to fetch blog details.");
        console.error(err);
      }
    };
    fetchBlog();
  }, [id]);

  // --- Edit Blog ---
  const startEditing = () => {
    if (!blog) return;
    setEditData({
      blog_title: blog.blog_title,
      blog_content: blog.blog_content,
      thumbnail_image: blog.thumbnail_image || "",
      category_id: blog.category_id,
    });
    setIsEditing(true);
    setAlert("");
    console.log("Start editing:", editData);
  };
  const saveEdit = async () => {
    console.log("Saving edit:", editData);

    const token = localStorage.getItem("authToken");
    if (!token) {
      setAlert("You must be logged in to edit this blog.");
      return;
    }

    try {
      const response = await axios.put(
        `http://localhost:3001/api/blogs/${id}`,
        editData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setBlog((prev) => ({ ...prev, ...editData }));
      setIsEditing(false);
      setAlert("Blog updated successfully!");
      console.log("Edit saved:", response.data);

      // Auto-hide alert
      setTimeout(() => setAlert(""), 3000);
    } catch (err) {
      console.error("Edit error:", err.response?.data || err.message);
      setAlert(err.response?.data?.message || "Error updating blog.");
      setTimeout(() => setAlert(""), 3000);
    }
  };

  const cancelEdit = () => {
    setIsEditing(false);
    setAlert("");
    console.log("Edit cancelled");
  };
  const deleteBlog = async () => {
    console.log("Deleting blog ID:", id);
    if (!window.confirm("Are you sure you want to delete this blog?")) return;

    const token = localStorage.getItem("authToken");
    if (!token) {
      setAlert("You must be logged in to delete this blog.");
      return;
    }

    try {
      await axios.delete(`http://localhost:3001/api/blogs/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setAlert("Blog deleted successfully!");
      console.log("Blog deleted");

      // Redirect after short delay
      setTimeout(() => {
        window.location.href = "/blog";
      }, 1000);
    } catch (err) {
      console.error("Delete error:", err.response?.data || err.message);
      setAlert(err.response?.data?.message || "Error deleting blog.");
    }
  };
  const addComment = async (commentContent) => {
    console.log("Adding comment:", commentContent);

    const token = localStorage.getItem("authToken");
    if (!token) {
      setAlert("You must be logged in to comment.");
      return;
    }

    try {
      const response = await axios.post(
        `http://localhost:3001/api/comments`,
        {
          blog_id: id,
          comment_content: commentContent,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setBlog((prev) => ({
        ...prev,
        comments: [...(prev.comments || []), response.data],
      }));

      setAlert("Comment added!");
      setTimeout(() => setAlert(""), 3000);
    } catch (err) {
      console.error("Comment error:", err.response?.data || err.message);
      setAlert(err.response?.data?.message || "Error adding comment.");
      setTimeout(() => setAlert(""), 3000);
    }
  };
  // --- Delete Comment ---
  const deleteComment = async (commentId, commentUserId) => {
    if (!user || !user.token) {
      console.log("User or token missing");
      return;
    }

    console.log(user.id, commentUserId);
    if (user.id !== commentUserId) {
      setAlert("You are not authorized to delete this comment.");
      setTimeout(() => setAlert(""), 3000);
      return;
    }

    console.log("Deleting comment ID:", commentId);

    try {
      await axios.delete(`http://localhost:3001/api/comments/${commentId}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });

      // Remove comment from local state
      setBlog((prev) => ({
        ...prev,
        comments: prev.comments.filter((c) => c.id !== commentId),
      }));

      setAlert("Comment deleted!");
      setTimeout(() => setAlert(""), 3000);
    } catch (err) {
      console.error(err);
      setAlert("Error deleting comment.");
      setTimeout(() => setAlert(""), 3000);
    }
  };

  if (error) return <div className="error">{error}</div>;
  if (!blog) return <div>Loading...</div>;

  console.log("Rendering blog details for:", blog.blog_title);

  return (
    <div className="blog-container">
      {alert && <div className="alert">{alert}</div>}

      <div className="blog-header">
        {isEditing ? (
          <input
            type="text"
            value={editData.blog_title}
            onChange={(e) =>
              setEditData({ ...editData, blog_title: e.target.value })
            }
          />
        ) : (
          <h1>{blog.blog_title}</h1>
        )}
        <p className="author">By: {blog.user?.username || "Unknown"}</p>
      </div>
      <div className="blog-thumbnail">
        {isEditing ? (
          <></>
        ) : (
          <img
            src={
              blog.thumbnail_image
                ? `http://localhost:3001${blog.thumbnail_image}`
                : "/default-thumbnail.png"
            }
            alt={blog.blog_title}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/default-thumbnail.png";
            }}
          />
        )}
      </div>

      <div className="blog-content">
        {isEditing ? (
          <textarea
            value={editData.blog_content}
            onChange={(e) =>
              setEditData({ ...editData, blog_content: e.target.value })
            }
          />
        ) : (
          <p>{blog.blog_content}</p>
        )}
      </div>

      {/* Blog Actions */}
      {user && user.id === blog.user_id && (
        <div className="blog-actions">
          {isEditing ? (
            <>
              <button onClick={saveEdit}>Save</button>
              <button onClick={cancelEdit}>Cancel</button>
            </>
          ) : (
            <>
              <button onClick={startEditing}>Edit Blog</button>
              <button onClick={deleteBlog}>Delete Blog</button>
            </>
          )}
        </div>
      )}

      {/* Comments Section */}
      <div className="comments-section">
        <h2>Comments</h2>
        {blog.comments && blog.comments.length > 0 ? (
          <ul className="comments-list">
            {blog.comments.map((comment) => (
              <li key={comment.id} className="comment-item">
                <p>{comment.comment_content}</p>
                <span className="comment-author">
                  By: {comment.user?.username || "Anonymous"}
                </span>
                {user && user.id === comment.user_id && (
                  <button
                    className="delete-comment-btn"
                    //onClick={() => deleteComment(comment.id, comment.user_id)}
                    onClick={() => {
                      console.log("Button clicked");
                      deleteComment(comment.id, comment.user_id);
                    }}
                  >
                    Delete
                  </button>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>No comments yet.</p>
        )}

        {user ? (
          <form
            className="add-comment-form"
            onSubmit={(e) => {
              e.preventDefault();
              const content = e.target.comment.value.trim();
              if (content) addComment(content);
              e.target.reset();
            }}
          >
            <textarea
              name="comment"
              placeholder="Add a comment..."
              required
            ></textarea>
            <button type="submit">Submit Comment</button>
          </form>
        ) : (
          <p className="login-message">Log in to add a comment.</p>
        )}
      </div>
    </div>
  );
};

export default BlogDetails;

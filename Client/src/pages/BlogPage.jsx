// BlogPage.jsx
import React, { useEffect, useState } from "react";
import CreatePost from "../components/CreateBlog";
import axios from "axios";
import BlogCard from "../components/BlogCard";

import "../assets/css/myStyles.css";
import "../assets/css/cards.css";
import "../assets/css/icons.css";
import "../assets/css/styles.css";
import "../assets/css/w3-theme-teal.css";
import "../assets/css/carousel.css";
import "../assets/css/cardspin-test.css";
import "../assets/css/flip.css";

const BlogPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isLoggedIn = !!localStorage.getItem("authToken");
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/blogs"); // backend URL
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        Loading blogs...
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <div id="dashboard" className="content2 grid-containerink">
        <div className="ianda1">
          <div className="w3-padding floating-box-test" id="myHeader">
            <br />
            <div className="backgroundImgblog"></div>
            <br />
            <br />
          </div>
          <div className="centered2 myfontL">
            ARTICLES
            <br />
            <p className="myfontS">From travel Gurus...</p>
          </div>

          {/* Create Blog Button */}
          {isLoggedIn && (
            <div style={{ textAlign: "center", margin: "20px 0" }}>
              <button
                className="w3-button w3-teal w3-round"
                onClick={() => setIsModalOpen(true)}
              >
                Create Blog
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="modalOverlay"
          onClick={() => setIsModalOpen(false)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 999,
          }}
        >
          <div
            className="modalContent"
            onClick={(e) => e.stopPropagation()} // prevent modal close on content click
            style={{
              background: "#fff",
              padding: "20px",
              borderRadius: "8px",
              maxWidth: "500px",
              width: "100%",
            }}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              style={{
                float: "right",
                background: "transparent",
                border: "none",
                fontSize: "20px",
                cursor: "pointer",
              }}
            >
              &times;
            </button>
            <CreatePost />
          </div>
        </div>
      )}

      {/* Dynamic Blogs */}
      <div className="content">
        {blogs.length > 0 ? (
          blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
        ) : (
          <p style={{ textAlign: "center" }}>No blogs available.</p>
        )}
      </div> 
      <br />
      <br />
    </>
  );
};

export default BlogPage;

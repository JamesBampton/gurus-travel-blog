
// HomePage.js
import React, {useState} from "react";
import CreatePost from "../components/CreateBlog"
import React, { useEffect, useState } from "react";
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
        setLoading(false);
      } catch (error) {
        console.error("Error fetching blogs:", error);
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return <div style={{ textAlign: "center", marginTop: "50px" }}>Loading blogs...</div>;
  }

  return (
    <>
      <div id="dashboard" className="content2 grid-containerink">
        <div className="ianda1">
          <div className="w3-padding floating-box-test" id="myHeader">
            <br />
            <div className="backgroundImgblog"></div>
            <br />
            <br />
          </div>
          <div className="centered2 myfontL">

            {" "}
            ARTICLES<br></br>

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
        
      <div>
        <br />
        <br />

        <div className="content">
          {/* NG CARD */}
          <div className="card">
            <div className="layer"></div>
            <p
              className="w3-center"
              style={{
                paddingBottom: 0,
                height: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="./icons.png"
                className="w3-circle"
                style={{
                  width: 160,
                  marginBottom: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1,
                  borderRadius: "10px",
                }}
                alt="Avatar"
              />
            </p>
            <div className="details">
              <h2>
                SOME TEXT
                <br />
                <span style={{ color: "#a05b2e" }}>Some more text</span>
              </h2>
            </div>
          </div>

          <div className="card">
            <div className="layer"></div>
            <p
              className="w3-center"
              style={{
                paddingBottom: 0,
                height: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="./ng-blue.png"
                className="w3-circle"
                style={{
                  width: 160,
                  marginBottom: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1,
                  borderRadius: "10px",
                }}
                alt="Avatar"
              />
            </p>
            <div className="details">
              <h2>
                SOME TEXT
                <br />
                <span>Some more text</span>
              </h2>
            </div>
          </div>

          <div className="card">
            <div className="layer"></div>
            <p
              className="w3-center"
              style={{
                paddingBottom: 0,
                height: "90%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="./ng-logo.png"
                className="w3-circle"
                style={{
                  width: 160,
                  marginBottom: 40,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 1,
                  borderRadius: "10px",
                }}
                alt="Avatar"
              />
            </p>
            <div className="details">
              <h2>
                SOME TEXT
                <br />
                <span>Some more text</span>
              </h2>
            </div>
          </div>


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


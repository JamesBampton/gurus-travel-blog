// src/components/BlogCard.js
import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
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
          src={blog.thumbnail_image || "./default-thumbnail.png"} // fallback if no image
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
          alt={blog.blog_title}
        />
      </p>
      <div className="details">
        <h2>
          {blog.blog_title}
          <br />
          <span style={{ color: "#a05b2e" }}>
            {blog.category ? blog.category.category_name : "Uncategorized"}
          </span>
        </h2>
        <p>{blog.blog_content.substring(0, 100)}...</p>
        <Link className="button" to={`/blog/${blog.id}`}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;

import React from "react";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const thumbnailURL = blog.thumbnail_image
    ? `http://localhost:3001${blog.thumbnail_image}` // server URL
    : "/default-thumbnail.png"; // fallback image in public folder

  return (
    <Link to={`/blog/${blog.id}`} style={{ textDecoration: "none" }}>
      <div className="card">
        <div className="layer"></div>
        <div
          className="w3-center"
          style={{
            paddingBottom: 0,
            height: "90%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <img
          src={thumbnailURL}
          className="w3-circle"
          style={{
            width: 160,
            marginBottom: 40,
            zIndex: 1,
            borderRadius: "10px",
          }}
          alt={blog.blog_title}
        />
      </div> */}

          <img
            src={thumbnailURL}
            className="w3-circle"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              marginBottom: 40,
              zIndex: 1,
              borderRadius: "0px",
            }}
            alt={blog.blog_title}
          />
        </div>

        <div className="details">
          <h2>
            {blog.blog_title}
            <br />
            <span style={{ color: "#a05b2e" }}>
              {blog.category ? blog.category.category_name : "Uncategorized"}
            </span>
          </h2>
          <p>{blog.blog_content.substring(0, 100)}...</p>
          <p className="w3-text-grey">
            <i className="fa fa-calendar"></i>{" "}
            {new Date(blog.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

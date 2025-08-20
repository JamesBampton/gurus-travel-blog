// /*import React, { useEffect, useState } from "react";
// import axios from "axios";
// import CreatePost from "../components/CreateBlog";
// import BlogCard from "../components/BlogCard";
// import "../assets/css/myStyles.css";
// import "../assets/css/cards.css";
// import "../assets/css/icons.css";
// import "../assets/css/styles.css";
// import "../assets/css/w3-theme-teal.css";
// import "../assets/css/carousel.css";
// import "../assets/css/cardspin-test.css";
// import "../assets/css/flip.css";

// const BlogPage = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const isLoggedIn = !!localStorage.getItem("authToken");
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await axios.get("http://localhost:3001/api/blogs");
//         setBlogs(response.data);
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, []);

//   if (loading) {
//     return (
//       <div style={{ textAlign: "center", marginTop: "50px" }}>
//         Loading blogs...
//       </div>
//     );
//   }

//   return (
//     <>
//       {/* Header Section *//*}
//       <div id="dashboard" className="content2 grid-containerink">
//         <div className="ianda1">
//           <div className="w3-padding floating-box-test" id="myHeader">
//             <br />
//             <div className="backgroundImgblog"></div>
//             <br />
//             <br />
//           </div>
//           <div className="centered2 myfontL">
//             ARTICLES
//             <br />
//             <p className="myfontS">From travel Gurus...</p>
//           </div>

//           {/* Create Blog Button *//*}
//           {isLoggedIn && (
//             <div style={{ textAlign: "center", margin: "20px 0" }}>
//               <button
//                 className="w3-button w3-teal w3-round"
//                 onClick={() => setIsModalOpen(true)}
//               >
//                 Create Blog
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Modal *//*}
//       {isModalOpen && (
//         <div
//           className="modalOverlay"
//           onClick={() => setIsModalOpen(false)}
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100vw",
//             height: "100vh",
//             backgroundColor: "rgba(0,0,0,0.5)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: 999,
//           }}
//         >
//           <div
//             className="modalContent"
//             onClick={(e) => e.stopPropagation()}
//             style={{
//               background: "#fff",
//               padding: "20px",
//               borderRadius: "8px",
//               maxWidth: "500px",
//               width: "100%",
//             }}
//           >
//             <button
//               onClick={() => setIsModalOpen(false)}
//               style={{
//                 float: "right",
//                 background: "transparent",
//                 border: "none",
//                 fontSize: "20px",
//                 cursor: "pointer",
//               }}
//             >
//               &times;
//             </button>
//             <CreatePost />
//           </div>
//         </div>
//       )}

//       {/* Dynamic Blogs *//*}
//       <div className="content">
//         {blogs.length > 0 ? (
//           blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
//         ) : (
//           <p style={{ textAlign: "center" }}>No blogs available.</p>
//         )}
//       </div>
//       <br />
//       <br />

//     </>
//   );
// };

// export default BlogPage;*/

// import { useLocation } from "react-router-dom";
// //import { useEffect, useState } from "react";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import CreatePost from "../components/CreateBlog";
// import BlogCard from "../components/BlogCard";
// import "../assets/css/myStyles.css";
// import "../assets/css/cards.css";
// import "../assets/css/icons.css";
// import "../assets/css/styles.css";
// import "../assets/css/w3-theme-teal.css";
// import "../assets/css/carousel.css";
// import "../assets/css/cardspin-test.css";
// import "../assets/css/flip.css";

// function useQuery() {
//   return new URLSearchParams(useLocation().search);
// }

// const BlogPage = () => {
//   const query = useQuery();
//   const selectedCategory = query.get("category");
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const isLoggedIn = !!localStorage.getItem("authToken");
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBlogs = async () => {
//       try {
//         const response = await axios.get("http://localhost:3001/api/blogs", {
//           params: selectedCategory ? { category: selectedCategory } : {},
//         });
//         setBlogs(response.data);
//         console.log("API response:", response.data);
//       } catch (error) {
//         console.error("Error fetching blogs:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlogs();
//   }, [selectedCategory]);

//   if (loading) {
//     return (
//       <div style={{ textAlign: "center", marginTop: "50px" }}>
//         Loading blogs...
//       </div>
//     );
//   }

//   return (
//     <>
//       <div id="dashboard" className="content2 grid-containerink">
//         <div className="ianda1">
//           <div className="w3-padding floating-box-test" id="myHeader">
//             <br />
//             <div className="backgroundImgblog"></div>
//             <br />
//             <br />
//           </div>
//           <div className="centered2 myfontL">
//             ARTICLES
//             <br />
//             <p className="myfontS">From travel Gurus...</p>
//           </div>

//           {isLoggedIn && (
//             <div style={{ textAlign: "center", margin: "20px 0" }}>
//               <button
//                 className="w3-button w3-teal w3-round"
//                 onClick={() => setIsModalOpen(true)}
//               >
//                 Create Blog
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Modal */}
//       {isModalOpen && (
//         <div
//           className="modalOverlay"
//           onClick={() => setIsModalOpen(false)}
//           style={{
//             position: "fixed",
//             top: 0,
//             left: 0,
//             width: "100vw",
//             height: "100vh",
//             backgroundColor: "rgba(0,0,0,0.5)",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             zIndex: 999,
//           }}
//         >
//           <div
//             className="modalContent"
//             onClick={(e) => e.stopPropagation()}
//             style={{
//               background: "#fff",
//               padding: "20px",
//               borderRadius: "8px",
//               maxWidth: "500px",
//               width: "100%",
//             }}
//           >
//             <button
//               onClick={() => setIsModalOpen(false)}
//               style={{
//                 float: "right",
//                 background: "transparent",
//                 border: "none",
//                 fontSize: "20px",
//                 cursor: "pointer",
//               }}
//             >
//               &times;
//             </button>
//             <CreatePost />
//           </div>
//         </div>
//       )}

//       {/* Dynamic Blogs */}
//       <div className="content">
//         {selectedCategory && (
//           <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
//             Showing blogs for: <span style={{ color: "#009688" }}>{selectedCategory}</span>
//           </h3>
//         )}
//         {Array.isArray(blogs) && blogs.length > 0 ? (
//           blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
//         ) : (
//           <p style={{ textAlign: "center" }}>
//             No blogs available{selectedCategory ? ` for "${selectedCategory}"` : ""}.
//           </p>
//         )}
//       </div>
//       <br />
//       <br />
//     </>
//   );
// };

// export default BlogPage;

import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import CreatePost from "../components/CreateBlog";
import BlogCard from "../components/BlogCard";

import "../assets/css/myStyles.css";
import "../assets/css/cards.css";
import "../assets/css/icons.css";
import "../assets/css/styles.css";
import "../assets/css/w3-theme-teal.css";
import "../assets/css/carousel.css";
import "../assets/css/cardspin-test.css";
import "../assets/css/flip.css";

// Custom hook to get URL query params
function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const BlogPage = () => {
  const query = useQuery();
  const selectedCategory = query.get("category");
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const isLoggedIn = !!localStorage.getItem("authToken");

  // Fetch blogs from backend
  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response = await axios.get("http://localhost:3001/api/blogs", {
          params: selectedCategory ? { category: selectedCategory } : {},
        });
        setBlogs(response.data);
        console.log("Fetched blogs:", response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [selectedCategory]);
  // Called by CreatePost after a successful blog creation
  const handleBlogCreated = (newBlog) => {
    setBlogs((prevBlogs) => [newBlog, ...prevBlogs]); // Add new blog to top
    setShowCreateModal(false); // close modal if using modal
  };

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
            <div className="backgroundImgblog"></div>
          </div>
          <div className="centered2 myfontL">
            ARTICLES
            <p className="myfontS">From travel Gurus...</p>
          </div>

          
      {/* Create Blog Modal */}
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
            onClick={(e) => e.stopPropagation()}
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
            <CreatePost setBlogs={setBlogs} setIsModalOpen={setIsModalOpen} />
          </div>
        </div>
      )}

      {/* Blog List */}

      {selectedCategory && (
        <h3 style={{ textAlign: "center", marginBottom: "20px" }}>
          Showing blogs for:{" "}
          <span style={{ color: "#009688" }}>{selectedCategory}</span>
        </h3>
      )}

      <div className="content">
        {Array.isArray(blogs) && blogs.length > 0 ? (
          blogs.map((blog) => <BlogCard key={blog.id} blog={blog} />)
        ) : (
          <p style={{ textAlign: "center" }}>
            No blogs available
            {selectedCategory ? ` for "${selectedCategory}"` : ""}.
          </p>
        )}
      </div>
      {/* Create Blog Button */}
          {isLoggedIn && (
            <div style={{ textAlign: "center", margin: "20px 0" }}>
              <button
                className="btn btn-outline-primary"
                onClick={() => setIsModalOpen(true)}
              >
                Create Blog
              </button>
            </div>
          )}
        </div>
      </div>


      <br />
      <br />
    </>
  );
};

export default BlogPage;

// // HomePage.js
// import React from "react";
// import "../assets/css/myStyles.css";
// import "../assets/css/cards.css";
// import "../assets/css/icons.css";
// import "../assets/css/styles.css";
// import "../assets/css/w3-theme-teal.css";
// import "../assets/css/carousel.css";
// import "../assets/css/cardspin-test.css";
// import "../assets/css/flip.css";
// import "../App.css";

// // ...existing code...
// const HomePage = () => {
//   return (
//     <>
//       <div id="dashboard" className="content2 grid-containerink">
//         <div className="ianda1">
//           <div className="w3-padding floating-box-test" id="myHeader">
//             <br />
//             <div className="backgroundImg"></div>
//             {/* places image in this location */}
//             <br />
//             <br />
//           </div>
//           <div className="centered myfontL">
//             {" "}
//             WELCOME<br></br>
//             <p className="myfontS">The Gurus blog page...</p>
//           </div>
//         </div>
//       </div>
//       <div>
//         <br />
//         <br />

//       </div>
//       <br />
//       <br />
//       <br />
//     </>
//   );
// };

// export default HomePage;
// // ...existing code...
import React, { useState, useEffect } from "react";
import "../assets/css/myStyles.css";
import "../assets/css/cards.css";
import "../assets/css/icons.css";
import "../assets/css/styles.css";
import "../assets/css/w3-theme-teal.css";
import "../assets/css/carousel.css";
import "../assets/css/cardspin-test.css";
import "../assets/css/flip.css";
import "../assets/css/HomePage.css";
import "../App.css";

const quotes = [
  { text: "“Writing is the painting of the voice.”", author: "— Voltaire" },
  { text: "“The art of blogging is telling stories that connect.”", author: "— James" },
  { text: "“Good writing begins with good reading.”", author: "— Sarah" },
];

const HomePage = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  // Automatically change quotes every 4s
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div id="dashboard" className="content2 grid-containerink">
        <div className="ianda1">
          <div className="w3-padding floating-box-test" id="myHeader">
            <div className="backgroundImg"></div>
          </div>
          <div className="centered myfontL">
            WELCOME <br />
            <p className="myfontS">The Gurus blog page...</p>
          </div>
        </div>
      </div>

      {/* Quote Slider */}
      <div className="quote-slider">
        <p className="quote-text">{quotes[currentQuote].text}</p>
        <p className="quote-author">{quotes[currentQuote].author}</p>
      </div>

      {/* Feature Blogs Section */}
      <section className="feature-blogs">
        <h2 className="section-title">Featured Blogs</h2>
        <div className="feature-cards">
          {/* Card 1 */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="/images/feature1.jpg" alt="Travel Adventure" />
                <h3>Travel Adventures</h3>
              </div>
              <div className="flip-card-back">
                <p>
                  Explore hidden gems and unforgettable journeys that will inspire
                  your wanderlust.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="/images/feature2.jpg" alt="Food Recipes" />
                <h3>Food & Recipes</h3>
              </div>
              <div className="flip-card-back">
                <p>
                  Discover delicious recipes and culinary secrets from around the
                  world.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="/images/feature3.jpg" alt="Tech Trends" />
                <h3>Tech Trends</h3>
              </div>
              <div className="flip-card-back">
                <p>
                  Stay updated with the latest innovations in technology and digital
                  lifestyle.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Goal / Ambition */}
      <div className="ambition-section">
        <h2>Our Ambition</h2>
        <p>
          At Gurus Blog, our mission is to create a community of thinkers,
          dreamers, and storytellers. We aim to inspire, educate, and empower
          our readers through diverse topics and engaging stories.
        </p>
        <a href="/about" className="btn-more">Read More</a>
      </div>
    </>
  );
};

export default HomePage;

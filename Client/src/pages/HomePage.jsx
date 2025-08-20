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
  { text: "“Blogging is the art of turning thoughts into stories.”", author: "— Emily Harper" },
  { text: "“A blog is a window to your mind, open for the world to see.”", author: "— Michael Turner" },
  { text: "“Every blog post is a conversation waiting to happen.”", author: "— Sophia Clarke" },
  { text: "“Writing a blog is not just sharing ideas, its sharing yourself.”", author: "— Daniel Foster" },
  { text: "“The best blogs inspire, inform, and ignite curiosity.”", author: "— Olivia Bennett" },
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
            WELCOME HOME <br />
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
        <h2 className="section-title">Our Featured Blogs</h2>
        <div className="feature-cards">

          {/* Card 1 */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="/images/feature1.jpg" alt="Travel Adventures" />
                <h3>Travel Adventures</h3>
              </div>
              <div className="flip-card-back">
                <p>
                  Dive into unforgettable journeys, explore hidden gems, and get tips
                  to make your travels smooth, fun, and full of memorable experiences.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="/images/feature2.jpg" alt="Food & Recipes" />
                <h3>Food & Recipes</h3>
              </div>
              <div className="flip-card-back">
                <p>
                  From traditional dishes to modern twists, discover recipes that
                  will excite your taste buds and inspire your next culinary creation.
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
                  Keep up with the fast-paced world of technology. Learn about the
                  latest gadgets, apps, and innovations shaping our digital future.
                </p>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src="/images/feature4.jpg" alt="Lifestyle & Wellness" />
                <h3>Lifestyle & Wellness</h3>
              </div>
              <div className="flip-card-back">
                <p>
                  Tips and insights for a balanced, healthy life. From fitness and
                  mindfulness to personal growth, discover ways to enhance your daily
                  well-being.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Our Goal / Ambition */}
      <div className="ambition-section">
        <h2>Our Ambition</h2>
        <p className="wordy-text">
          "At Gurus Blog, we strive to build a vibrant community of thinkers,
          dreamers, and storytellers from all walks of life. Our goal is to
          inspire curiosity, spark creativity, and empower our readers through
          thought-provoking articles, engaging stories, and fresh perspectives
          on a wide range of topics. Whether it's travel, lifestyle, technology,
          or personal growth, we want every reader to feel motivated and
          connected."
        </p>
        <br></br>
        <a href="/about" className="btn-more">
          Read More...
        </a>
        <br></br>
        <br></br>
        <br></br>
        <hr className="lineBreaker"></hr>
      </div>
    </>
  );
};

export default HomePage;

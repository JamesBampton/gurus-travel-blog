import React from "react";
import "../assets/css/myStyles.css";
import "../assets/css/cards.css";
import "../assets/css/icons.css";
import "../assets/css/styles.css";
import "../assets/css/w3-theme-teal.css";
import "../assets/css/carousel.css";
import "../assets/css/cardspin-test.css";
import "../assets/css/flip.css";
import "../assets/css/HomePage.css"; // responsive styles
import "../assets/css/AboutPage.css"; // additional styling
import AboutSection from "../components/AboutPage";

const AboutPage = () => {
  return (
    <>
      <div id="dashboard" className="content2 grid-containerink">
        <div className="ianda1">
          <div className="w3-padding floating-box-test" id="myHeader">
            <div className="backgroundImgabout"></div>
          </div>
          <div className="centered myfontL">
            ABOUT GURU'S
            <p className="myfontS">More about us...</p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <section className="about-mission">
        <div className="about-text">
          <h2>Our Mission</h2>
          <p>
            At Guru's Blog, our mission is to cultivate a welcoming community of
            curious minds, passionate storytellers, and lifelong learners. We strive
            to inspire, educate, and empower our readers through thought-provoking
            articles, personal stories, and practical insights across diverse
            topics—from travel and lifestyle to technology and personal growth.
            Every post is designed to spark curiosity, encourage reflection, and
            connect people from all walks of life.
          </p>
        </div>
        <div className="about-image">
          <img src="/images/mission-community.jpg" alt="Community of thinkers and storytellers" />
        </div>
      </section>

      {/* Vision Section */}
      <section className="about-values">
        <div className="about-image">
          <img src="/images/vision-growth.jpg" alt="Vision of growth and creativity" />
        </div>
        <div className="about-text">
          <h2>Our Vision</h2>
          <p>
            We envision Guru's Blog as a thriving platform where creativity meets
            knowledge, and every voice has the opportunity to be heard. Our goal is
            to foster an environment where learning is continuous, ideas are shared
            freely, and readers feel inspired to explore, create, and grow.
            Collaboration, curiosity, and community guide everything we do.
          </p>
        </div>
      </section>
      <br />

      {/* Optional AboutSection Component */}
      <AboutSection />
      <br></br>

      {/* Footer stays intact as in your project */}
      <hr className="lineBreaker"></hr>
    </>
  );
};

export default AboutPage;

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
// import AboutSection from "../components/AboutPage";

// // ...existing code...
// const AboutPage = () => {
//   return (
//     <>
//       <div id="dashboard" className="content2 grid-containerink">
//         <div className="ianda1">
//           <div className="w3-padding floating-box-test" id="myHeader">
//             <br />
//             <div className="backgroundImgabout"></div>
//             {/* places image in this location */}
//             <br />
//             <br />
//           </div>
//           <div class="centered myfontL">
//             {" "}
//             ABOUT GURU'S <br></br>
//             <p class="myfontS">More about us...</p>
//           </div>
//         </div>
//       </div>
//       <div>
//         <AboutSection />
//         <br />
//         <br />
//         <div className="content">
//           {/* NG CARD */}
//           <div className="card">
//             <div className="layer"></div>
//             <p
//               className="w3-center"
//               style={{
//                 paddingBottom: 0,
//                 height: "90%",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <img
//                 src="./icons.png"
//                 className="w3-circle"
//                 style={{
//                   width: 160,
//                   marginBottom: 40,
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   zIndex: 1,
//                   borderRadius: "10px",
//                 }}
//                 alt="Avatar"
//               />
//             </p>
//             <div className="details">
//               <h2>
//                 SOME TEXT
//                 <br />
//                 <span style={{ color: "#a05b2e" }}>Some more text</span>
//               </h2>
//             </div>
//           </div>
//           <div className="card">
//             <div className="layer"></div>
//             <p
//               className="w3-center"
//               style={{
//                 paddingBottom: 0,
//                 height: "90%",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <img
//                 src="./ng-blue.png"
//                 className="w3-circle"
//                 style={{
//                   width: 160,
//                   marginBottom: 40,
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   zIndex: 1,
//                   borderRadius: "10px",
//                 }}
//                 alt="Avatar"
//               />
//             </p>
//             <div className="details">
//               <h2>
//                 SOME TEXT
//                 <br />
//                 <span>Some more text</span>
//               </h2>
//             </div>
//           </div>

//           <div className="card">
//             <div className="layer"></div>
//             <p
//               className="w3-center"
//               style={{
//                 paddingBottom: 0,
//                 height: "90%",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <img
//                 src="./ng-logo.png"
//                 className="w3-circle"
//                 style={{
//                   width: 160,
//                   marginBottom: 40,
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   zIndex: 1,
//                   borderRadius: "10px",
//                 }}
//                 alt="Avatar"
//               />
//             </p>
//             <div className="details">
//               <h2>
//                 SOME TEXT
//                 <br />
//                 <span>Some more text</span>
//               </h2>
//             </div>
//           </div>

//           <div className="card">
//             <div className="layer"></div>
//             <p
//               className="w3-center"
//               style={{
//                 paddingBottom: 0,
//                 height: "90%",
//                 display: "flex",
//                 alignItems: "center",
//                 justifyContent: "center",
//               }}
//             >
//               <img
//                 src="./ng-log0.png"
//                 className="w3-circle"
//                 style={{
//                   width: 160,
//                   marginBottom: 40,
//                   display: "flex",
//                   alignItems: "center",
//                   justifyContent: "center",
//                   zIndex: 1,
//                   borderRadius: "10px",
//                 }}
//                 alt="Avatar"
//               />
//             </p>
//             <div className="details">
//               <h2>
//                 SOME TEXT
//                 <br />
//                 <span>Some more text</span>
//               </h2>
//             </div>
//           </div>
//           {/* Repeat other cards as needed, fixing className and style usage */}
//           {/* ...other cards... */}
//         </div>
//       </div>
//       <br />
//       <br />
//       <br />
//       <br />
//     </>
//   );
// };

// export default AboutPage;
// // ...existing code...
// AboutPage.jsx
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
            At Guru's Blog, our mission is to create a community of thinkers,
            dreamers, and storytellers. We aim to inspire, educate, and empower
            our readers through diverse topics and engaging stories.
          </p>
        </div>
        <div className="about-image">
          <img src="/images/feature1.jpg" alt="Our Mission" />
        </div>
      </section>

      {/* Vision Section */}
      <section className="about-values">
        <div className="about-image">
          <img src="/images/feature2.jpg" alt="Our Vision" />
        </div>
        <div className="about-text">
          <h2>Our Vision</h2>
          <p>
            We envision a platform where creativity and knowledge meet, allowing
            everyone to grow and share their experiences. Our values are
            centered around learning, inspiration, and community.
          </p>
        </div>
      </section>
      <br></br>

      {/* Optional AboutSection Component */}
      <AboutSection />
      <br></br>

      {/* Footer stays intact as in your project */}
      <hr className="lineBreaker"></hr>
    </>
  );
};

export default AboutPage;

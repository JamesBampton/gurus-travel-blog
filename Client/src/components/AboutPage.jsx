import React from "react";
import styles from "./AboutPage.module.css";

const AboutSection = () => (
  <section className={styles.section}>
    <h2>Four Explorers, One Blog</h2>
    <p>
      We’re four curious souls brought together by a shared bootcamp course and
      an even deeper love for travel. From different corners of life, we’ve
      united to document our journeys through bustling cities, remote villages,
      and everything in between.
    </p>

    <p style={{ color: "#008000" }}>
      Each of us brings a unique lens to the adventure:
    </p>
    <ul>
      <li style={{ color: "#008000", textAlign: "left" }}>
        One of us seeks out forgotten history in quiet ruins and ancient
        streets.
      </li>
      <li style={{ color: "#008000", textAlign: "left" }}>
        Another thrives on meeting locals, learning their stories, and sharing
        laughter over a meal.
      </li>
      <li style={{ color: "#008000", textAlign: "left" }}>
        One is always chasing bold flavors and culinary surprises.
      </li>
      <li style={{ color: "#008000", textAlign: "left" }}>
        And another finds joy in the unexpected, whether it’s a misty mountain
        trail or neon-lit cities.
      </li>
    </ul>

    <p>
      Together, we write not just to record where we’ve been, but to celebrate
      the richness of the world: its people, its past, and its endless variety
      of experiences.
    </p>

    <p>
      Whether you’re a fellow traveler, a dreamer planning your first trip, or
      someone who simply loves a good story, we’re glad you’re here. Let’s
      explore the world together, one post at a time.
    </p>
  </section>
);

export default AboutSection;

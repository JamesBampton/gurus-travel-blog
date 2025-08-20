import React from "react";
import styles from "./AboutPage.module.css";

const AboutSection = () => (
  <section className={`${styles.aboutMission} ${styles.section}`}>
    <div className={styles.aboutText}>
      <h2 className={styles.title}>Four Explorers, One Blog</h2>
      <p className={styles.intro}>
        We’re four curious souls brought together by a shared bootcamp course and
        a deep love for travel. From different corners of life, we’ve united to
        document our journeys through bustling cities, quiet villages, and
        everything in between.
      </p>

      <div className={styles.explorers}>
        <div className={styles.explorerCard}>
          <h3>History Seeker</h3>
          <p>Always exploring forgotten ruins and ancient streets to uncover hidden stories.</p>
        </div>
        <div className={styles.explorerCard}>
          <h3>Culture Enthusiast</h3>
          <p>Thrives on meeting locals, sharing laughter, and understanding new perspectives.</p>
        </div>
        <div className={styles.explorerCard}>
          <h3>Culinary Adventurer</h3>
          <p>Chasing bold flavors and unique culinary experiences from around the world.</p>
        </div>
        <div className={styles.explorerCard}>
          <h3>Spontaneous Explorer</h3>
          <p>Finds joy in the unexpected—from misty mountains to neon-lit city streets.</p>
        </div>
      </div>

      <p className={styles.paragraph}>
        Together, we write not just to record where we’ve been, but to celebrate
        the richness of the world: its people, its past, and its endless variety
        of experiences.
      </p>

      <p className={styles.paragraph}>
        Whether you’re a fellow traveler, a dreamer planning your first trip, or
        someone who simply loves a good story, we’re glad you’re here. Let’s
        explore the world together, one post at a time.
      </p>
    </div>

    <div className={styles.aboutImage}>
      <img src="/public/images/feature5.jpg" alt="Our Team Exploring" />
    </div>
  </section>
);

export default AboutSection;

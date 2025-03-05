/** @format */

import React from "react";
import styles from "./style.module.css";

export default function Milestone() {
  return (
    <section className={styles.milestone}>
      <h2>Our Milestones</h2>
      <p>
        With a steadfast dedication to excellence and innovation, Ireti hub
        africa hopes to meet these milestones
      </p>
      <div className={styles.mile}>
        <div>
          <h3>2025</h3>
          <p>To set up online operations and a physical Hub in Ikorodu Lagos</p>
        </div>
        <div>
          <h3>2026</h3>
          <p>
            Expanded operations to a second location in central area of Ikorodu
          </p>
        </div>
        <div>
          <h3>2027</h3>
          <p>
            Consolidate the operations of Ireti hub in all locations and Online
          </p>
        </div>
      </div>
    </section>
  );
}

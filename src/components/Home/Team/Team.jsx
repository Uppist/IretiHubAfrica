/** @format */

import React from "react";
import styles from "./style.module.css";
import image1 from "../../../assets/Home/Team/team1.png";
import image2 from "../../../assets/Home/Team/team2.png";

export default function Team() {
  return (
    <section className={styles.team}>
      <h2>
        Our <span>Team</span>
      </h2>

      <div>
        <div className={styles.team1}>
          <img src={image1} alt='' />
          <div>
            <h3>Felza Fadhill</h3>
            <span>Partner</span>
          </div>
        </div>
        <div className={styles.team1}>
          <img src={image2} alt='' />
          <div>
            <h3>Ayomide Solanke</h3>
            <span>Partner</span>
          </div>
        </div>
      </div>
    </section>
  );
}

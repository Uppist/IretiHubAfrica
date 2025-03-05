/** @format */

import React from "react";
import styles from "./style.module.css";
import image1 from "../../../assets/Home/Portfolio/portfolio1.png";
import image2 from "../../../assets/Home/Portfolio/portfolio2.png";
import image3 from "../../../assets/Home/Portfolio/portfolio3.png";
import image4 from "../../../assets/Home/Portfolio/portfolio4.png";

export default function Portfolio() {
  return (
    <section className={styles.portfolio}>
      <h2>Portfolio</h2>
      <p>
        IretiHub has provided comic books that improve awareness to social
        issues impacting youth as well as providing materials for education and
        the welfare of the underprivileged in our society through Medical
        outreaches and Children feeding programs.
      </p>

      <div>
        {/* <div className={styles.image1}> */}
        <img src={image1} alt='' />
        <img src={image2} alt='' />
        {/* </div> */}
        {/* <div className={styles.image2}> */}
        <img src={image3} alt='' />
        <img src={image4} alt='' />
        {/* </div> */}
      </div>
    </section>
  );
}

/** @format */

import React from "react";
import styles from "./vision.module.css";
import image from "../../assets/Aboutus/vision.png";

export default function Vision() {
  return (
    <section className={styles.vision}>
      {" "}
      <div>
        <div>
          <h2> Our Vision</h2>
          <p>
            To empower young adults with the skills, training, and mentorship
            needed to excel in their careers. Through hands-on learning,
            networking opportunities, and career guidance, we prepare the next
            generation for the workforce and entrepreneurship
          </p>
        </div>

        <div>
          <h2> Our Mission</h2>
          <p>
            To create a space where young people are equipped with the
            knowledge, skills, and confidence to achieve financial independence,
            career success, and overall well being.
          </p>
        </div>
      </div>
      <img src={image} alt='About Us' />
    </section>
  );
}

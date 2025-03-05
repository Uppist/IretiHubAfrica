/** @format */

import React from "react";
import styles from "./style.module.css";
import image from "../../../assets/Home/Partner/partner.png";
import { Link } from "react-router-dom";

export default function Partner() {
  return (
    <section className={styles.partner}>
      <h2>How To Partner With Us</h2>

      <div>
        <img src={image} alt='' />
        <div className={styles.contact}>
          <div className={styles.texts}>
            <div>
              <h3>Join our Monthly Peer Meetings</h3>
              <span>Engage youth through discussions and networking.</span>
            </div>
            <div>
              {" "}
              <h3>Help us create more Creative Spaces for Youth</h3>
              <span>Provide safe spaces for learning and collaboration.</span>
            </div>
            <div>
              {" "}
              <h3>Join our Digital & Social Media Campaigns</h3>
              <span>Expand our impact through content creation.</span>
            </div>
            <div>
              {" "}
              <h3>Be our Community Partner</h3>
              <span>
                We would like to partner with organizations, schools, and health
                professionals to make knowledge and resources available to young
                people
              </span>
            </div>
          </div>
          <Link to='/contactus'>
            <button>Contact Us</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

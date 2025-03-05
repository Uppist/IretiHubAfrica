/** @format */

import React from "react";
import styles from "./style.module.css";
import image from "../../../assets/Home/Home.jpg";
import image2 from "../../../assets/Home/Home2.jpg";
import { Link } from "react-router-dom";

export default function Empower() {
  return (
    <section className={styles.empower}>
      <img src={image} alt='' className={styles.image} />
      <img src={image2} alt='' className={styles.image2} />
      <div>
        <div className={styles.h2}>
          <h2>
            Empowering Urban Youth with <span>Creativity</span>,{" "}
            <span>Knowledge</span>, and <span>Opportunity</span>.
          </h2>
          <p>
            Providing creative spaces, resources, and opportunities for urban
            youth in Nigeria to thrive in arts, entrepreneurship, and
            reproductive health awareness.
          </p>
        </div>
        <Link to='/service'>
          <button>
            View Services{" "}
            <svg
              width='33'
              height='33'
              viewBox='0 0 33 33'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M5.83337 16.5H27.1667M17.8334 7.16663L27.1667 16.5L17.8334 25.8333'
                stroke='white'
                stroke-width='3'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </button>
        </Link>
      </div>
    </section>
  );
}

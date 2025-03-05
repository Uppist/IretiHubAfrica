/** @format */

import React from "react";
import styles from "./style.module.css";
import image from "../../../assets/Aboutus/aboutus.png";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className={styles.about}>
      <img src={image} alt='About Us' />
      <div>
        <h2>
          {" "}
          About <span>Us</span>
        </h2>
        <p>
          Ireti Hub Africa provides creative spaces for urban youth in Nigeria
          with resources to improve reproductive health and rights information,
          foster entrepreneurship and creativity, and encourage the arts for
          non-STEM focused youths.
        </p>
        <Link to='/aboutus'>
          <button>
            Learn More{" "}
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

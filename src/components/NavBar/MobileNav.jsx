/** @format */

import React from "react";
import styles from "./NavBar.module.css";
import LogoNav from "./LogoNav";
import { Link } from "react-router-dom";

export default function MobileNav({ isSidebarVisible, onClose }) {
  return (
    <div
      className={`${styles.sidebar} ${
        isSidebarVisible ? styles.active : styles["fade-out"]
      }`}
    >
      <div className={styles.imageclose}>
        <Link to='/'>
          <LogoNav />
        </Link>

        <a className='dropdown-close' onClick={onClose}>
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M6.758 17.243L12.001 12M17.244 6.757L12 12M12 12L6.758 6.757M12.001 12L17.244 17.243'
              stroke='#2B2B2B'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </a>
      </div>

      <ul className={styles.sidebarmenu}>
        <Link to='/'>
          {" "}
          <li
            className={styles.sidebarlist}
            onClick={() => {
              onClose();
            }}
          >
            Home
          </li>
        </Link>
        <hr />

        <Link to='/aboutus'>
          <li
            className={styles.sidebarlist}
            onClick={() => {
              onClose();
            }}
          >
            About Us
          </li>
        </Link>
        <hr />

        <Link to='/service'>
          <li
            className={styles.sidebarlist}
            onClick={() => {
              onClose();
            }}
          >
            Projects{" "}
          </li>
        </Link>
        <hr />

        <Link to='/contactus'>
          <li
            className={styles.sidebarcontact}
            onClick={() => {
              onClose();
            }}
          >
            Contact Us
          </li>
        </Link>
      </ul>
    </div>
  );
}

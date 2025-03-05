/** @format */

import React, { useState } from "react";
import styles from "./NavBar.module.css";
import LogoNav from "./LogoNav";
import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";

export default function NavBar() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  function sideBar() {
    setIsSidebarVisible(true);
  }

  function onClose() {
    setIsSidebarVisible(false);
  }

  return (
    <header className={styles.firstsection}>
      <nav className={styles.nav}>
        <Link to='/'>
          <LogoNav />
        </Link>

        <ul className={styles.navul}>
          <Link to='/'>
            <li className={styles.lists}>Home</li>
          </Link>

          <Link to='/aboutus'>
            <li className={styles.lists}>About Us</li>
          </Link>

          <Link to='/service'>
            <li className={styles.lists}>Services </li>
          </Link>

          <Link to='/contactus'>
            <li className={styles.listcontact}>Contact Us</li>
          </Link>

          <li className={styles.listmenu} onClick={sideBar}>
            <a className='dropdown'>
              <svg
                width='27'
                height='26'
                viewBox='0 0 27 26'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M5.41882 18.4188L20.5915 18.4188'
                  stroke='#2B2B2B'
                  strokeWidth='2.16753'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M5.41882 13H20.5915'
                  stroke='#2B2B2B'
                  strokeWidth='2.16753'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M5.41882 7.58118L14.0889 7.58119'
                  stroke='#2B2B2B'
                  strokeWidth='2.16753'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </a>
          </li>
        </ul>

        <MobileNav isSidebarVisible={isSidebarVisible} onClose={onClose} />
      </nav>
    </header>
  );
}

/** @format */

import React from "react";
import Contact from "./Contact";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import styles from "../Home/Home.module.css";

export default function Contactus() {
  return (
    <div className={styles.bg}>
      <NavBar />
      <Contact />
      <Footer />
    </div>
  );
}

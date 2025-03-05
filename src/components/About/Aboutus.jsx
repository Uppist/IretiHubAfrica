/** @format */

import React from "react";
import About from "./About";
import Vision from "./Vision";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import styles from "../Home/Home.module.css";

export default function Aboutus() {
  return (
    <div className={styles.bg}>
      <NavBar />
      <About />
      <Vision />
      <Footer />
    </div>
  );
}

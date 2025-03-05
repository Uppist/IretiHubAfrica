/** @format */

import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Service from "./Service";
import Program from "./Program";
import styles from "../Home/Home.module.css";

export default function Services() {
  return (
    <div className={styles.bg}>
      <NavBar />
      <Service />
      <Program />
      <Footer />
    </div>
  );
}

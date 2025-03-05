/** @format */

import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Empower from "./Empower/Empower";
import About from "./About/About";
import Area from "./Areas/Area";
import Milestone from "./Milestone/Milestone";
import Portfolio from "./Portfolio/Portfolio";
import Team from "./Team/Team";
import Partner from "./Partner/Partner";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles.bg}>
      <NavBar />
      <Empower />
      <About />
      <Area />
      <Milestone />
      <Portfolio />
      <Team />
      <Partner />
      <Footer />
    </div>
  );
}

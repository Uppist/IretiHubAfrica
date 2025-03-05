/** @format */

import React from "react";
import styles from "./style.module.css";
import area from "./Area.json";
import image1 from "../../../assets/Home/Area/area1.png";
import image2 from "../../../assets/Home/Area/area2.png";
import image3 from "../../../assets/Home/Area/area3.png";
import image4 from "../../../assets/Home/Area/area4.png";
import image5 from "../../../assets/Home/Area/area5.png";

export default function Area() {
  const Imagemap = {
    "image1.png": image1,
    "image2.png": image2,
    "image3.png": image3,
    "image4.png": image4,
    "image5.png": image5,
  };
  return (
    <section className={styles.area}>
      <h2>Our Core Focus Areas</h2>

      <div className={styles.container}>
        {area.map((data, index) => (
          <div className={styles.img} key={index}>
            <div className={styles.text}>
              <h2>{data.title}</h2>
              <p>{data.text}</p>
            </div>

            <img src={Imagemap[data.image]} alt='' />
          </div>
        ))}
      </div>
    </section>
  );
}

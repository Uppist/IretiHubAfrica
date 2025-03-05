/** @format */

import React from "react";
import image1 from "../../assets/Services/service1.png";
import image2 from "../../assets/Services/service2.png";
import image3 from "../../assets/Services/service3.png";
import styles from "./service.module.css";
import service from "./Service.json";

export default function Service() {
  const Imagemap = {
    "image1.png": image1,
    "image2.png": image2,
    "image3.png": image3,
  };
  return (
    <section className={styles.area}>
      <h2>
        Our <span>Services</span>
      </h2>

      <div className={styles.container}>
        {service.map((data, index) => (
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

/** @format */

import React from "react";
import program from "./Program.json";
import styles from "./program.module.css";
import image1 from "../../assets/Services/program1.png";
import image2 from "../../assets/Services/program2.png";

export default function Program() {
  const Imagemap = {
    "image1.png": image1,
    "image2.png": image2,
  };
  return (
    <section className={styles.program}>
      <h2>
        Our <span>Program Structure</span>
      </h2>

      <div className={styles.container}>
        {program.map((data, index) => (
          <div className={styles.img} key={index}>
            <div className={styles.text}>
              <h2>{data.title}</h2>

              <ul>
                {[data.li1, data.li2, data.li3, data.li4]
                  .filter((li) => li)
                  .map((li, idx) => (
                    <li>{li}</li>
                  ))}
              </ul>
            </div>

            <img src={Imagemap[data.image]} alt='' />
          </div>
        ))}
      </div>
    </section>
  );
}

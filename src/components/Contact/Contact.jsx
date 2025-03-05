/** @format */

/** @format */

import React, { useState, useEffect, useRef } from "react";
// import emailjs from "@emailjs/browser";
// import "react-toastify/dist/ReactToastify.css";
import styles from "./style.module.css";
import image from "../../assets/Contactus/contact.png";
import image2 from "../../assets/Contactus/contactus.png";

// import { ToastContainer, toast } from "react-toastify";

export default function Contact() {
  const form = useRef();

  // function sendEmail(e) {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm(
  //       "service_ka4dxif",
  //       "template_3wm4105",
  //       form.current,
  //       "Dr_TDKK9HAWTw7qNU"
  //     )
  //     .then(
  //       () => {
  //         toast.success("Message sent!");
  //       },
  //       (error) => {
  //         console.log("emailjs", error);
  //         toast.error("Failed to send email. Please try again.");
  //       }
  //     );
  // }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className={styles.contact}>
      <div className={styles.image}>
        <img src={image} alt='' className={styles.image1} />
        <img src={image2} alt='' className={styles.image2} />
      </div>
      <div className={styles.touch}>
        <div className={styles.form}>
          <h2>Get in Touch</h2>
          <label>Use the form below to contact us</label>
        </div>
        {/* <form onSubmit={sendEmail} ref={form}> */}
        <form>
          <div className={styles.text}>
            <input type='text' placeholder='Full name' name='from_name' />
            <input
              type='phonenumber'
              placeholder='Phone number'
              name='from_number'
            />
            <input type='email' placeholder='Email address' name='from_email' />
            <textarea placeholder='Message' name='message'></textarea>
          </div>
          <button type='submit' className={styles.submit}>
            Send Message
          </button>
        </form>
      </div>

      {/* <Image /> */}
      {/* <ToastContainer /> */}
    </div>
  );
}

import React from "react";
import email from "../../../assets/email.png";
import linkedinIcon from "../../../assets/linkedin.png";

export default function Contact() {
  return (
    <section id="contact">
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src={email}
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p>
            <a href="mailto:seva.kavalenka@gmail.com">
              seva.kavalenka@gmail.com
            </a>
          </p>
        </div>
        <div className="contact-info-container">
          <img
            src={linkedinIcon}
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p>
            <a href="https://www.linkedin.com/in/sevasmith/" target="_blank">
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import aboutPhoto from "../../../assets/about-pic.jpg";
import experience from "../../../assets/experience.png";
import education from "../../../assets/education.png";
import arrow from "../../../assets/arrow.png";

export default function About() {
  return (
    <section id="about">
      <p className="section-text-p1">Get To Know More</p>
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section-pic-container about-pic-container">
          <img src={aboutPhoto} alt="Profile picture" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src={experience} alt="Experience icon" className="icon" />
              <h3>Experience</h3>
              <p>
                Front-End Developer
                <br />
                1 year
                <br />
                10+ projects
              </p>
            </div>
            <div className="details-container">
              <img src={education} alt="Education icon" className="icon" />
              <h3>Education</h3>
              <p>
                BA in Linguistics
                <br />
                LearnFrontEnd Course
                <br />
                Scrimba React Course
              </p>
            </div>
          </div>
          <div className="text-container">
            <p>
              With a BA in Linguistics and a background in translation, I’ve
              always balanced structure and creativity. My passion for
              problem-solving led me to frontend development, where logic meets
              design. After completing a React course, I became captivated by
              building clean, user-friendly interfaces, and I am now seeking a
              React developer role.
            </p>
          </div>
        </div>
      </div>
      <img
        src={arrow}
        className="icon arrow"
        alt="Arrow icon"
        onClick={() => (window.location.href = "#experience")}
      />
    </section>
  );
}

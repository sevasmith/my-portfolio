import React from "react";
import profilePhoto from "../../assets/profile-pic.jpg";
import resume from "../../assets/resume.pdf";
import linkedinIcon from "../../assets/linkedin.png";
import githubIcon from "../../assets/github.png";

export default function Profile() {

  return (
    <section id="profile">
      <div className="section-pic-container">
        <img src={profilePhoto} className="profile-pic" alt="Seva Kavalenka Profile Photo" />
      </div>
      <div className="section-text">
        <h1 className="title name">Seva<br/>Kavalenka</h1>
        <p className="section-text-p2">Frontend Developer</p>
        <div className="btn-container">
          <button className="btn-color-1" onClick={() => window.open(resume, "_blank")}>
            Download CV
          </button>
          <button
            className="btn-color-2"
            onClick={() => (window.location.href = "#contact")}
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={linkedinIcon}
            onClick={() => window.open("https://www.linkedin.com/in/sevasmith/", "_blank")}
            className="icon"
          />
          <img
            src={githubIcon}
            onClick={() => window.open("https://github.com/sevasmith", "_blank")}
            className="icon"
          />
        </div>
      </div>
    </section>
  );
}

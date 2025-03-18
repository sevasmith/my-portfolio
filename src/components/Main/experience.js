import React from "react";
import checkmark from "../../assets/checkmark.png";
import arrow from "../../assets/arrow.png";

export default function Experience() {
  return (
    <section id="experience">
      <p className="section-text-p1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="sub-title">Frontend Development</h2>
            <div className="article-container">
              <article>
                <img src={checkmark} alt="Experience icon" className="icon" />
                <div>
                  <h3>HTML</h3>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" className="icon" />
                <div>
                  <h3>CSS</h3>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" className="icon" />
                <div>
                  <h3>JavaScript</h3>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" className="icon" />
                <div>
                  <h3>React</h3>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" className="icon" />
                <div>
                  <h3>Next.js</h3>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" className="icon" />
                <div>
                  <h3>TypeScript</h3>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" className="icon" />
                <div>
                  <h3>Tailwind&nbsp;CSS</h3>
                </div>
              </article>
              <article>
                <img src={checkmark} alt="Experience icon" className="icon" />
                <div>
                  <h3>Git</h3>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <img
        src={arrow}
        className="icon arrow"
        alt="Arrow icon"
        onClick={() => (window.location.href = "#projects")}
      />
    </section>
  );
}

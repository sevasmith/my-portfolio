import React from "react";
import Nav from "./components/Nav/nav.js";
import Profile from "./components/Main/profile.js";
import About from "./components/Main/about.js";
import Experience from "./components/Main/experience.js";
import Projects from "./components/Main/projects.js";
import Contact from "./components/Main/contact.js";
import Footer from "./components/Footer/footer.js";

export default function App() {
  return (
    <>
      <Nav />
      <Profile />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

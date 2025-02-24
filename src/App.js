import React from "react";
import Nav from "./components/Nav/nav.js";
import Profile from "./components/Main/Profile/profile.js";
import About from "./components/Main/About/about.js";
import Experience from "./components/Main/Experience/experience.js";
import Projects from "./components/Main/Projects/projects.js";
import Contact from "./components/Main/Contact/contact.js";
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

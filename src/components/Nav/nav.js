import React from "react";

export default function Nav() {
  const [menuIsOpen, setMenuIsOpen] = React.useState(false);

  function toggleMenu() {
    setMenuIsOpen((prevMenuIsOpen) => !prevMenuIsOpen);
  }

  return (
    <>
      <nav id="desctop-nav">
        <h1 className="logo">Seva Kavalenka</h1>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <h1 className="logo">Seva Kavalenka</h1>
        <div className="hamburger-menu">
          <div
            className={`hamburger-icon ${menuIsOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={`menu-links ${menuIsOpen ? "open" : ""}`}>
            <a href="#about" onClick={toggleMenu}>
              About
            </a>
            <a href="#experience" onClick={toggleMenu}>
              Experience
            </a>
            <a href="#project" onClick={toggleMenu}>
              Projects
            </a>
            <a href="#contact" onClick={toggleMenu}>
              Contact
            </a>
          </div>
        </div>
      </nav>
    </>
  );
}

import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  window.addEventListener("scroll", handleScroll);
  return (
    <div className={`Navbar ${scrolled ? "scrolled" : ""}`}>
      <button
        onClick={() => {
          const element = document.getElementById("Home");
          const navbarHeight = window.innerHeight * 0.1;
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - navbarHeight;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          const element = document.getElementById("About");
          const navbarHeight = window.innerHeight * 0.1;
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - navbarHeight;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }}
      >
        About
      </button>
      <button
        onClick={() => {
          const element = document.getElementById("Projects");
          const navbarHeight = window.innerHeight * 0.1;
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - navbarHeight;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }}
      >
        Projects
      </button>
      <button
        onClick={() => {
          const element = document.getElementById("Contact");
          const navbarHeight = window.innerHeight * 0.1;
          const elementPosition =
            element.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = elementPosition - navbarHeight;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }}
      >
        Contact
      </button>
    </div>
  );
};

export default Navbar;

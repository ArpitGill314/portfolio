import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollTo, setScrollTo] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollTo && location.pathname === "/") {
      const element = document.getElementById(scrollTo);
      if (element) {
        const navbarHeight = window.innerHeight * 0.1;
        const elementPosition =
          element.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = elementPosition - navbarHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
        setScrollTo(null);
      }
    }
  }, [scrollTo, location]);

  const handleNavigation = (id) => {
    if (location.pathname === "/") {
      setScrollTo(id);
    } else {
      setScrollTo(id);
      navigate("/");
    }
  };

  return (
    <div className={`Navbar ${scrolled ? "scrolled" : ""}`}>
      <button onClick={() => handleNavigation("Home")}>Home</button>
      <button onClick={() => handleNavigation("About")}>About</button>
      <button onClick={() => handleNavigation("Projects")}>Projects</button>
      <button onClick={() => handleNavigation("Contact")}>Contact</button>
    </div>
  );
};

export default Navbar;

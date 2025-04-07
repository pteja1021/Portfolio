
import { useEffect, useRef, useState } from "react";
import "./Navbar.css";

const SECTIONS = ["intro", "about", "experience", "projects", "contact"];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("intro");
  const navRef = useRef(null);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setOpen(false);
    }
  };

  useEffect(() => {
    const updateNavHeight = () => {
      if (navRef.current) {
        const height = navRef.current.offsetHeight;
        document.documentElement.style.setProperty("--nav-height", `${height}px`);
      }
    };
    updateNavHeight();
    window.addEventListener("resize", updateNavHeight);
    return () => window.removeEventListener("resize", updateNavHeight);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.innerHeight / 3;
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= offset && rect.bottom >= offset) {
            setActive(id);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="nav" ref={navRef}>
      <div className="nav-inner">
        <div className="nav-logo" onClick={() => scrollTo("intro")}>Teja</div>
        <ul className={`nav-links ${open ? "open" : ""}`}>
          {SECTIONS.slice(1).map((id) => (
            <li
              key={id}
              onClick={() => scrollTo(id)}
              className={active === id ? "active" : ""}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </li>
          ))}
        </ul>
        <div className={`hamburger ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
          <span /><span /><span />
        </div>
      </div>
    </nav>
  );
}

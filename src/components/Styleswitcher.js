import { useEffect, useState } from "react";
import "../assets/css/styleswitcher.css";

function Styleswitcher() {
  const [darkMode, setDarkMode] = useState(false);
  const [activeColor, setActiveColor] = useState("#fa5b0f");
  const [isOpen, setIsOpen] = useState(false);

  // Load saved settings
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const savedColor = localStorage.getItem("color");

    if (savedTheme === "dark") {
      document.body.classList.add("dark");
      setDarkMode(true);
    }

    if (savedColor) {
      document.documentElement.style.setProperty("--skin-color", savedColor);
      setActiveColor(savedColor);
    }
  }, []);

  // Dark Mode Toggle
  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);

    if (newMode) {
      document.body.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Change Theme Color (Modern Method)
  const changeColor = (color) => {
    document.documentElement.style.setProperty("--skin-color", color);
    setActiveColor(color);
    localStorage.setItem("color", color);
  };

  const colors = [
    "#ec1839",
    "#7afc16",
    "#37b182",
    "#1854b4",
    "#f021b2"
  ];

  return (
    <div className={`style-switcher ${isOpen ? "open" : ""}`}>
      <div
        className="style-switcher-toggler s-icon"
        onClick={() => setIsOpen(!isOpen)}
      >
        <i className="fas fa-cog"></i>
      </div>

      <div className="day-night s-icon" onClick={toggleDarkMode}>
        <i className={`fas ${darkMode ? "fa-sun" : "fa-moon"}`}></i>
      </div>

      <h4>Theme Colors</h4>

      <div className="colors">
        {colors.map((color) => (
          <span
            key={color}
            onClick={() => changeColor(color)}
            style={{
              background: color,
              border:
                activeColor === color
                  ? "3px solid #000"
                  : "2px solid transparent"
            }}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Styleswitcher;

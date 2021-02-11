import { useEffect } from "react";
import { Link } from "react-router-dom";

// Header component
const Header = () => {
  // Check for saved user preference
  useEffect(() => {
    const themeToggle = document.querySelector(".header__theme-checkbox");
    const currentTheme = localStorage.getItem("theme")
      ? localStorage.getItem("theme")
      : "light";

    if (currentTheme) {
      document.documentElement.setAttribute("data-theme", currentTheme);
      // If theme is === dark then check the checkbox (toggle)
      if (currentTheme === "dark") {
        themeToggle.checked = true;
      }
    }
  });

  // Handle theme toggle
  const handleThemeToggle = (e) => {
    if (e.target.checked) {
      // Set data-theme attribute to the document element (html)
      document.documentElement.setAttribute("data-theme", "dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.setAttribute("data-theme", "light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="header">
      <div className="container">
        <Link to="/">
          <h1 className="header__title">Where in the world?</h1>
        </Link>
        <div className="header__theme">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path d="M279.135 512c78.756 0 150.982-35.804 198.844-94.775 28.27-34.831-2.558-85.722-46.249-77.401-82.348 15.683-158.272-47.268-158.272-130.792 0-48.424 26.06-92.292 67.434-115.836 38.745-22.05 28.999-80.788-15.022-88.919A257.936 257.936 0 0 0 279.135 0c-141.36 0-256 114.575-256 256 0 141.36 114.576 256 256 256zm0-464c12.985 0 25.689 1.201 38.016 3.478-54.76 31.163-91.693 90.042-91.693 157.554 0 113.848 103.641 199.2 215.252 177.944C402.574 433.964 344.366 464 279.135 464c-114.875 0-208-93.125-208-208s93.125-208 208-208z"></path>
          </svg>
          <label className="header__theme-label">
            <input
              type="checkbox"
              name="theme-switcher"
              className="header__theme-checkbox"
              aria-label="Choose between ligh and dark theme."
              onChange={handleThemeToggle}
            />
            <div className="header__slider round"></div>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;

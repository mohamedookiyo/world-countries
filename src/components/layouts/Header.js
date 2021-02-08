import { useEffect } from "react";

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
        <h1 className="header__title">Where in the world?</h1>
        <div className="header__theme">
          <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 0c1.516 0 2.925.566 3.978 1.523A3.979 3.979 0 008 1a4.014 4.014 0 00-2.821 1.179A3.927 3.927 0 004 5c0 1.095.463 2.105 1.179 2.821A3.927 3.927 0 008 9a4.034 4.034 0 003.974-3.548c.017.18.026.364.026.548a6.02 6.02 0 01-1.768 4.232A6.02 6.02 0 016 12a5.89 5.89 0 01-4.232-1.768A6.02 6.02 0 010 6a5.89 5.89 0 011.768-4.232A6.02 6.02 0 016 0z" />
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

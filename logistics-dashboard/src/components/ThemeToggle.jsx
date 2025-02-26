import React from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = ({ toggleTheme, theme }) => {
  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
    >
      {theme === "light" ? (
        <FaMoon className="text-gray-800" size={20} />
      ) : (
        <FaSun className="text-yellow-400" size={20} />
      )}
    </button>
  );
};

export default ThemeToggle;

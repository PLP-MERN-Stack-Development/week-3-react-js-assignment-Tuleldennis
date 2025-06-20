import React from "react";
import { useTheme } from "./ThemeContext";

const Navbar = () => {
  const { dark, setDark } = useTheme();

  const toggleTheme = () => {
    setDark((prev) => !prev);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">
        PLP Task Manager
      </h1>
      <button
        onClick={toggleTheme}
        className="px-4 py-2 text-sm rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
      >
        {dark ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;

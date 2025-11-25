import useTheme from "../hooks/useTheme";
import { FaReact } from "react-icons/fa";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white shadow z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        <h1 className="text-xl font-bold flex items-center">
          <FaReact className="text-3xl text-blue-500 mr-3" aria-hidden="true" />
          <span>SOK RITHY</span>
        </h1>

        <div className="flex items-center space-x-6 text-sm">
          <a href="/#manual" className="hover:text-blue-500 dark:hover:text-blue-400">Manual</a>
          <a href="/#mobile" className="hover:text-blue-500 dark:hover:text-blue-400">Mobile</a>
          <a href="/#automation" className="hover:text-blue-500 dark:hover:text-blue-400">Automation</a>
          <a href="/#projects" className="hover:text-blue-500 dark:hover:text-blue-400">Projects</a>
          <a
            href="/automation-demo"
            className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-500 transition"
            role="button"
          >
            Demo
          </a>

          {/* Light / Dark Mode Toggle */}
          <button
            onClick={toggleTheme}
            className="px-3 py-1 border rounded-lg bg-gray-200 dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {theme === "light" ? "🌙 Dark" : "☀️ Light"}
          </button>
        </div>
      </div>
    </nav>
  );
}

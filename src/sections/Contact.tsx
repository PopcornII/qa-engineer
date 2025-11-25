import React from "react";

export default function Contact() {
  const email = "mailto:youremail@example.com";
  const phone = "tel:+1234567890";
  const linkedin = "https://www.linkedin.com/in/yourprofile";
  const github = "https://github.com/yourusername";

  const contacts = [
    {
      href: email,
      label: "Email",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M16 12H8m8 0l-4 4m4-4l-4-4M4 6h16v12H4z"
          ></path>
        </svg>
      ),
    },
    {
      href: phone,
      label: "Phone",
      icon: (
        <svg
          className="w-7 h-7"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 5h2l2 5-1 2a11 11 0 005 5l2-1 5 2v2a2 2 0 01-2 2h-1A18 18 0 013 5V4a1 1 0 011-1z"
          ></path>
        </svg>
      ),
    },
    {
      href: linkedin,
      label: "LinkedIn",
      newTab: true,
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.1c.6-1.1 2.1-2.2 4.3-2.2 4.6 0 5.5 3 5.5 6.9V24h-5V15.6c0-2-0.03-4.6-2.8-4.6-2.8 0-3.2 2.2-3.2 4.5V24H7.5V8z" />
        </svg>
      ),
    },
    {
      href: github,
      label: "GitHub",
      newTab: true,
      icon: (
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 .5C5.73.5.98 5.25.98 11.52c0 4.63 3 8.56 7.17 9.95.52.1.71-.23.71-.5v-1.77c-2.91.63-3.52-1.4-3.52-1.4-.48-1.2-1.17-1.52-1.17-1.52-.95-.66.07-.65.07-.65 1.06.08 1.61 1.1 1.61 1.1.94 1.61 2.47 1.14 3.07.87.1-.68.36-1.14.65-1.4-2.33-.27-4.78-1.17-4.78-5.2 0-1.15.41-2.08 1.09-2.82-.11-.27-.47-1.36.1-2.83 0 0 .89-.28 2.9 1.08a10.12 10.12 0 012.64-.36c.9 0 1.8.12 2.64.36 2.01-1.36 2.9-1.08 2.9-1.08.57 1.47.21 2.56.1 2.83.68.74 1.09 1.67 1.09 2.82 0 4.04-2.46 4.93-4.8 5.19.37.32.7.95.7 1.92v2.85c0 .27.19.61.72.5C20 20.07 23 16.2 23 11.52 23 5.25 18.27.5 12 .5z" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>

        <p className="text-gray-600 dark:text-gray-300 mb-10 max-w-xl">
          I'm open to opportunities and freelance work — reach out for QA
          automation, mobile automation, API testing, load testing, or consulting
          for banking and enterprise applications.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-md">
          {contacts.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.newTab ? "_blank" : undefined}
              rel={item.newTab ? "noopener noreferrer" : undefined}
              className="flex flex-col items-center gap-2 p-4 rounded-xl border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition shadow-sm"
            >
              <div className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition">
                {item.icon}
              </div>
              <span className="text-sm">{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

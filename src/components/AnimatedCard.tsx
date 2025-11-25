import React from "react";

interface Props {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function AnimatedCard({ title, description, icon }: Props) {
  return (
    <div
      className="
        bg-white dark:bg-gray-800 
        p-6 rounded-xl shadow-md 
        transform transition-all duration-300 
        hover:-translate-y-2 hover:shadow-xl 
        hover:bg-blue-50 dark:hover:bg-gray-700
        animate-fadeIn
      "
    >
      <div className="text-3xl mb-3">{icon}</div>

      <h3 className="text-xl font-semibold dark:text-white">{title}</h3>
      <p className="mt-2 text-gray-600 dark:text-gray-300">
        {description}
      </p>
    </div>
  );
}

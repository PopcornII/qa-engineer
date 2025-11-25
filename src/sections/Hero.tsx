import pf from "../assets/pf.png";
import bgwave from "../assets/option1.json";
import Lottie from "lottie-react";

export default function Hero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white py-12">
      {/* Full-section Lottie background */}
      <div className="absolute  inset-0 z-0 pointer-events-none" aria-hidden="true">
        <Lottie
          animationData={bgwave}
          loop={true}
          style={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
            opacity: 0.35,
          }}
        />
        <Lottie
          animationData={bgwave}
          loop={true}
          style={{
            width: "100%",
            height: " 160%",
            overflow: "hidden",
            opacity: 0.25,
            transform: "-translateX(15%) translateY(10%)",
          }}
        />
      </div>

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center md:items-start gap-8 relative z-10">
        {/* Profile image (static) */}
        <div className="flex-shrink-0 flex flex-col items-center">
          <div className="relative w-36 h-36 md:w-48 md:h-48">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-72 overflow-hidden" style={{ borderRadius: '10%' }}>
                <img src={pf} alt="Profile" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Intro text */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold">Hi — I'm a QA Engineer</h1>
          <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg max-w-xl">
              Experienced in Manual, Mobile and Web testing focused on banking
              service applications — mobile and web banking portals, core banking
              integrations, payment gateways, and customer-facing banking features.
          </p>

          <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start" aria-hidden="false">
            <span className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full">Manual Testing</span>
            <span className="px-3 py-1 text-sm bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-full">Mobile Testing</span>
            <span className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">WebdriverIO</span>
            <span className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 rounded-full">Appium</span>
            <span className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">k6 (API Load)</span>
            <span className="px-3 py-1 text-sm bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full">Postman</span>
            <span className="px-3 py-1 text-sm bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full">API Automation</span>
            <span className="px-3 py-1 text-sm bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 rounded-full">Banking Domain</span>
          </div>

          <a
            href="#projects"
            className="mt-6 inline-block px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-lg text-white"
            aria-label="Explore my projects and test work"
          >
            Explore Projects & Tests
          </a>
        </div>
      </div>
    </section>
  );
}


import { useState } from "react";
import bgwave1 from "../assets/option1.json";
import Lottie from "lottie-react";

export default function About() {
  return (
    <section id="about" className="py-16 bg-white dark:bg-gray-800">
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
         <Lottie
          animationData={bgwave1}
          loop={true}
          style={{
            width: "100%",
            height: "100%",
            overflow: "hidden",
            opacity: 0.35,
            transform: "translateY(100%)",
          }}
        />
      </div>
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">About Me</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <div className="md:col-span-1 flex items-center">
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-gray-100 dark:border-gray-700 shadow">
                  <img src="/profile.svg" alt="Profile" className="w-full h-full object-cover" />
                </div>
              </div>

              <svg className="absolute -inset-1 w-full h-full pointer-events-none animate-spin-slow" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <defs>
                  <linearGradient id="gAbout" x1="0" x2="1">
                    <stop offset="0%" stopColor="#60A5FA" stopOpacity="1" />
                    <stop offset="50%" stopColor="#7C3AED" stopOpacity="1" />
                    <stop offset="100%" stopColor="#F472B6" stopOpacity="1" />
                  </linearGradient>
                </defs>
                <circle cx="50" cy="50" r="46" fill="none" stroke="url(#gAbout)" strokeWidth="4" strokeLinecap="round" strokeDasharray="14 6" opacity="0.9" />
              </svg>
            </div>
          </div>

          <div className="md:col-span-2">
            {/* <p className="text-gray-700 dark:text-gray-300">
              I'm a dedicated QA Engineer specializing in Manual, Mobile and Web testing with practical
              automation experience using WebdriverIO, Appium, k6 and Postman. I focus on
              Banking & Financial services — specifically on mobile and web banking service
              applications and portals. I build reliable test suites, validate core-banking
              integrations and payment flows, and collaborate with engineering and product teams to
              deliver secure, compliant banking software.
            </p> */}

            {/* <h3 className="mt-6 text-lg font-semibold text-gray-900 dark:text-white">Skills</h3>
            <ul className="mt-3 flex flex-wrap gap-2">
              {[
                "Manual Testing",
                "Mobile Testing",
                "Web Portal Testing",
                "Mobile Automation (Appium)",
                "API Testing (k6 / Postman)",
                "Web Automation (WebdriverIO)",
                "CI/CD",
              ].map((s) => (
                <li
                  key={s}
                  className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-sm rounded-full text-gray-800 dark:text-gray-100"
                >
                  {s}
                </li>
              ))}
            </ul> */}

            {/* <div className="mt-6">
              <a
                href="#projects"
                className="inline-block px-5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg"
              >
                See Projects
              </a>
            </div> */}

            {/* Experience & Education with show-more toggle */}
            <AboutDetails />
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutDetails() {
  const [showMore, setShowMore] = useState(false);

  const experience = [
    {
      title: "QA Engineer — Canadia Technology Group",
      period: "2024 — Present",
      desc: `Develop and maintain automated test suites for Canadia Bank’s mobile banking app and web portal. 
      Perform comprehensive testing of account management, funds transfers, bill payments, biometric authentication, 
      and core-banking API integrations. Support CI/CD pipelines by contributing to regression suites, 
      security validation, and continuous quality improvement across digital banking platforms.`,
    },
    {
      title: "Project Solution and Testing — Sathapana Bank",
      period: "2022 — 2024",
      desc: `Performed manual testing across Sathapana Bank’s digital ecosystem, Mobile Banking and Portal, 
      Loyalty Program and Portal, including DSA and Portal, Core Banking, Merchant App and Portal, Referral App and Portal, 
      Sathapana Payment Gateway, and the Sathapana website. Conducted end-to-end testing of KYC flows, reconciliation processes, 
      reporting modules, and overall functional and UI/UX quality. Prepared detailed test plans, 
      test cases, and compliance documentation to support regulatory and quality assurance standards.`,
    },
  ];

  const education = [
    { title: "Bachelor Software Engineering — Norton University", period: "2021 — 2025" },
  ];

  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Experience</h4>
          <ul className="mt-3 space-y-4 text-gray-700 dark:text-gray-300">
            {(showMore ? experience : experience.slice(0, 1)).map((e) => (
              <li key={e.title}>
                <div className="font-medium">{e.title}</div>
                <div className="text-sm">{e.period}</div>
                <div className="text-sm mt-1">{e.desc}</div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Education</h4>
          <ul className="mt-3 space-y-4 text-gray-700 dark:text-gray-300">
            {(showMore ? education : education.slice(0, 1)).map((e) => (
              <li key={e.title}>
                <div className="font-medium">{e.title}</div>
                <div className="text-sm">{e.period}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-4">
        <button
          onClick={() => setShowMore((s) => !s)}
          className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
          aria-expanded={showMore}
        >
          {showMore ? "Show less" : "Show more"}
        </button>
      </div>
    </div>
  );
}

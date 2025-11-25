
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: "mobile-app",
    title: "Mobile Banking App — Mobile UI",
    short: "Mobile UI test plan and Appium automation: onboarding, payment flow UI, account management.",
    details:
      "Full Appium automation and manual testing for onboarding, funds transfer flows, biometric auth, push notifications, and accessibility across Android and iOS. Worked on edge cases, flaky UI stabilization and device matrix coverage.",
  },
  {
    id: "payment-gateway",
    title: "Payment Gateway — API Testing",
    short: "API-focused suites: transaction APIs, 3DS, webhooks and idempotency.",
    details:
      "Designed contract and integration tests for payment APIs, simulated 3DS flows, validated webhook reliability and idempotency. Implemented Postman/Newman suites and k6 scripts for performance scenarios.",
  },
  {
    id: "web-portal",
    title: "Web Portal — UI & Functional Testing",
    short: "Form validation, session/auth flows, payment flows and cross-browser checks.",
    details:
      "End-to-end scenarios for customer-facing web banking portals: session management, SSO/OAuth flows, payment authorizations, accessibility, and cross-browser compatibility testing.",
  },
  {
    id: "merchant-app",
    title: "Merchant App — Onboarding & Payments",
    short: "Merchant onboarding, reconciliation and reporting test coverage.",
    details:
      "Test coverage for merchant onboarding, transaction reconciliation, reporting dashboards, and error handling for high-volume merchant flows.",
  },
  {
    id: "automation-suite",
    title: "Automation Suite (Web, Mobile & API)",
    short: "WebdriverIO, Appium, Postman/Newman and k6 integrated into CI.",
    details:
      "Built shared automation frameworks, reusable page objects, API helpers and CI gates for regression to keep releases stable across web, mobile and API layers.",
  },
];

export default function Projects() {
  const [openId, setOpenId] = useState<string | null>(null);
  const detailRef = useRef<HTMLDivElement | null>(null);

  const FADE_MS = 200; // Tailwind duration-200
  const SCROLL_MS = 160; // custom scroll duration

  // custom smooth scroll helper with easing
  const smoothScrollTo = (target: HTMLElement, duration = SCROLL_MS) => {
    const rect = target.getBoundingClientRect();
    const targetY = rect.top + window.pageYOffset - window.innerHeight / 2 + rect.height / 2;
    const startY = window.pageYOffset;
    const diff = targetY - startY;
    let startTime: number | null = null;

    const easeInOut = (t: number) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t);

    const step = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const time = timestamp - startTime;
      const progress = Math.min(1, time / duration);
      const eased = easeInOut(progress);
      window.scrollTo(0, Math.round(startY + diff * eased));
      if (time < duration) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  // trigger fade-in and scroll when detail opens
  useEffect(() => {
    if (openId && detailRef.current) {
      detailRef.current.classList.remove("opacity-0", "-translate-y-3", "pointer-events-none");
      detailRef.current.classList.add("opacity-100", "translate-y-0");

      // sync scroll to begin on next frame for smooth appearance
      requestAnimationFrame(() => {
        smoothScrollTo(detailRef.current as HTMLElement, SCROLL_MS);
      });
    }
  }, [openId]);

  const closeDetail = () => {
    if (!detailRef.current) return;
    detailRef.current.classList.remove("opacity-100", "translate-y-0");
    detailRef.current.classList.add("opacity-0", "-translate-y-3", "pointer-events-none");
    setTimeout(() => setOpenId(null), FADE_MS);
  };

  return (
    <section id="projects" className="py-20 bg-gray-900 dark:bg-black text-white dark:text-gray-200">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 pb-4 gap-6 lg:flex lg:flex-nowrap lg:overflow-x-auto lg:space-x-6 lg:-mx-3 lg:px-3 lg:snap-x lg:snap-mandatory projects-scroll">
          {projects.map((p) => (
            <button
              key={p.id}
              onClick={() => {
                if (openId === p.id) {
                  closeDetail();
                } else {
                  if (openId) {
                    closeDetail();
                    setTimeout(() => setOpenId(p.id), FADE_MS);
                  } else {
                    setOpenId(p.id);
                  }
                }
              }}
              className="project-card text-left p-6 bg-gray-800 rounded-xl lg:flex-shrink-0 lg:w-1/4 lg:min-w-[300px] lg:snap-start transition-transform transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl duration-300 ease-out"
              aria-expanded={openId === p.id}
            >
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="mt-2 text-gray-300">{p.short}</p>
            </button>
          ))}
        </div>

        {/* Inline detail / modal area - rendered after the card list so scrolling centers it */}
        <div className="mt-8">
          {openId && (
            <div
              ref={detailRef}
              className="bg-gray-800 p-6 rounded-xl shadow-xl transform transition duration-200 ease-out opacity-0 -translate-y-3 pointer-events-none will-change-all"
              role="dialog"
              aria-modal="true"
              aria-hidden={true}
            >
              <div className="flex items-start justify-between">
                <h3 className="text-2xl font-semibold">
                  {projects.find((x) => x.id === openId)?.title}
                </h3>
                <button
                  onClick={closeDetail}
                  className="ml-4 px-3 py-1 bg-gray-700 rounded text-sm hover:bg-gray-600"
                  aria-label="Close details"
                >
                  Close
                </button>
              </div>

              <p className="mt-4 text-gray-300">
                {projects.find((x) => x.id === openId)?.details}
              </p>

              <div className="mt-4 flex gap-2">
                <a href="#contact" className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded">
                  Discuss this project
                </a>
                <button
                  onClick={() => {
                    if (detailRef.current) {
                      detailRef.current.classList.remove("opacity-100", "translate-y-0");
                      detailRef.current.classList.add("opacity-0", "-translate-y-3");
                      setTimeout(() => {
                        if (detailRef.current) {
                          detailRef.current.classList.remove("opacity-0", "-translate-y-3");
                          detailRef.current.classList.add("opacity-100", "translate-y-0");
                          requestAnimationFrame(() => {
                            smoothScrollTo(detailRef.current as HTMLElement, SCROLL_MS);
                          });
                        }
                      }, FADE_MS);
                    }
                  }}
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded"
                >
                  Re-center
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

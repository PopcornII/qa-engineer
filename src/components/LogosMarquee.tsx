
export default function LogosMarquee() {
  const logos = [
    { key: "wd", label: "WebdriverIO" },
    { key: "app", label: "Appium" },
    { key: "k6", label: "k6" },
    { key: "pm", label: "Postman" },
    { key: "bank", label: "Banking" },
    { key: "ci", label: "CI/CD" },
  ];

  return (
    <section aria-hidden="false" className="py-6 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 overflow-hidden">
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
          .marquee-track { display: flex; gap: 1rem; align-items: center; }
        `}</style>

        <div className="relative w-full">
          <div
            className="marquee overflow-hidden"
            style={{
              WebkitMaskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)",
            }}
          >
            <div
              className="marquee-track"
              style={{
                width: "200%",
                animation: "marquee 20s linear infinite",
              }}
            >
              {/* two copies for seamless loop */}
              {[...logos, ...logos].map((l, i) => (
                <div
                  key={`${l.key}-${i}`}
                  className="flex items-center justify-center w-20 h-20 bg-white/90 dark:bg-gray-800/70 rounded-full shadow-sm text-xs font-semibold text-gray-800 dark:text-gray-100 overflow-hidden"
                  title={l.label}
                >
                  {/* placeholder - replace with <img> if you have assets */}
                  <span className="text-center px-2">{l.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

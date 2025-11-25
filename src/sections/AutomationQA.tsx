import AnimatedCard from "../components/AnimatedCard";
import { FiCpu, FiGlobe, FiServer } from "react-icons/fi";

export default function AutomationQA() {
  return (
    <section
      id="automation"
      className="py-20 bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
    >
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 text-center">
          Automation Testing
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <AnimatedCard
            title="WebdriverIO"
            description="End-to-end web automation, resilient selectors, parallel runs and CI integration."
            icon={<FiGlobe />}
          />

          <AnimatedCard
            title="Appium (Mobile Automation)"
            description="Mobile UI automation using Appium for real devices and emulators; integrates with WebdriverIO or runs standalone."
            icon={<FiCpu />}
          />

          <AnimatedCard
            title="k6 / Postman"
            description="API load & functional testing: Postman/Newman for functional and contract checks; k6 for load, performance and gateway resilience tests."
            icon={<FiServer />}
          />
        </div>
      </div>
    </section>
  );
}

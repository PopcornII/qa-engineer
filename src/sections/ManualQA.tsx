import useScrollAnimation from "../hooks/useScrollAnimation";

export default function ManualQA() {
  const ref = useScrollAnimation();

  return (
    <section id="manual" ref={ref} className="py-20 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-4">Manual Testing</h2>

        <p className="text-gray-700">
          Hands-on manual testing across Web and Mobile platforms with a strong focus on
          Banking and enterprise workflows. I perform exploratory, functional, regression and
          acceptance testing while collaborating with product and engineering teams.
        </p>

        <h3 className="mt-6 text-lg font-semibold">Coverage & Artifacts</h3>
        <p className="text-gray-700 mt-2">
          I design traceable test coverage using test plans, traceability matrices and prioritized test suites.
          Artifacts include test plans, mapped requirements, test cases, test execution reports and defect logs.
        </p>

        <ul className="list-disc ml-6 mt-4 text-gray-700">
          <li>Test case design & execution for feature and regression coverage</li>
          <li>Traceability matrices and requirement-to-test mapping</li>
          <li>Test execution reporting, pass/fail metrics and coverage dashboards</li>
          <li>Defect triage, reproducible steps, impact assessment and risk analysis</li>
        </ul>

        <h3 className="mt-6 text-lg font-semibold">UI/UX & Usability Testing</h3>
        <p className="text-gray-700 mt-2">
          Evaluate user flows, visual consistency, accessibility and usability heuristics. Run moderated and
          unmoderated usability sessions, capture feedback and turn observations into acceptance criteria.
        </p>

        <ul className="list-disc ml-6 mt-4 text-gray-700">
          <li>Heuristic evaluation and UI consistency checks</li>
          <li>Usability testing (task-based, moderated/unmoderated)</li>
          <li>Accessibility checks (WCAG basics), color contrast and keyboard navigation</li>
          <li>User journey validation and error-recovery flows</li>
        </ul>

        <h3 className="mt-6 text-lg font-semibold">Web Portal Specifics</h3>
        <p className="text-gray-700 mt-2">
          Web portal testing focuses on form validation, session handling, payment flows, multi-factor authentication,
          cross-browser compatibility and resilience under intermittent connectivity.
        </p>

        <ul className="list-disc ml-6 mt-4 text-gray-700">
          <li>Form validation, client/server input sanitization and error messaging</li>
          <li>Session and authentication flows (MFA, SSO) and secure logout behavior</li>
          <li>Payment flow validation and reconciliation checks with edge-case scenarios</li>
          <li>Cross-browser and responsive verification for desktop and tablet breakpoints</li>
        </ul>
      </div>
    </section>
  );
}

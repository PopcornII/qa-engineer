import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import LogosMarquee from "./components/LogosMarquee";
import ManualQA from "./sections/ManualQA";
import MobileQA from "./sections/MobileQA";
import AutomationQA from "./sections/AutomationQA";
import Projects from "./sections/Projects";
import About from "./sections/About";
import Contact from "./sections/Contact";
import AutomationDemo from "./pages/AutomationDemo";

export default function App() {
  const isDemo = typeof window !== "undefined" && window.location.pathname === "/automation-demo";
  return (
    <>
      <Navbar />
      <main className="pt-16">{/* offset for fixed Navbar (64px) */}
        {isDemo ? (
          <AutomationDemo />
        ) : (
          <>
            <Hero />
            <LogosMarquee />
            <About />
            <ManualQA />
            <MobileQA />
            <AutomationQA />
            <Projects />
            <Contact />
          </>
        )}
      </main>
    </>
  );
}

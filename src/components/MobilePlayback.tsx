import { useEffect, useState } from "react";

type MobilePlaybackProps = {
  autoplay?: boolean;
  loop?: boolean;
  autoResetDelay?: number; // ms
};

export default function MobilePlayback({ autoplay = true, loop = false, autoResetDelay = 2000 }: MobilePlaybackProps) {
  const [step, setStep] = useState<"idle" | "typing" | "submitting" | "done">("idle");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    let timers: number[] = [];
    if (!playing) return () => {};

    // sequence: typing email -> typing password -> press login -> show dashboard
    setStep("typing");
    timers.push(
      window.setTimeout(() => setEmail("user@example.com"), 600)
    );
    timers.push(
      window.setTimeout(() => setPassword("••••••••"), 1300)
    );
    timers.push(
      window.setTimeout(() => setStep("submitting"), 2000)
    );
    timers.push(
      window.setTimeout(() => setStep("done"), 2600)
    );

    return () => timers.forEach((t) => clearTimeout(t));
  }, [playing]);

  // autoplay on mount if requested
  useEffect(() => {
    if (autoplay) start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // when the flow completes, optionally loop or reset after a delay
  useEffect(() => {
    if (step !== "done") return;
    const t = window.setTimeout(() => {
      if (loop) start();
      else reset();
    }, autoResetDelay);
    return () => clearTimeout(t);
    // include loop and autoResetDelay so effect re-runs if those props change
  }, [step, loop, autoResetDelay]);

  const start = () => {
    setEmail("");
    setPassword("");
    setStep("idle");
    setPlaying(true);
  };

  const reset = () => {
    setPlaying(false);
    setEmail("");
    setPassword("");
    setStep("idle");
  };

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-3">Mobile UI Live Playback</h2>

      <div className="flex items-start gap-6">
        <div className="w-56 h-112 bg-black/80 p-2 rounded-3xl shadow-lg relative" style={{width:224, height:448}}>
          <div className="bg-white rounded-2xl h-full overflow-hidden relative" style={{padding:16}}>
            {/* Header */}
            <div className="h-10 flex items-center justify-center border-b text-sm font-medium">Bank App</div>

            {/* Content area */}
            <div className="p-3">
              {step !== "done" ? (
                <div>
                  <label className="text-xs text-gray-600">Email</label>
                  <div className="mt-1 mb-3">
                    <input
                      value={email}
                      readOnly
                      className={`w-full border rounded px-2 py-2 text-sm ${step === "typing" ? "bg-yellow-50" : "bg-white"}`}
                    />
                  </div>

                  <label className="text-xs text-gray-600">Password</label>
                  <div className="mt-1 mb-4">
                    <input
                      value={password}
                      readOnly
                      className={`w-full border rounded px-2 py-2 text-sm ${step === "typing" ? "bg-yellow-50" : "bg-white"}`}
                    />
                  </div>

                  <button
                    className={`w-full py-2 rounded text-white ${step === "submitting" ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-500"}`}
                    aria-busy={step === "submitting"}
                  >
                    {step === "submitting" ? "Logging in..." : "Login"}
                  </button>
                </div>
              ) : (
                <div>
                  <div className="text-green-600 font-semibold text-lg">Welcome back!</div>
                  <div className="mt-4 text-sm text-gray-700">Your dashboard shows recent transactions and balances.</div>
                  <div className="mt-4 bg-gray-100 rounded p-2 text-sm">
                    <div className="font-medium">Balance</div>
                    <div className="text-xl">$4,250.90</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex-1">
          <p className="text-gray-700 mb-3">This is an in-browser simulated mobile flow: typing, submission and dashboard result. It runs locally without connecting to real devices or Appium.</p>
          {/* Controls removed: playback is autoplay by default and resets automatically */}
        </div>
      </div>
    </div>
  );
}

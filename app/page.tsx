"use client";

import { useCallback, useState } from "react";
import PlanDisplay from "./components/PlanDisplay";
import { FocusMode, type PlanState } from "./types";

export default function Home() {
  const [goal, setGoal] = useState("");
  const [mode, setMode] = useState<FocusMode>(FocusMode.QUICK);
  const [state, setState] = useState<PlanState>({
    plan: null,
    loading: false,
    error: null,
  });

  const handleGenerate = async () => {
    if (!goal.trim()) return;

    setState((prev) => ({ ...prev, loading: true, error: null }));

    try {
      const res = await fetch("/api/plan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ goal, mode }),
      });

      if (!res.ok) {
        throw new Error("Failed to generate plan");
      }

      const data = await res.json();

      setState({ plan: data, loading: false, error: null });

      setTimeout(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });
      }, 100);
    } catch (error) {
      setState((prev) => ({
        ...prev,
        loading: false,
        error: error instanceof Error ? error.message : "Unknown error",
      }));
    }
  };

  const handleCopy = useCallback(() => {
    if (!state.plan) return;

    const text = `
Focus Plan: ${state.plan.summary}
Immediate Action: ${state.plan.immediateNextAction}
Steps:
${state.plan.steps.map((s, i) => `${i + 1}. ${s}`).join("\n")}
Time Blocks:
${state.plan.timeBlocks
  .map((block) => `- ${block.duration}: ${block.activity}`)
  .join("\n")}
    `.trim();

    navigator.clipboard.writeText(text);
    alert("Plan copied to clipboard!");
  }, [state.plan]);

  return (
    <main className="max-w-4xl mx-auto px-4 py-16 md:py-24">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-100 tracking-tight mb-4">
          Turn your goals into{" "}
          <span className="text-emerald-500">actionable plans.</span>
        </h2>
        <p className="text-zinc-500 text-lg max-w-2xl mx-auto">
          TaskLens AI strips away the noise and provides a focused execution
          strategy for your most important work.
        </p>
      </div>

      <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-6 md:p-10 shadow-xl max-w-2xl mx-auto">
        <div className="space-y-8">
          <div>
            <label
              htmlFor="goal"
              className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3"
            >
              What is your primary goal?
            </label>
            <textarea
              id="goal"
              value={goal}
              onChange={(event) => setGoal(event.target.value)}
              placeholder="e.g., Build a personal portfolio website with Next.js..."
              className="w-full h-32 bg-zinc-950 border border-zinc-800 rounded-xl px-5 py-4 text-zinc-100 placeholder-zinc-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all resize-none"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">
              Select Focus Mode
            </label>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => setMode(FocusMode.QUICK)}
                className={`p-4 rounded-xl border transition-all text-left ${
                  mode === FocusMode.QUICK
                    ? "bg-emerald-500/10 border-emerald-500/50 text-emerald-100"
                    : "bg-zinc-950 border-zinc-800 text-zinc-500 hover:border-zinc-700"
                }`}
              >
                <div className="font-bold mb-1">Quick Focus</div>
                <div className="text-xs opacity-70">30 – 60 minutes</div>
              </button>
              <button
                onClick={() => setMode(FocusMode.DEEP)}
                className={`p-4 rounded-xl border transition-all text-left ${
                  mode === FocusMode.DEEP
                    ? "bg-emerald-500/10 border-emerald-500/50 text-emerald-100"
                    : "bg-zinc-950 border-zinc-800 text-zinc-500 hover:border-zinc-700"
                }`}
              >
                <div className="font-bold mb-1">Deep Work</div>
                <div className="text-xs opacity-70">2 – 3 hours</div>
              </button>
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={state.loading || !goal.trim()}
            className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold rounded-xl shadow-lg shadow-emerald-900/20 transition-all flex items-center justify-center space-x-2"
          >
            {state.loading ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                <span>Analyzing Goal...</span>
              </>
            ) : (
              <span>Generate Focus Plan</span>
            )}
          </button>

          {state.error && (
            <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 text-sm rounded-xl">
              {state.error}
            </div>
          )}
        </div>
      </div>

      {state.plan && (
        <PlanDisplay
          plan={state.plan}
          onCopy={handleCopy}
          onRegenerate={handleGenerate}
        />
      )}
    </main>
  );
}

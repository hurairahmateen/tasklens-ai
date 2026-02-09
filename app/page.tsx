"use client";

import { useState } from "react";

type FocusMode = "quick" | "deep";

type FocusPlan = {
  goalSummary: string;
  nextAction: string;
  steps: string[];
  timeBlocks: string[];
};

export default function Home() {
  const [goal, setGoal] = useState("");
  const [mode, setMode] = useState<FocusMode>("quick");
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState<FocusPlan | null>(null);

  async function handleGenerate() {
    if (!goal.trim()) return;

    setLoading(true);
    setPlan(null);

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
      setPlan(data);
    } catch (err) {
      console.error(err);
      alert("Something went wrong. Try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main style={{ padding: 24, maxWidth: 720 }}>
      <h1>TaskLens AI</h1>
      <p>Turn your goals into focused, actionable plans.</p>

      <div style={{ marginTop: 24 }}>
        <label style={{ display: "block", marginBottom: 8 }}>
          What do you want to work on?
        </label>

        <textarea
          value={goal}
          onChange={(e) => setGoal(e.target.value)}
          placeholder="Example: I want to learn Next.js and build a small project"
          rows={4}
          style={{ width: "100%", padding: 12 }}
        />

        <div style={{ marginTop: 16 }}>
          <strong>Focus mode:</strong>

          <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
            <button
              onClick={() => setMode("quick")}
              style={{
                padding: "8px 12px",
                border: "1px solid #ccc",
                background: mode === "quick" ? "#ddd" : "transparent",
              }}
            >
              Quick focus (30–60 min)
            </button>

            <button
              onClick={() => setMode("deep")}
              style={{
                padding: "8px 12px",
                border: "1px solid #ccc",
                background: mode === "deep" ? "#ddd" : "transparent",
              }}
            >
              Deep work (2–3 hours)
            </button>
          </div>
        </div>

        <button
          onClick={handleGenerate}
          disabled={loading}
          style={{
            marginTop: 20,
            padding: "10px 16px",
            fontWeight: "bold",
            opacity: loading ? 0.6 : 1,
          }}
        >
          {loading ? "Generating..." : "Generate focus plan"}
        </button>
      </div>

      <section style={{ marginTop: 40 }}>
        <h2>Your focus plan</h2>

        {loading && <p>Thinking about your plan...</p>}

        {!loading && !plan && <p>No plan generated yet.</p>}

        {!loading && plan && (
          <div style={{ marginTop: 16 }}>
            <p>
              <strong>Goal:</strong> {plan.goalSummary}
            </p>

            <p>
              <strong>Next action:</strong> {plan.nextAction}
            </p>

            <h3>Steps</h3>
            <ul>
              {plan.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ul>

            <h3>Suggested time blocks</h3>
            <ul>
              {plan.timeBlocks.map((block, i) => (
                <li key={i}>{block}</li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </main>
  );
}

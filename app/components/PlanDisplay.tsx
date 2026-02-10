import type { FocusPlan } from "@/app/types";

interface PlanDisplayProps {
  plan: FocusPlan;
  onCopy: () => void;
  onRegenerate: () => void;
}

export default function PlanDisplay({
  plan,
  onCopy,
  onRegenerate,
}: PlanDisplayProps) {
  return (
    <div className="w-full max-w-2xl mx-auto mt-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
        <div className="p-8 border-b border-zinc-800">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-sm font-semibold text-emerald-500 uppercase tracking-widest">
              Focus Strategy
            </h2>
            <div className="flex space-x-2">
              <button
                onClick={onCopy}
                className="p-2 text-zinc-400 hover:text-zinc-100 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-all"
                title="Copy Plan"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                  />
                </svg>
              </button>
              <button
                onClick={onRegenerate}
                className="p-2 text-zinc-400 hover:text-zinc-100 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-all"
                title="Regenerate"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </button>
            </div>
          </div>
          <p className="text-xl text-zinc-100 font-medium leading-relaxed">
            {plan.summary}
          </p>
        </div>

        <div className="p-8 bg-zinc-900/50 border-b border-zinc-800">
          <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-4">
            Immediate Next Action
          </h3>
          <div className="flex items-center space-x-4 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-emerald-100 font-semibold">
              {plan.immediateNextAction}
            </p>
          </div>
        </div>

        <div className="p-8 border-b border-zinc-800">
          <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6">
            Execution Steps
          </h3>
          <ul className="space-y-4">
            {plan.steps.map((step, idx) => (
              <li
                key={`${step}-${idx}`}
                className="flex items-start space-x-4 text-zinc-300"
              >
                <span className="mono text-xs font-bold text-emerald-600 mt-1">
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className="text-sm leading-relaxed">{step}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="p-8 bg-zinc-950/50">
          <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-6">
            Focus Blocks
          </h3>
          <div className="space-y-3">
            {plan.timeBlocks.map((block) => (
              <div
                key={`${block.activity}-${block.duration}`}
                className="flex items-center justify-between p-4 bg-zinc-900 border border-zinc-800 rounded-xl"
              >
                <span className="text-sm text-zinc-200">{block.activity}</span>
                <span className="mono text-xs font-medium px-2 py-1 bg-zinc-800 text-zinc-400 rounded-md">
                  {block.duration}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

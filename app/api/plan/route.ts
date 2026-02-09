import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { goal, mode } = body;

  if (!goal || goal.trim().length < 5) {
    return NextResponse.json({ error: "Goal is too short" }, { status: 400 });
  }

  // Mock focus plan (later replaced by AI)
  const plan = {
    goalSummary: goal,
    nextAction:
      mode === "quick"
        ? "Start with a focused 30-minute session on the first step."
        : "Block 2 hours and begin deep work on the first major task.",
    steps: [
      "Clarify what success looks like",
      "Break the goal into smaller tasks",
      "Start with the easiest task",
      "Review progress and adjust",
    ],
    timeBlocks:
      mode === "quick"
        ? ["30 minutes focused work"]
        : ["45 minutes work", "10 minutes break", "45 minutes work"],
  };

  return NextResponse.json(plan);
}

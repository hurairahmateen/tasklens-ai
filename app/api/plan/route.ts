import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { goal, mode } = await req.json();

  if (!goal || goal.trim().length < 5) {
    return NextResponse.json({ error: "Goal is too short" }, { status: 400 });
  }

  const systemPrompt = `
You are TaskLens AI, a focus coach.

Your job is to turn a user's goal into a focused, actionable plan.

Rules:
- Respond ONLY with valid JSON
- No markdown
- No explanations outside JSON
- Be practical and concise

JSON format:
{
  "summary": string,
  "immediateNextAction": string,
  "steps": string[],
  "timeBlocks": [
    { "duration": string, "activity": string }
  ]
}
`;

  const userPrompt = `
Goal: ${goal}
Focus mode: ${mode === "quick" ? "30-60 minutes" : "2-3 hours"}
`;

  try {
    const response = await fetch("http://127.0.0.1:8080/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "mistral",
        messages: [
          { role: "system", content: systemPrompt },
          { role: "user", content: userPrompt },
        ],
        temperature: 0.4,
      }),
    });

    const data = await response.json();

    const raw = data.choices?.[0]?.message?.content;

    if (!raw) {
      throw new Error("Empty AI response");
    }

    const plan = JSON.parse(raw);

    return NextResponse.json(plan);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "AI generation failed" },
      { status: 500 },
    );
  }
}

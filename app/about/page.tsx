export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-16 md:py-24">
      <h2 className="text-3xl font-bold text-zinc-100 mb-8">
        Execution over Motivation.
      </h2>

      <div className="prose prose-invert prose-zinc max-w-none space-y-12">
        <section>
          <h3 className="text-xl font-semibold text-zinc-100 mb-4">
            What is TaskLens AI?
          </h3>
          <p className="text-zinc-400 leading-relaxed">
            TaskLens AI is a personal focus coach designed for those who
            struggle with &quot;blank page syndrome&quot; or vague goals.
            Instead of simply tracking tasks, it deconstructs your high-level
            ambitions into concrete, time-blocked execution strategies.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-zinc-100 mb-4">
            The Problem
          </h3>
          <p className="text-zinc-400 leading-relaxed">
            Procrastination is often a result of ambiguity. When a goal is vague
            (e.g., &quot;Learn React&quot;), the brain doesn&apos;t know where
            to start, so it chooses the path of least resistance: distraction.
            TaskLens AI solves this by forcing clarity.
          </p>
        </section>

        <section>
          <h3 className="text-xl font-semibold text-zinc-100 mb-4">
            How it Works
          </h3>
          <p className="text-zinc-400 leading-relaxed">
            By leveraging Large Language Models, TaskLens AI understands the
            context of your goal and the typical workflows associated with it.
            It identifies dependencies, estimates time requirements, and
            suggests an immediate first step to break inertia.
          </p>
          <ul className="mt-4 space-y-3 text-zinc-400">
            <li className="flex items-center space-x-3">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>
                <strong>Input:</strong> Plain English goal description.
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>
                <strong>Analysis:</strong> AI deconstruction of steps and
                dependencies.
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>
                <strong>Output:</strong> A structured, time-boxed execution
                plan.
              </span>
            </li>
          </ul>
        </section>

        <section className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
          <h3 className="text-xl font-semibold text-zinc-100 mb-4">
            Why use AI?
          </h3>
          <p className="text-zinc-400 leading-relaxed">
            AI is excellent at pattern recognition. It knows the common steps
            for coding projects, research papers, and business tasks. TaskLens
            AI uses this knowledge to act as a logic layer between your ambition
            and your calendar.
          </p>
        </section>
      </div>
    </main>
  );
}

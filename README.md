# 🧠 TaskLens AI

TaskLens AI is a full-stack Next.js application that turns vague goals into focused, actionable execution plans using a locally hosted AI model.

Unlike typical AI demos, TaskLens AI runs **100% locally**, with no paid APIs, no cloud dependency, and no external AI services.

---

## ✨ What Problem Does It Solve?

Most people fail to act on goals because goals are:

- Too vague
- Too big
- Overwhelming to start

TaskLens AI solves this by:

- Breaking goals into **clear steps**
- Suggesting **immediate next actions**
- Providing **realistic time blocks**
- Encouraging focused execution instead of procrastination

---

## 🚀 Features

- ✍️ Natural language goal input
- 🎯 Focus modes (Quick focus or Deep work)
- 🤖 AI-generated execution plans
- 🧩 Structured output (steps, next action, time blocks)
- ⚡ Real-time generation via local LLM
- 💻 Fully offline, zero-cost AI setup

---

## 🛠️ Tech Stack

### Frontend

- **Next.js (App Router)**
- React
- TypeScript

### Backend

- Next.js API Routes
- Server-side AI orchestration

### AI

- **llama-cpp**
- **Mistral 7B Instruct (GGUF, Q4_K_M)**
- Local HTTP inference server

---

## 🧠 How It Works (Architecture)

User (Browser)
↓
Next.js Client (React UI)
↓
Next.js API Route (/api/plan)
↓
Local llama-cpp Server (http://127.0.0.1:8080)
↓
Mistral 7B Instruct Model

- The frontend sends a goal + focus mode
- The backend constructs a strict AI prompt
- The local model returns structured JSON
- The UI renders the plan in a readable format

No external APIs are used.

---

## 📦 Project Structure

app/
├─ page.tsx # Main UI
├─ layout.tsx # Global layout
├─ about/page.tsx # About page
└─ api/
└─ plan/route.ts # AI generation endpoint

---

## 🧪 Example Output

**Input:**

> I want to learn Next.js and build a portfolio project

**Output:**

- Goal summary
- Immediate next action
- Step-by-step plan
- Suggested time blocks

Each response is unique and generated in real time by the local AI.

---

## 🖥️ Running the Project Locally

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/tasklens-ai.git
cd tasklens-ai
```

### 2️⃣ Configure environment variables

Copy the base environment file and create a local override:

```bash
copy .env .env.local
```

Update `AI_API_URL` in `.env.local` if your local LLM server uses a different host or port.

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Start the Next.js app

```bash
npm run dev
```

App runs at:

http://localhost:3000

---

## 🤖 Setting Up the Local AI (Required)

This project uses a local LLM, not a cloud API.

**Requirements**

- Windows, macOS, or Linux
- ~5 GB RAM available
- No GPU required (CPU works fine)

**Steps**

1. Download llama-cpp binaries:
   https://github.com/ggerganov/llama.cpp/releases

2. Download a GGUF model (recommended):

mistral-7b-instruct-v0.2.Q4_K_M.gguf

3. Start the local AI server:

./llama-server.exe -m path/to/model.gguf --port 8080 --ctx-size 4096

4. Confirm it’s running:

http://127.0.0.1:8080

---

## 🧠 Why This Project Is Different

✅ No paid APIs

✅ No OpenAI dependency

✅ Real local AI inference

✅ Full-stack architecture

✅ Production-style API design

✅ Clean separation of concerns

This project demonstrates practical AI engineering, not just prompt usage.

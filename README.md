# TaskLens AI

Turn vague goals into focused execution plans using a **local** LLM. No paid APIs, no cloud dependency.

## Features

- Natural language goal input
- Quick/Deep focus modes
- AI-generated steps, next action, and time blocks
- Fully offline, zero-cost local setup

## Quick Start

```bash
git clone https://github.com/your-username/tasklens-ai.git
cd tasklens-ai
copy .env .env.local
npm install
npm run dev
```

App runs at: http://localhost:3000

## Environment

`AI_API_URL` is required. Copy `.env` → `.env.local` and update as needed.

## Local AI Setup (Required)

1. Download llama-cpp: https://github.com/ggerganov/llama.cpp/releases
2. Download a GGUF model (recommended):
   mistral-7b-instruct-v0.2.Q4_K_M.gguf
3. Start server:

```
./llama-server.exe -m path/to/model.gguf --port 8080 --ctx-size 4096
```

4. Verify: http://127.0.0.1:8080

## Architecture

Browser → Next.js UI → `/api/plan` → local llama-cpp server → model

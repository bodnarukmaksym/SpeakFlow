# Create a README.md file for the user to download
# SpeakFlow

A simple web app for working with audio: upload a file, get a transcript, view it in the browser, and download it as a PDF. Built as a **university project** to explore modern web development and speech-to-text.

---

## Table of Contents

- [Goals](#goals)
- [Repository Structure](#repository-structure)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Environment Variables](#environment-variables)
  - [Backend (.env)](#backend-env)
  - [Frontend (.env)](#frontend-env)
- [Getting Started](#getting-started)
  - [Backend (FastAPI + Poetry)](#backend-fastapi--poetry)
  - [Frontend (React + Vite)](#frontend-react--vite)
- [Suggested API (MVP)](#suggested-api-mvp)
- [Testing](#testing)
- [Linting & Formatting](#linting--formatting)
- [Coding Guidelines](#coding-guidelines)
- [Roadmap](#roadmap)
- [License](#license)

---

## Goals

- Convert audio to accurate text (speech-to-text).
- Provide a clean UI for viewing transcripts.
- Allow users to download transcripts as **PDF**.
- *(Optional)* Separate vocals/music to improve STT quality.
- *(Optional)* Detect tone/emotion of speech (e.g., aggressive, polite, passive) from the transcript text.

---

## Repository Structure
```
SpeakFlow/
├─ apps/
│ ├─ api/
│ │ ├─ app/ # FastAPI application code
│ │ ├─ tests/ # pytest tests
│ │ ├─ Makefile # handy commands
│ │ └─ pyproject.toml # Poetry config and dependencies
│ └─ web/
│  └─ app/
│   ├─ components/
│   ├─ pages/
│   │  ├─ auth/
│   │  │  └─ index.tsx
│   │  ├─ summary_result/
│   │  │  └─ index.tsx
│   │  ├─ trascription_result/
│   │  │  └─ index.tsx
│   │  ├─ mood_analysis_result/
│   │  │  └─ index.tsx
│   │  └─ index.tsx
│   ├─ styles/
│   ├─ utils/
│   ├─ hooks/
│   ├─ api/
│   ├─ globals.css
│   └─ layout.tsx
└─ README.md
├─ .gitignore
└─ README.md
```


> Monorepo: **backend** and **frontend** live in the same repository for simpler development.

---

## Tech Stack

- **Frontend:** React
- **Backend:** FastAPI (Python)
- **Database (optional for MVP):** PostgreSQL (SQLAlchemy / Alembic)
- **STT Engine:** Whisper (or any compatible speech-to-text model)
- **PDF:** ReportLab (or another Python PDF generator)
- **Testing:** pytest

---

## Prerequisites

- Node.js **18+**
- Python **3.11+**
- *(Optional)* PostgreSQL **14+** if you plan to persist transcripts/metadata

---

### 1) Clone & env

```bash
git clone https://github.com/<your-username>/speakflow.git
cd speakflow
cp .env.example .env
```

Edit `.env` with your values.

### 2) Backend (FastAPI) — Poetry

**Install Poetry (if needed)**

```bash
# Linux / macOS
curl -sSL https://install.python-poetry.org | python3 -
```

**Create env & install deps**

```bash
cd server
poetry env use 3.11          # or your Python version
poetry install
poetry shell
```

**Run dev server**

```bash
uvicorn app.main:app --reload
```

> Tip: run without activating the shell:
>
> ```bash
> poetry run uvicorn app.main:app --reload
> poetry run alembic upgrade head
> ```

### 3) Frontend (React)

```bash
cd client
npm install
npm run dev
```

Open the printed local URL (typically `http://localhost:5173`).

---

## How It Works (High-Level)

1. User uploads audio from the React UI
2. FastAPI stores metadata in PostgreSQL
3. STT service runs Whisper (or chosen model) and saves the transcript
4. PDF service formats the transcript into a downloadable PDF
5. (Optional) A simple LLM-based classifier labels emotion from the transcript text

---

## License
**MIT**



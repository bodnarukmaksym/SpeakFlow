# SpeakFlow (University Project)

A simple web app for working with audio: upload a file, get a transcript, view it in the browser, and download it as a PDF. Built as a **university project** to explore modern web development and speech-to-text.

---

## Goals

* **Develop the frontend with React** (primary focus of this phase)
* Turn audio into accurate text (speech-to-text)
* Show transcripts in a clean web UI
* Let users download transcripts as PDF
* (Optional) Separate vocals/music to improve transcription
* (Optional) Detect the tone/emotion of the speech (e.g., aggressive, polite, passive) based on the transcript

---

## Tech Stack

**Frontend:** React (Vite), TypeScript, Tailwind
**Backend:** FastAPI (Python)
**Database:** PostgreSQL (SQLAlchemy + Alembic)
**STT Model:** speech-to-text engine
**PDF:** ReportLa
**Other:** Docker, pytest

---

## Project Structure

```
speakflow/
├─ client/               
│  ├─ src/
│  └─ vite.config.ts
├─ server/               
│  ├─ app/   
│  │  └─ main.py
│  └─ tests/
├─ docker-compose.yml    # optional
├─ .env.example
└─ README.md
```

---

## Quick Start

### Prerequisites

* Node.js 18+
* Python 3.11+
* PostgreSQL 14+
* (Optional) Docker & Docker Compose

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

# Windows (PowerShell)
(Invoke-WebRequest -Uri https://install.python-poetry.org -UseBasicParsing).Content | py -
```

**Create env & install deps**

```bash
cd server
poetry env use 3.11          # or your Python version
poetry install
poetry shell
```

**DB migrations**

```bash
alembic upgrade head
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

## API (Draft)

* `POST /api/transcriptions`

  * Form-data: `file` (audio)
  * Returns: `{ id, text, duration, language }`
* `GET /api/transcriptions/{id}`

  * Returns transcription details
* `GET /api/transcriptions/{id}/download?format=pdf`

  * Returns a PDF file
* (Optional) `POST /api/separation`

  * Input: audio file
  * Returns: links to separated stems
* (Optional) `POST /api/emotions`

  * Input: `{ transcript: string }`
  * Returns: `{ label: "aggressive" | "polite" | "passive", confidence }`

---

## How It Works (High-Level)

1. User uploads audio from the React UI
2. FastAPI stores metadata in PostgreSQL
3. STT service runs Whisper (or chosen model) and saves the transcript
4. PDF service formats the transcript into a downloadable PDF
5. (Optional) A simple LLM-based classifier labels emotion from the transcript text

---

## Roadmap

* [ ] **Frontend React UI**: upload, progress, transcript viewer (current focus)
* [ ] File queue & background jobs (Celery/RQ)
* [ ] Authentication (basic)
* [ ] Multi-language detection
* [ ] Batch processing & progress UI
* [ ] Better PDF styling and watermark
* [ ] Optional features (separation, emotion)

---

## License

MIT (or update to your preferred license)

---

> *This is a **university project** intended for educational purposes.*

# 🎓 Smart AI Exam Preparation Planner

A streamlined, AI-powered study planner built with **Streamlit**, **LangChain**, and **Groq**. This application dynamically creates a personalized, structured study schedule based on your target exam date, subjects, weak areas, and daily available study hours.

🚀 **Live Demo:** [Smart AI Exam Preparation Planner](https://ai-exam-planner-8niavy5k3posfcmku8lenk.streamlit.app/)

---

## ✨ Features

- **Personalized Prep Schedules:** Generates daily study topics and strategy notes tailored to your specific weak areas and available hours.
- **Interactive Progress Tracking:** Check off completed study days directly within the interactive dashboard to monitor your prep progress.
- **Calendar Integration (.ics):** Export your generated study schedule directly into Apple Calendar, Google Calendar, or Outlook.
- **PDF Export:** Download a clean PDF copy of your study plan for offline access and printing.
- **Fast Inference with Groq:** Powered by LLMs hosted on Groq for sub-second generation speeds.

---

## 🛠️ Tech Stack

- **Frontend / UI:** Streamlit
- **LLM Orchestration:** LangChain (`langchain-openai`, `pydantic`)
- **Inference Engine:** Groq API
- **Exports:** `icalendar` (Calendar events), `fpdf` (PDF generation)

---

## 🚀 Getting Started Locally

### 1. Prerequisites

Ensure you have **Python 3.9+** installed on your system.

### 2. Clone the Repository

```bash
git clone [https://github.com/jeffreyrajarajendran20252-sketch/ai-exam-planner.git](https://github.com/jeffreyrajarajendran20252-sketch/ai-exam-planner.git)
cd ai-exam-planner

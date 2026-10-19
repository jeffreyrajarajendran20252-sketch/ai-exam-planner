import os
import io
import streamlit as st
from datetime import date, datetime, timedelta
from typing import List
from pydantic import BaseModel, Field
from langchain_openai import ChatOpenAI
from langchain_core.prompts import ChatPromptTemplate
from ics import Calendar, Event
from reportlab.lib.pagesizes import letter
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle

st.set_page_config(page_title="AI Exam Prep Planner", page_icon="🎓", layout="wide")

api_key = os.environ.get("GROQ_API_KEY")

class DailyTask(BaseModel):
    day: int = Field(description="Day number of prep")
    focus_subject: str = Field(description="Subject to study")
    topics: List[str] = Field(description="List of specific sub-topics")
    allocated_hours: float = Field(description="Study hours for the day")
    strategy_note: str = Field(description="Tips for weak areas")

class ExamStudyPlan(BaseModel):
    plan_title: str = Field(description="Title of the plan")
    summary: str = Field(description="Overview of strategy")
    daily_schedule: List[DailyTask] = Field(description="Day-by-day plan")

def generate_plan(subjects, exam_date, weak_areas, daily_hours, api_key_input):
    key = api_key_input if api_key_input else api_key
    llm = ChatOpenAI(
        model="openai/gpt-oss-120b",
        openai_api_key=key,
        openai_api_base="https://api.groq.com/openai/v1",
        temperature=0.3
    )
    structured_llm = llm.with_structured_output(ExamStudyPlan)
    
    prompt = ChatPromptTemplate.from_messages([
        ("system", "You are an expert exam strategist. Prioritize weak areas and balance daily workload."),
        ("human", "Generate a study plan for:\nSubjects: {subjects}\nExam Date: {exam_date}\nWeak Areas: {weak_areas}\nDaily Hours: {daily_hours}")
    ])
    
    chain = prompt | structured_llm
    return chain.invoke({
        "subjects": subjects,
        "exam_date": exam_date,
        "weak_areas": weak_areas,
        "daily_hours": daily_hours
    })

def create_ics(plan):
    cal = Calendar()
    start_date = datetime.now().date()
    for task in plan.daily_schedule:
        task_date = start_date + timedelta(days=task.day - 1)
        e = Event()
        e.name = f"Study: {task.focus_subject}"
        e.begin = task_date.strftime("%Y-%m-%d 09:00:00")
        e.duration = {"hours": task.allocated_hours}
        e.description = f"Topics: {', '.join(task.topics)}\nNote: {task.strategy_note}"
        cal.events.add(e)
    return str(cal)

def create_pdf(plan):
    buffer = io.BytesIO()
    doc = SimpleDocTemplate(buffer, pagesize=letter)
    styles = getSampleStyleSheet()
    story = []

    title_style = ParagraphStyle('TitleStyle', parent=styles['Heading1'], fontSize=18, spaceAfter=12)
    heading_style = ParagraphStyle('HeadingStyle', parent=styles['Heading2'], fontSize=12, spaceAfter=6)
    normal_style = styles['Normal']

    story.append(Paragraph(plan.plan_title, title_style))
    story.append(Paragraph(f"<b>Strategy:</b> {plan.summary}", normal_style))
    story.append(Spacer(1, 12))

    for task in plan.daily_schedule:
        task_text = f"<b>Day {task.day}: {task.focus_subject} ({task.allocated_hours} hrs)</b><br/>"
        task_text += f"Topics: {', '.join(task.topics)}<br/>"
        task_text += f"Tip: {task.strategy_note}"
        story.append(Paragraph(task_text, normal_style))
        story.append(Spacer(1, 8))

    doc.build(story)
    buffer.seek(0)
    return buffer

st.title("🎓 Smart AI Exam Preparation Planner")

with st.sidebar:
    user_key = st.text_input("Groq API Key (optional if in ENV)", type="password")

col1, col2 = st.columns(2)
with col1:
    subjects_input = st.text_area("Subjects / Course Topics", "Data Structures, Operating Systems")
    weak_areas_input = st.text_area("Weak Areas", "Dynamic Programming, Memory Management")

with col2:
    exam_date_input = st.date_input("Exam Date", min_value=date.today())
    daily_hours_input = st.slider("Daily Available Study Hours", 1.0, 12.0, 4.0, 0.5)

if st.button("🚀 Generate Personal Prep Schedule", type="primary"):
    if not (api_key or user_key):
        st.error("Please provide a Groq API Key.")
    else:
        with st.spinner("Building your custom plan..."):
            try:
                st.session_state.plan = generate_plan(
                    subjects_input,
                    str(exam_date_input),
                    weak_areas_input,
                    daily_hours_input,
                    user_key
                )
                st.session_state.completed = {}
            except Exception as e:
                st.error(f"Error generating plan: {str(e)}")

if "plan" in st.session_state:
    plan = st.session_state.plan

    st.success(f"Plan Created: {plan.plan_title}")
    st.info(f"**Strategy:** {plan.summary}")

    # Progress Tracking Bar
    total_tasks = len(plan.daily_schedule)
    completed_tasks = sum(1 for v in st.session_state.completed.values() if v)
    progress = completed_tasks / total_tasks if total_tasks > 0 else 0
    st.progress(progress, text=f"Progress: {completed_tasks}/{total_tasks} Days Completed ({int(progress * 100)}%)")

    # Export Options
    exp_col1, exp_col2 = st.columns(2)
    with exp_col1:
        st.download_button(
            label="📅 Export to Calendar (.ics)",
            data=create_ics(plan),
            file_name="study_plan.ics",
            mime="text/calendar"
        )
    with exp_col2:
        st.download_button(
            label="📄 Export to PDF",
            data=create_pdf(plan),
            file_name="study_plan.pdf",
            mime="application/pdf"
        )

    st.subheader("📅 Interactive Daily Schedule")
    for task in plan.daily_schedule:
        is_done = st.checkbox(
            f"Day {task.day}: {task.focus_subject} ({task.allocated_hours} hrs)",
            key=f"task_{task.day}",
            value=st.session_state.completed.get(task.day, False)
        )
        st.session_state.completed[task.day] = is_done

        if is_done:
            st.caption("✅ Mark as completed")
        else:
            with st.expander(f"View details for Day {task.day}"):
                st.markdown("**Topics:**")
                for topic in task.topics:
                    st.markdown(f"- {topic}")
                st.markdown(f"💡 **Tip:** {task.strategy_note}")
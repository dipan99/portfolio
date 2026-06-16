# Dipan Bag — Portfolio

**Agentic AI-focused SDET | Computer Science Graduate**

[dipanbag10@gmail.com](mailto:dipanbag10@gmail.com) · [linkedin.com/in/dipan-bag](https://linkedin.com/in/dipan-bag) · [github.com/dipan99](https://github.com/dipan99)

---

## About

3+ years building and breaking software across backend systems, cloud platforms, and enterprise data protection. My work sits at the intersection of test engineering and AI — I've shipped production automation frameworks, debugged 70+ customer-reported failures, and shipped agentic AI systems that won grants and hackathons.

Currently finishing an MSCS at the University of Minnesota, where I've worked as both a Research Assistant (building real-time world models for vehicle teleoperation) and a Teaching Assistant for graduate-level analytics courses.

My expertise lies in breaking your product. You name it, I will break it.

---

## Experience

**SDET Intern** — IDeaS Revenue Solutions *(May 2025 – Aug 2025, Bloomington MN)*
End-to-end test automation in Groovy/JUnit/Spring Boot; CI/CD via GitHub Actions; API validation with Postman and Datadog across Redis, MongoDB, and AWS services.

**Software Development Engineer in Test** — Commvault Systems *(Jul 2022 – Jul 2024, Bangalore)*
25+ automated tests in Python/Selenium covering AWS, Azure, Oracle Cloud, VMware ESXi, and Hyper-V. Expanded the One-Touch disaster recovery suite by 150% across 6 release cycles.

**SDET Intern** — Commvault Systems *(Oct 2021 – Jun 2022, Bangalore)*
Python test automation framework migration; Bare Metal Recovery & File Systems team.

**Data Science Intern** — Highradius Technologies *(Jun 2021 – Oct 2021, Remote)*
ML models in Python (NumPy, Pandas, scikit-learn) to forecast deduction validity across three client projects.

---

## Academic

**Graduate Research Assistant** — University of Minnesota *(Jan 2026 – May 2026)*
Designed a real-time world environment for vehicle teleoperation — fusing GPS, camera, and LiDAR into a structured semantic model transmitted to remote operators via a ROS 2 pipeline.

**Graduate Teaching Assistant** — University of Minnesota *(Jan 2025 – May 2025)*
Migrated course content from R to Python for two graduate courses: MSBA 6451 (Prescriptive Analytics) and IDSC 6051 (Information Technologies and Solutions).

---

## Selected Projects

| Project | What it is | Stack |
|---|---|---|
| **Sirius** | Private on-device health AI — won Best Security Infrastructure at O1 Summit Hackathon ($1K). LLM inference, speech recognition, and health memory all run locally on Apple Silicon. | Swift, SwiftUI, FastAPI, MLX |
| **MinneDigest** | AI journalism suite — won AI × Journalism Hackathon ($10K grant). Automated news ingestion, RAG content store, AI fact-checking, dual-persona AI podcast. | LangGraph, LangChain, ElevenLabs, Whisper |
| **StatViz** | MSCS capstone. Browser-based EDA tool with a node canvas, OpenAI function-calling, and a client-side stats engine. Raw data never leaves the browser. | React, React Flow, OpenAI API |
| **ProdLens** | Hybrid PostgreSQL + ChromaDB query system. ~1ms latency, 80% API cost reduction via batched ETL. LangGraph routing across Text-to-SQL, RAG, and conversational flows. | PostgreSQL, ChromaDB, LangGraph |
| **Real-Time World Model** | Vehicle-centric teleoperation interface combining map structure, LiDAR localization, and perception outputs into a 3D browser visualization. | Python, ROS 2, WebGL |
| **Situational Awareness HUD** | 3D intersection awareness display with latency-compensated ghost projections, streamed via ROS 2 and rendered over live OSM road geometries. | ROS 2, OSM, JavaScript |
| **The California Story** | Interactive wildfire visualization — GeoJSON, 3D maps, time-series charts, Python trend analysis. | SvelteJS, D3.js, CesiumJS |
| **CareerBridge** | Resume sharing network with RBAC (Auth0), three user roles, tag-based search. | Flask, SQLAlchemy, Auth0 |

---

## Skills

| Area | Tools |
|---|---|
| **Languages** | Python, Java, Groovy, SQL, PowerShell, JavaScript |
| **Testing & QA** | Selenium, JUnit, Spock, Postman, API Testing, Integration, Regression, Performance Testing |
| **CI/CD & Tools** | Git, GitHub Actions, JIRA, Datadog, Docker, Studio 3T |
| **Cloud & Systems** | AWS, Azure, Google Cloud, VMware ESXi, Microsoft Hyper-V, Distributed Systems |
| **Databases** | PostgreSQL, MongoDB, Redis, ChromaDB, Firestore, Microsoft SQL Server |
| **Backend & Frameworks** | Spring Boot, FastAPI, Flask, Streamlit, React, LangChain, LangGraph |
| **AI & ML** | PyTorch, OpenAI, HuggingFace, RAG, LLMs, Tool-Calling, Agentic AI |

---

## This Site

Pure HTML + CSS + JS — no frameworks, no build step. Content is driven by JSON files under `data/`. Deployable directly to GitHub Pages.

```
portfolio/
├── index.html
├── style.css
├── script.js        # animated bug canvas
├── render.js        # JSON → DOM
└── data/
    ├── work.json
    ├── academic.json
    ├── projects.json
    └── skills.json
```

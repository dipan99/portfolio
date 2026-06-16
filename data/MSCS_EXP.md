# MSCS_EXP.md
> Reference file — Academic Experience (graduate roles, research, teaching, course projects). Do not edit after Phase 1.

---

## Academic Experience

### Graduate Research Assistant — University of Minnesota
- **Dates:** Jan 2026 – May 2026
- **Lab/Context:** Real-Time Vehicle Teleoperation Research

**Responsibilities & Achievements:**
- Designed and developed a Real-Time World Environment for vehicle teleoperation, converting GPS, camera, and LiDAR data into a structured, semantic world model transmitted to operators in real time.
- Performed Python-based analysis on real-world sensor datasets, extracting statistics and validating system behavior under live conditions.
- Integrated and synchronized multi-modal sensor streams (GPS, camera, LiDAR) under real-time networking constraints using a ROS-driven pipeline.
- Collaborated with researchers to define system requirements and validation procedures for the teleoperation stack.

**Tools & Methods:** Python, ROS 2, LiDAR, GPS, Camera sensors, rosbridge, real-time data pipelines

---

### Graduate Teaching Assistant — University of Minnesota
- **Dates:** Jan 2025 – May 2025
- **Courses:** MSBA 6451: Prescriptive Analytics · IDSC 6051: Information Technologies and Solutions
- **Supervisor:** Professor Soumya Sen

**Responsibilities & Achievements:**
- Migrated course content from R to Python across two graduate-level courses, ensuring code accuracy, consistency, efficiency, and alignment with current industry standards.
- Graded assignments and provided detailed, constructive feedback to support student learning and comprehension.
- Assisted students with technical and conceptual queries, helping them strengthen their understanding of prescriptive analytics and information systems.

**Tools & Methods:** Python, R, LPSolve, optimization modeling, statistical analysis

---

## Projects

### Sirius — Private, On-Device Health AI *(O1 Summit Hackathon)*
- **Award:** Best Security Infrastructure — $1,000 prize
- **Domain:** On-Device AI · Privacy · iOS/macOS

- Fully private AI health assistant where every layer — LLM inference, speech recognition, document processing, health memory, and device sync — runs locally on Apple Silicon; no cloud, no account, no external API ever touches user health data.
- Owned the macOS application end to end: native SwiftUI frontend with a local FastAPI backend running Gemma 4 E2B (4-bit quantized via MLX on Apple Silicon); backend runs on localhost and is never exposed to the network.
- Implemented real-time voice and text chat with SSE token streaming, on-device speech recognition (SFSpeechRecognizer), and neural TTS (Kokoro 82M via mlx-audio streamed as base64 PCM chunks).
- Integrated an encrypted on-device health memory module backed by GRDB/SQLite with AES-256-GCM field-level encryption and 512-dimensional NLEmbedding semantic search for cross-session context recall.
- Built a PDF health record import pipeline (PDFKit + LLM-driven structured extraction) and implemented P2P device sync between iPhone and Mac using MultipeerConnectivity (Bluetooth + local Wi-Fi) with HKDF-SHA256 key derivation and union-by-UUID CRDT merge.

**Technologies:** Swift, SwiftUI, Python, FastAPI, MLX, Gemma 4, GRDB, SQLite, AES-256-GCM, NLEmbedding, SFSpeechRecognizer, MultipeerConnectivity, SSE, EventKit, PDFKit

---

### StatViz — AI-Assisted Exploratory Data Analysis *(MSCS Capstone, Advised by Dr. Qianwen Wang)*
- **Domain:** AI · Data Analysis · Browser-Based

- Browser-based AI application for guided exploratory data analysis — guides users from raw datasets to structured insights, hypotheses, and iterative statistical reasoning in a transparent, node-based canvas workspace without writing any code.
- AI layer uses OpenAI's function-calling API with a dynamically constructed system prompt injected with live dataset context; intent classification routes each message before tool dispatch (dataset overview, column description, insight generation, visualization, scoped retrieval).
- Implemented a client-side statistics engine using jstat for Pearson correlation, Welch's t-test, chi-square, and one-way ANOVA — executed directly in the browser with no server round-trip.
- Normalized analysis registry maintained in Zustand runs in parallel with the React Flow canvas, storing clean logical records for insights, hypotheses, and results as the context source for all AI prompts.
- Fully client-side, bring-your-own-API-key model; raw data never leaves the browser. Deployed via GitHub Pages with Vite and GitHub Actions CI/CD.

**Technologies:** React, React Flow, Zustand, Vite, OpenAI API (function calling), jstat, JavaScript, GitHub Actions, GitHub Pages

---

### Real-Time World Model for Reasoning Augmented Vehicle Teleoperation
- **Domain:** Robotics · Real-Time Systems · Computer Vision

- Built a real-time, vehicle-centric world model augmenting teleoperation by combining map structure, perception outputs, and spatial context into a unified 3D interface streamed to a browser-based visualization.
- Leveraged deep learning–based object detection and LiDAR-based localization to transmit structured scene semantics instead of raw sensor data, reducing bandwidth and improving operator decision-making.
- Implemented coordinate calibration per data stream (center alignment, lane offsets, latency parameters) for accurate spatial rendering across different intersection geometries.

**Technologies:** Python, ROS 2, rosbridge, LiDAR, Object Detection, WebGL/browser visualization

---

### Real-Time Situational-Awareness Alert System
- **Domain:** Autonomous Vehicles · HUD · Real-Time Visualization

- Built a 3D intersection awareness HUD visualizing real-time autonomous vehicle data streamed via ROS 2 (rosbridge), showing detected positions and latency-compensated ghost projections for situational awareness under network delays.
- Enabled dynamic map adaptation by switching OSM-based road geometries at runtime, making the system location-agnostic across different intersections.
- Developed smooth latency modeling to generate projected vehicle positions, improving operator situational awareness under network delays.

**Technologies:** ROS 2, rosbridge, OSM (OpenStreetMap), JavaScript, 3D rendering, Python

---

### MinneDigest — AI-Powered News & Podcast Platform
- **Award:** AI × Journalism Hackathon — $10,000 grant (Hacks/Hackers)
- **Domain:** Agentic AI · NLP · Journalism Tech

- Won the AI × Journalism Hackathon and scaled the prototype into a production journalism suite featuring automated news ingestion, a RAG-ready content store, PDF-to-news conversion, and an AI fact-checking pipeline that cross-references live search against internal context to produce structured verdicts with confidence scores.
- Built an end-to-end pipeline with LLM summarization, real-time multilingual translation, and sentiment-aware TTS; engineered a dual-persona podcast format where AI agents discuss news conversationally across a white-labeled, multi-outlet publishing platform.
- Reduced content creation time by 85% across multilingual, white-labeled news deployments; partnered with local outlets including Windom News.

**Technologies:** LangGraph, LangChain, FastAPI, ElevenLabs, Whisper, Ollama, RAG, Python

---

### ProdLens — Intelligent E-Commerce Query System
- **Domain:** AI · Databases · LLM Routing

- Built a hybrid database using PostgreSQL (Cloud SQL) and ChromaDB (HNSW indexing); achieved ~1ms latency via B+ tree indexing across 1,024 products, 122 brands, and 2,500+ customer reviews.
- Developed ETL pipeline with AI-powered review enrichment using two-stage LangChain orchestration (Perplexity AI + GPT-4o-mini); achieved 80% API cost reduction through intelligent batch processing aggregating reviews from 27+ sources.
- Engineered LangGraph-powered agentic workflow with dynamic routing across Text-to-SQL, RAG with metadata filtering, and conversational flows; applied HuggingFace BERT sentiment analysis on top-rated products.

**Technologies:** PostgreSQL, ChromaDB, LangGraph, LangChain, OpenAI, HuggingFace BERT, Streamlit, Python, Google Cloud SQL

---

### The California Story — Wildfire Data Visualization Platform
- **Domain:** Data Visualization · Geospatial

- Built an interactive web application to analyze and visualize the impact of environmental and social factors on California wildfires, integrating geospatial data (GeoJSON) with dynamic maps, time-series visualizations, and interactive charts.
- Performed data analysis in Python to extract key wildfire trends and support data-driven storytelling through the platform.

**Technologies:** SvelteJS, D3.js, Plotly.js, CesiumJS, Python, JavaScript, Bootstrap, GeoJSON

---

### BookBridge — Full-Stack Books Management Platform
- **Domain:** Full-Stack Web

- Built a full-stack web application for managing personal and collaborative book collections with CRUD functionality, note-taking features, and book club / meeting management capabilities.

**Technologies:** EmberJS, Firebase (DB, Storage, Auth), JavaScript, Bootstrap

---

### CareerBridge — Social Networking Platform for Resume Sharing
- **Domain:** Full-Stack Web · Auth

- Developed a full-stack social networking app for sharing and discovering resume data, with three user roles (Employer, Job Seeker, Guest) and role-based access control via Auth0; built tag-based candidate search and resume commenting features.

**Technologies:** Flask, SQLAlchemy, Auth0, PureCSS, JavaScript, HTML, CSS

---

## Coursework
Advanced Machine Learning · Parallel Computing · Developing the Interactive Web · Advanced Algorithms and Data Structures · Recommender Systems · Software Engineering I · Data Visualisation · Spatial Data Science · Principles of Database Systems · Computer Vision · Capstone Project

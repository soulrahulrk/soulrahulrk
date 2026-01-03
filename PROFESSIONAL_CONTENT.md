# Professional Content Guide — Rahul Kadyan

Use this document as the single source of truth for LinkedIn, GitHub, Resume, and Portfolio text.

---

## 1. LinkedIn Headline

```
AI/ML Engineer | Decision Systems & Rule + ML Hybrid Architectures | FastAPI | Vector Search | 287 LeetCode
```

**Alternative (shorter):**
```
AI/ML Engineer | Building Decision-Grade AI Systems | Python | FastAPI | Semantic Search
```

---

## 2. LinkedIn About Section

I build AI systems that make decisions—not just predictions.

Most ML projects stop at model accuracy. My work goes further: integrating ML models with rule engines, business constraints, and explainability layers to create systems that output actionable decisions with reasoning.

My recent projects include a voyage estimation system with profit/risk scoring and override logic, a semantic search engine for HR assessment matching using vector databases and LLM re-ranking, and a placement intelligence system that scores resume credibility and flags risk factors.

I work primarily in Python, with FastAPI for backend services, vector search (ChromaDB, FAISS) for semantic retrieval, and LangChain for LLM orchestration. I have solved 287 LeetCode problems, with strength in arrays, dynamic programming, graphs, and hashing.

I am targeting ML Engineer, AI Engineer, or technical Data Analyst roles where systems ship to production and require reasoning under constraints.

---

## 3. Project Descriptions (LinkedIn + Portfolio)

### 3.1 AI Voyage Estimation & Decision System

**Problem:** Voyage planning requires weighing fuel costs, port delays, weather risks, and cargo value—too complex for spreadsheets, too critical for black-box ML.

**Approach:** Built a rule-based decision engine with configurable risk thresholds, cost estimation models for fuel and delay penalties, and confidence-scored outputs with override recommendations. Backend served via FastAPI with full audit logging.

**Why it matters:** The system outputs GO/NO-GO decisions with itemized cost breakdowns and risk justifications—not just predictions.

- Rule engine with business constraint configuration
- Profit/risk estimation with explainable override logic
- FastAPI backend with audit trail

**Tech:** Python, FastAPI, Rule Engine, PostgreSQL, Pandas

---

### 3.2 SHL Assessment Recommendation Engine

**Problem:** HR teams manually search through 50+ assessment types per role. Matching is inconsistent and time-intensive.

**Approach:** Built a semantic search system using Sentence Transformer embeddings, ChromaDB for vector storage, and LLM-based re-ranking to filter and justify top recommendations. Streamlit interface for HR users.

**Why it matters:** Returns top-5 assessment recommendations with match explanations in under 3 seconds.

- Vector database for semantic assessment retrieval
- LLM re-ranking with justification generation
- End-to-end retrieval pipeline

**Tech:** Python, Sentence Transformers, ChromaDB, LangChain, Streamlit

---

### 3.3 College Placement Intelligence System

**Problem:** Placement officers review 500+ resumes manually. No systematic way to flag weak profiles or prioritize coaching interventions.

**Approach:** Built a decision support system with resume parsing, rule-based credibility scoring with weighted factors, and risk flag generation for missing sections, skill gaps, and inconsistencies.

**Why it matters:** Reduces manual screening time by surfacing high-risk profiles for human review. Outputs placement-ready / needs coaching / high-risk decisions.

- Resume parser with structured field extraction
- Rule-based scoring with configurable weights
- Risk flag generator with reasoning

**Tech:** Python, NLP, Rule Engine, FastAPI, Pandas

---

## 4. GitHub Optimization

### 4.1 Repos to PIN (Top 6)

1. `ai-voyage-estimation` — Rename to: "AI Voyage Estimation & Decision System"
2. `shl-recommendation-engine` — Consolidate all SHL-related repos into this one
3. `placement-intelligence` — Rename if needed: "Placement Intelligence System"
4. `college-resource-management` — Keep as Tier-2
5. `insulin-resistance-prediction` — Keep as Tier-2 healthcare ML
6. Portfolio website repo (this one)

### 4.2 Repos to HIDE/Archive

- Diabetes prediction (duplicate concept)
- IPL score prediction (toy project)
- MERN gym app (off-brand)
- Small notebooks / config repos
- Any repo with no README or incomplete code

### 4.3 Repo Renaming Strategy

| Current Name | Suggested Name |
|-------------|----------------|
| `voyage-estimation` | `ai-voyage-decision-system` |
| `shl-project` | `shl-assessment-recommendation-engine` |
| Multiple SHL repos | Consolidate into one with proper README |

### 4.4 README Template for Each Tier-1 Repo

```markdown
# [Project Name]

## Problem
One-sentence problem statement.

## Solution
2-3 sentences on the system approach.

## Architecture
- Component 1
- Component 2
- Component 3

## Tech Stack
`Python` `FastAPI` `ChromaDB` etc.

## How to Run
```bash
# Clone, install, run instructions
```

## Sample Output
Screenshot or example output showing decision/recommendation.
```

---

## 5. Resume Project Section

### AI Voyage Estimation & Decision System
- Built rule-based decision engine for maritime voyage profitability with fuel cost modeling, risk flag generation, and explainable override logic
- Developed FastAPI backend serving GO/NO-GO decisions with itemized cost breakdowns and audit logging

### SHL Assessment Recommendation Engine
- Designed semantic search system matching job descriptions to assessments using vector embeddings and LLM re-ranking
- Implemented retrieval pipeline with ChromaDB and Sentence Transformers, returning top-5 recommendations with explanations

### College Placement Intelligence System
- Created decision support tool scoring resume credibility and generating risk flags for placement officers
- Built rule-based scoring engine with configurable weights for skills, experience, and project quality

---

## 6. Optional: LinkedIn Pinned Post Ideas

### Post 1: Decision Systems vs Prediction Systems
"Most ML projects optimize for accuracy. But in production, the question is: can this output drive a decision? I've been building systems where the model output is a GO/NO-GO, not a probability. Here's what changes when you design for decisions..."

### Post 2: Why I Use Rule Engines with ML
"Not every decision needs a neural network. My voyage estimation system uses XGBoost for cost prediction but rule logic for risk flags and overrides. Here's why hybrid architectures make sense for business-critical systems..."

### Post 3: Vector Search in Practice
"Built a recommendation engine that matches job descriptions to assessments. Sentence Transformers + ChromaDB + LLM re-ranking. Here's what I learned about semantic retrieval at small scale..."

---

## 7. One-Sentence Profile Summary

**For recruiters to understand in 5 seconds:**

> "Rahul Kadyan is an AI/ML engineer who builds decision-grade systems—combining ML models with rule engines, vector search, and explainability to output actionable decisions, not just predictions."

---

## 8. Target Role Fit

| Role | Fit Level | Why |
|------|-----------|-----|
| ML Engineer (Junior) | High | Decision systems, FastAPI, production focus |
| AI Engineer | High | LLM orchestration, vector search, hybrid architectures |
| Data Analyst (Technical) | Medium | SQL, Pandas, Power BI experience, but skewed toward engineering |
| Data Scientist | Medium | Modeling experience, but prefer systems over notebooks |

---

## 9. What NOT to Say

- "I am passionate about AI" → Say: "I build AI systems for [specific outcome]"
- "Always learning" → Say: "Currently working on [specific project]"
- "Enthusiastic team player" → Delete entirely
- "Proficient in many tools" → List only tools you've used in projects
- "Looking for opportunities" → Say: "Targeting [specific role type]"

---

## 10. Technical Identity Statement

> I specialize in decision-grade AI systems: ML models integrated with rule engines, vector search, and backend services to produce explainable, actionable outputs—not just predictions.

Use this as the anchor for all professional communication.

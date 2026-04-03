# MULTI-AGENT FRAMEMAP — Bradford Informed Guidance
## Generated: 2026-04-02 | 6 Agents, 1 Pilot, 1 Human
## Source Specs: 6 documents, ~16,895 lines

---

## THE SYSTEM AT A GLANCE

```
                    [PILOT — Zach Bradford / Approver]
                              /    |    \
                             /     |     \
         architect        /      GEO      \         Lead
                    (design)       |            Monitor       Shepherd
                         |         |         (citations)      (leads)
                         v         v              v               v
     ───────────────────────────────────────────────────────────────
                    BUILD — Implementation Layer
                         ^         ^              ^               ^
                         |         |              |               |
                    Builder v2.6-FINAL-LOCKED (single source of truth for code)
     ───────────────────────────────────────────────────────────────
                         |                      |
                         v                      v
                  Publisher           Enrollment
                  v3.20               Strategist v1.2
                (content)             (closing)
```

---

## 1. AGENT INVENTORY

| Agent | Version | Status | Core Mission | Lines | Stability |
|---|---|---|---|---|---|
| **Pilot** | N/A | Human | Orchestrator, final approver, deploy authority | — | — |
| **Architect** | v3.0 | Locked | Design system governance, BMAD Briefs | 3,046 | Mature |
| **Builder** | v2.6 | FINAL-LOCKED | Code execution, deployment, infrastructure | 2,983 | Frozen |
| **Publisher** | v3.20 | Active | Content production + GEO-optimized articles | 2,919 | Volatile |
| **GEO Monitor** | v1.0 | Experimental | AI citation tracking, Target Brief generation | 2,558 | New |
| **Lead Shepherd** | v1.0 | New | Lead scoring, nurturing, revenue attribution | 3,178 | New |
| **Enrollment Strategist** | v1.2 | New | Enrollment execution, carrier-specific closing | 2,211 | Evolving |

**Total spec text: ~16,895 lines across 6 agents**

---

## 2. AGENT CAPABILITIES MATRIX

| Capability | Publisher | GEO Monitor | Lead Shepherd | Enrollment | Architect | Builder |
|---|---|---|---|---|---|---|
| Content Creation | PRIMARY | — | — | — | — | — |
| Citation Tracking | — | PRIMARY | — | — | — | — |
| Article Briefing | CONSUMER | PRODUCER | — | — | — | — |
| AI Optimization | CONSUMER | PRIMARY | — | — | — | — |
| Lead Scoring | — | — | PRIMARY | — | — | — |
| Lead Nurturing | — | — | PRIMARY | — | — | — |
| Revenue Attribution | — | CONSUMER | PRIMARY | — | — | — |
| Enrollment Closing | — | — | — | PRIMARY | — | — |
| Carrier Strategy | — | — | — | PRIMARY | — | — |
| Design Specs | — | — | — | — | PRIMARY | — |
| Code Implementation | — | — | — | — | — | PRIMARY |
| Infra Management | — | — | — | — | — | PRIMARY |

---

## 3. HANDOFF PROTOCOL MAP

### HANDOFF 1: GEO Monitor → Publisher (Primary Pipeline)
**Frequency:** 3-5 Target Briefs per week
**Format:** Structured Target Brief (spec Section 36 of Publisher)
**Fields:** target_query, target_state, intent_classification, content_track, cluster, competitive_analysis (3 competitors), 8 fan-out sub-queries, bridge_type, proprietary_data_point, EEAT_anecdote_required, success_criteria, priority_score, prompt_simulation, citation_checklist
**Gate:** Brief must pass Publisher's 10-step Pre-Write Research Protocol
**Failure mode:** Brief expires after 14 days unacted — GEO Monitor re-queues or discards

### HANDOFF 2: Publisher → Builder (BTR — Builder Task Request)
**Frequency:** Per-article (schema fields, Sanity fields, infra needs)
**Priority:** Critical > High > Normal > Low
**Fields:** task_type, priority, description, acceptance_criteria, deadline, blocking_dependencies
**Gate:** Builder processes in priority order, oldest-first within same tier
**Failure mode:** Pilot directives override Normal/Low but NOT Critical/High without confirmation

### HANDOFF 3: Architect → Builder (BMAD Brief)
**Frequency:** Per-component request
**Format:** Exact Tailwind classes, Framer Motion variants, props interface, responsive breakpoints, acceptance criteria
**Gate:** Builder CANNOT deviate — files Build Blocker on ambiguity, resolves in max 2 cycles
**Failure mode:** Design improvisation = automatic failure. Builder must not "optimize" Architect specs.

### HANDOFF 4: Lead Shepherd → Enrollment Strategist
**Frequency:** Per-consultation (hot lead booked)
**Format:** Consultation Prep Brief (Lead Shepherd Section 15K)
**Fields:** lead_profile, score, source_url, trigger_event, anticipated_objections, behavioral_history, carrier_recommendations
**Gate:** Score must be ≥60 (WARM) for auto-routing; 80+ triggers immediate Zach alert
**Failure mode:** Incomplete prep brief compromises entire enrollment. No error-correction mechanism defined.

### HANDOFF 5: Enrollment Strategist → Publisher (Monthly Intelligence)
**Frequency:** Monthly
**Format:** Top 10 client questions with frequency + content gap classification
**Fields:** question, frequency, gap_type (missing/outdated/confusing), recommended_angle, state_context
**Gate:** Publisher incorporates into Target Brief queue
**Gap:** No emergency escalation — Publisher runs its own editorial calendar

### HANDOFF 6: Lead Shepherd → All Agents (Revenue Intelligence Feed)
**Frequency:** Monthly to each agent
**Format:** 5 mandatory fields — data_point, trend, confidence, recommendation, expected_revenue_impact
**To Publisher:** Top revenue-producing articles, converting content patterns
**To GEO Monitor:** Top revenue-producing queries, AI engine commission value
**To Architect:** Form conversion rates by design variant
**To Builder:** Technical issues blocking lead capture
**Failure mode:** Feed delays — Day 1 = advisory, Day 3 = soft alert, Day 7 = hard alert

### HANDOFF 7: GEO Monitor → Builder (Infrastructure Alerts)
**Frequency:** Ad-hoc (anomaly-driven)
**Severity:** P0-P3
**Fields:** severity, affected_url, issue_description, recommended_fix, deadline
**Failure mode:** CSP changes from Builder can break GEO Monitor's visibility without test verification

### HANDOFF 8: Publisher → Pilot (Draft Submission)
**Frequency:** Per-article
**Format:** Sanity.io document (draft status)
**Gate:** Pilot reviews in Sanity Studio, approves → live
**Rule:** Publisher NEVER publishes directly — always draft

---

## 4. DEPENDENCY CHAIN (Critical Path)

```
Content → Traffic → Lead → Score → Nurture → Consultation → Enrollment → Commission → Attribution

GEO          Pub-                Lead         Enroll-
Monitor → lisher → Visitor → Shepherd → Strategist → $$ → Lead Shepherd (attribution loop)
              |                      |            |
              v                      v            v
           Builder              Architect      Pilot
         (infra)              (design)      (approve)
```

**The critical path is:**
1. GEO Monitor identifies citation gap →
2. Publisher writes article →
3. Builder deploys it with proper schema →
4. GEO Monitor verifies citation →
5. Traffic generates leads →
6. Lead Shepherd scores and nurtures →
7. Enrollment Strategist closes →
8. Lead Shepherd attributes revenue back to content

**If ANY link breaks, the entire revenue pipeline degrades.**

---

## 5. CONFLICT ZONES (Ranked by Severity)

### HIGH SEVERITY — Active Risk

**C1: Lead Shepherd ↔ Enrollment Strategist — Post-Sale Notification Stacking**
- Shepherd initiates post-sale nurture; Strategist initiates 30-day cross-sell (life insurance, Aflac)
- Client may receive simultaneous touchpoints from two agents
- **No coordination mechanism defined**
- **Fix needed:** Shepherd owns all post-enrollment communication; Strategist feeds cross-sell triggers TO Shepherd

**C2: Lead Shepherd ↔ Enrollment Strategist — Scoring Reality Gap**
- Shepherd scores leads on engagement signals; Strategist sees what actually closes
- No real-time "this lead was mis-scored" feedback loop
- Monthly objection report exists but it's too slow for active pipeline
- **Fix needed:** Immediate scoring dispute flag from Strategist during/after consultations

**C3: Builder — Critical Codebase Bugs (15 known)**
- ALL state links broken (redirect to 404)
- CSP blocks Sanity API and Calendly
- Two lead capture forms submit nowhere (localStorage only / fake setTimeout)
- Security credentials exposed in public git history
- Zero structured data on new Sanity posts
- **Impact: Revenue engine is partially broken RIGHT NOW**

**C4: Publisher ↔ GEO Monitor — Citation Attribution Gaps**
- ChatGPT, Claude don't pass referrer headers
- Mobile app citations invisible
- Copy-paste sharing appears as direct traffic
- **Impact: Undercounts actual citation value, skewing Publisher's content decisions**

### MEDIUM SEVERITY — Design Risk

**C5: Enrollment Strategist ↔ Publisher — Content Accuracy**
- No verification that published articles are accurate before clients see them
- No emergency content request for urgent corrections
- Terminology inconsistency: Strategist uses enrollment language, Publisher uses article language

**C6: Builder ↔ Architect — Tailwind Config Ambiguity**
- 66 files use emerald-500; config defines brand-jade-500
- Only Architect can authorize migration sprint
- Visual inconsistency persists until authorized

**C7: Publisher v3.20 Volatility vs. Builder v2.6 Frozen**
- Publisher at 3.20 (heavy iteration) vs. Builder frozen at 2.6-FINAL-LOCKED
- Publisher may request infra changes Builder can't accommodate without formal amendment
- Bottleneck: Max 3 amendments per quarter, Pilot approval required

---

## 6. SINGLE POINTS OF FAILURE

| SPOF | Impact | Mitigation |
|---|---|---|
| **GEO Monitor down** | Publisher writes blind, no citation feedback → content quality degrades silently | Publisher falls back to historical Learning Log patterns |
| **Builder down** | Nothing deploys, forms stop working, CSP blocks APIs | Incident response P0, Pilot notified immediately |
| **Lead Shepherd down** | No scoring, no nurture, leads go cold | Ringy webhook queue (15-min retry), local lead queue |
| **Publisher down** | No new content → GEO has nothing to cite → traffic declines | Backlog of evergreen content handles short gaps; monthly cadence means 1-2 weeks tolerated |
| **Pilot unavailable** | No approvals, no deploy authority | Draft articles wait; Critical BTRs blocked after 2 revision cycles |
| **Ringy CRM down** | Lead scoring pipeline blocked, nurture sequences can't run | Local queue with 15-min retry, Zach alert at 30 min |

---

## 7. EVOLUTION MAP (Version Stability Analysis)

```
STABLE ◄─────────────────────────────────────────► VOLATILE

Builder v2.6     Architect v3.0     GEO v1.0     Shepherd v1.0    Pub v3.20    Strategist v1.2
(FROZEN)         (Mature)           (New)        (New)            (Volatile)   (Evolving)
 │                 │                  │             │                │             │
 Formal            Mature             Assumptions   Assumptions      Heavy         Product-
 amendment         governance,        unvalidated   unvalidated      iteration,    focused,
 process           locked tokens      at scale      at scale         320 versions  state-specific
                                                                                   nuance
```

**Implications:**
- The system's center of gravity is shifting toward the agents that handle revenue (Lead Shepherd, Enrollment Strategist, Publisher)
- Builder being frozen is correct — the tech debt should be addressed in a dedicated remediation sprint, not by changing the spec
- GEO Monitor v1.0 will evolve rapidly as real citation data accumulates — expect v1.5+ within 60 days
- Publisher v3.20 suggests the content formula is still being refined — stabilize at v4.0+ before declaring mature

**Recommendation:** The next evolution should be version alignment — create a quarterly spec sync where all agents verify their handoff formats are still compatible.

---

## 8. WHAT THIS FRAMEWORK TELLS US

### What's Working:
1. Clean separation of concerns — 6 agents, 6 missions, minimal redundancy
2. Formal handoff protocols with defined formats — not ad-hoc
3. Quality gates everywhere — every agent has multi-layer verification
4. Intelligence feedback loops — revenue data feeds back to content decisions
5. Self-improving loops — agents accumulate learning over time
6. Pilot remains human — Zach controls all deployments, no autonomous publishing

### What's Broken (Prioritized):
1. **CRITICAL: Builder codebase bugs** — state links, CSP, form submissions, credential exposure. 15 known bugs. These are actively losing revenue.
2. **HIGH: Post-sale notification stacking** — two agents touching the same client simultaneously
3. **HIGH: No scoring dispute mechanism** — Shepherd and Strategist can't disagree in real time
4. **MEDIUM: Content accuracy gap** — no publication verification before client exposure
5. **MEDIUM: Version drift risk** — frozen Builder vs. volatile Publisher

### Blind Spots (Things No Agent Owns):
1. **Website performance monitoring** — Builder deploys, no one monitors CWV trends over time
2. **Competitor article freshness tracking** — GEO Monitor tracks citations, not competitor content velocity
3. **Client satisfaction / NPS** — revenue attribution exists, but no satisfaction loop
4. **Compliance audit trail** — TCPA, HIPAA, state licensing compliance mentioned but no agent owns audit
5. **A/B testing framework** — Architect spec mentions variants, no system for running experiments

---

## 9. RECOMMENDED NEXT ACTIONS

1. **Immediate:** Builder remediation sprint — fix the 15 known bugs (especially broken state links, CSP, form submissions, credential rotation)
2. **This week:** Define post-sale coordination protocol between Lead Shepherd and Enrollment Strategist
3. **This week:** Establish real-time scoring dispute mechanism
4. **This month:** Set up quarterly spec sync to align handoff formats across all agents
5. **This quarter:** Stabilize Publisher at v4.0+ and GEO Monitor at v1.5+ through accumulated learning

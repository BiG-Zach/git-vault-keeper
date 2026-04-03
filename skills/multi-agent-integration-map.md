# Multi-Agent System Integration Map

## Bradford Informed Guidance | 6-Agent Production Architecture

Version: 1.0 | Date: 2026-04-02 | Author: AI Operator

---

## 1. AGENT INVENTORY

### THE ARCHITECT v3.0 (3,046 lines)
**Mission:** Design system governance authority. Defines what the brand looks like, how components behave, and what standards every pixel must meet. Writes specifications; does not write code.

**Activation Modes:**
- BMAD Brief Generation: Builder requests component spec → Architect produces exact Tailwind classes, Framer Motion variants, props interface, responsive behavior, accessibility, acceptance criteria
- Design Audit: Reviews deployed pages against token registry → Identifies violations → Produces prioritized remediation list for Builder
- Brand Decision: Pilot requests design decision → Evaluates against principles → Proposes options with tradeoffs → Recommends one → Pilot approves
- Interactive Primitive Specification Review: Publisher outputs interactive component spec → Reviews for visual feasibility → Produces BMAD Brief for Builder

**Quality Gate:** 72 checkpoints across Token Compliance (10), Typography (7), Semantic HTML (5), SEO (4), Performance (4), Accessibility (10), Component (10), Responsive (5), Edge Cases (2), Animation (15)

**Outputs:**
- BMAD Briefs → Builder (component specifications with exact Tailwind classes)
- Design Audit Reports → Builder (violations + remediation priorities)
- Design Recommendations → Pilot (brand decisions with tradeoffs)
- Token Registry updates → All agents (design token changes flow to every surface)

---

### THE BUILDER v2.6 (2,983 lines)
**Mission:** Implementation engine. Transforms Architect specifications, Publisher infrastructure requests, and GEO Monitor alerts into working code. Owns the Vite SPA → Vercel deployment pipeline.

**Core Responsibilities:**
- Implement all BMAD Briefs from Architect exactly as specified
- Fix codebase bugs (4 known critical bugs tracked in spec)
- Manage Sanity CMS integration (@sanity/client API mutations)
- Handle prerendering routes (37 currently), schema generation, and bot access
- Execute migrations and emergency fixes
- Manage Infrastructure: Vite, Vercel, Tailwind, Framer Motion, Zod validation

**Ground-Truth Flags:**
- Address: BiG partner office Tampa (schema), Orlando (GBP) — both correct for different purposes
- Sanity Studio: Separate project — push content via API, do NOT create studio/ directory
- Brand: Jade (#12bfae) + Gold (#F59E0B) — NOT Teal
- Branch: main only (no develop branch)
- Known bugs: placeholder phone in stateVisuals.ts, Zod not installed, duplicate FAQ schema, SanityPost missing structured data

**Outputs:**
- Production code → Deployed site (Vercel)
- Fixed bugs → All agents benefit
- Schema functions → Publisher (article schema generation)
- Infrastructure fixes → GEO Monitor (bot access, prerendering, IndexNow)

---

### THE PUBLISHER v3.20 (2,919 lines)
**Mission:** Content production and deployment engine. Transforms Target Briefs into authoritative, GEO-optimized articles that rank on Google AND get cited by AI answer engines (Perplexity, ChatGPT, Google AI Overviews, Gemini).

**Three-Layer Architecture:**
- LAYER A (Sections 1-8): CORE EXECUTION — Research protocol, article writing, quality gate, schema injection
- LAYER B (Sections 9-34): REFERENCE INTELLIGENCE — Carrier data, entity vocabulary, citation genome, platform-specific guides
- LAYER C (Sections 35-39): SELF-EVOLUTION — Performance Digest, Audience Intelligence Brief, inter-agent integration, Pilot notification protocol

**Pipeline:** Receive Target Brief → Pre-Write Research (10 steps) → Pre-Write Declarations (24 variables) → Write Article (6 blocks) → 10-Point Verification → 65-Point Quality Gate → Push to Sanity (draft) → Pilot Notification

**Content Architecture:** Version Header → Quick Answer (≤40 words) → Key Takeaways → Citation Prime Zone (7 elements) → 7-10 question-style H2 sections → Comparison Table → Bridge Block → FAQ (5+ Q&As)

**Quality Gate:** 65 checkpoints — Pre-Write (9), Structural (12), Entity & Language (10), Content Density (8), EEAT (7), SEO (6), Schema (5), Legal (5), Deployment (3)

**Outputs:**
- Complete article (1,800-2,800 words) → Sanity draft → Pilot reviews
- JSON-LD Schema (9 types: Article, Person, ProfessionalService, FAQPage, ItemList, InsuranceAgency, Service, FinancialProduct, BreadcrumbList) → Builder injects via SanityPost component
- Off-page drafts (LinkedIn, Reddit, email) → Pilot approves for posting
- Session 2: YouTube brief, lead magnet, 3-email nurture sequence → Pilot approves

---

### THE GEO MONITOR v1.0 (2,558 lines)
**Mission:** Generative engine optimization intelligence unit. The eyes and ears of the agency in the AI citation economy. Tracks where BIG appears in AI answers, generates Target Briefs, monitors competitor displacement.

**Activation Modes:**
- Citation Audit: Full scan of AI platforms → Citation Status Report with per-engine breakdown, competitor comparison, gap analysis
- Target Brief Generation: Gap analysis + competitor displacement + fan-out mapping → Publisher-ready Target Brief
- Anomaly Detection: Sudden citation drop, competitor surge, content decay → Alert with severity (P0-P3), root cause hypothesis, recommended response
- Performance Digest: Weekly/monthly summary of citation trends, AAIR progress → Feeds Publisher Session 1

**Metrics Tracked:**
- AAIR Score (AI-Assisted Information Retrieval): Composite citation authority score (target: 50/100 by Q4 2026)
- Citation Rate: Queries where BIG cited / Total checked × 100 (target: >30%)
- Time-to-Citation: Median days from publish to first AI citation (target: <14 days)
- Brief Success Rate: Briefs that led to citations / Total published × 100 (target: >50%)

**Quality Gate:** 72 checkpoints across citation audit, brief generation, anomaly detection, competitive intelligence, health dashboard

**Outputs:**
- Target Briefs → Publisher (structured brief with competitive intelligence, fan-out queries, success criteria)
- Infrastructure Alerts → Builder (schema missing, prerendering broken, bot access blocked)
- Performance Digests → Publisher (feeds Session 1 patterns) + Pilot (strategic overview)
- Anomaly Alerts → Pilot + relevant agents (P0-P3 severity)

---

### THE LEAD SHEPHERD v1.0 (3,177 lines)
**Mission:** Revenue intelligence and lead nurturing engine. Closes the loop between content and commission. Scores leads, nurtures them through sequences, detects decay, attributes revenue to content sources.

**Core Revenue Model:**
- ACA: $50 referral bonus (Trojan Horse — generates leads for conversion)
- Private Health (STM + Fixed Benefit): HIGH commission (primary revenue driver)
- Life Insurance (IUL, Term, Whole): HIGHEST commission $2K-$10K+ first year (profit center)
- Supplemental (Aflac): MODERATE incremental revenue

**Activation Modes:**
- Lead Intake & Scoring: Form submission → 4-pillar scoring → Route to nurture → Alert Zach if score >80
- Decay Detection: Daily scan for leads going cold → Trigger re-engagement → Alert Zach for high-value
- Revenue Attribution: Monthly analysis of which content/channels/queries produced which leads/commissions
- Funnel Optimization: Quarterly deep-dive into conversion rates at every stage → Identify leaks → Recommend fixes
- Consultation Prep: Lead books consultation → Generate pre-meeting brief with profile, behavioral history, recommendations
- Post-Sale Intelligence: Track retention, cross-sell opportunities, referral pipeline, feed attribution back to content agents
- Health Monitoring: 8 KPIs tracked continuously, Composite Health Score, alerts on red-flag thresholds

**Ringy CRM Integration:**
- Dual-routing: Text consent → Auto-text campaign; Email/phone-only → Manual follow-up
- Pipeline stages: New → Contacted → Qualified → Consultation Booked → Attended → Quote → Won → Lost
- JWT consent tokens, TCPA compliance, CAN-SPAM compliance

**Quality Gate:** 72 checkpoints — Lead Intake (10), Scoring (8), Nurture (10), Decay (8), Revenue Attribution (10), Funnel Analytics (12), Cross-Agent Intelligence (10), General (4)

**Outputs:**
- Scored leads → Zach alerts (score >80) + Ringy updates
- Nurture sequences → Ringy campaigns (product-specific + score-specific)
- Consultation Preps → Zach (pre-meeting briefs with lead profile and talking points)
- Revenue Attribution Reports → All agents (monthly feeds with per-article and per-query revenue data)
- Cross-Agent Intelligence Feeds:
  → Publisher: Revenue-by-article data + top client questions + content gap requests
  → GEO Monitor: Revenue-by-query data + misconceptions indicating wrong AI answers
  → Architect: Conversion-by-design data + form confusion points + trust signal effectiveness
  → Builder: Form performance data + integration gaps + technical issues

---

### THE ENROLLMENT STRATEGIST v1.0 (2,211 lines)
**Mission:** The last mile agent. Where consultations become clients and quotes become commissions. Everything the other five agents produce exists to get to this moment: a person completing an enrollment application.

**Product Hierarchy (Revenue Priority):**
- T1: Private Health Insurance (STM + Fixed Benefit — Allstate, SGIC, UHC, Philadelphia American, MedMutual)
- T2: Life Insurance (Americo, Mutual of Omaha, Illinois Mutual — IUL, Term, Whole, STD, LTC, Final Expense)
- T3: Supplemental (Aflac — Accident, Critical Illness, Hospital Indemnity)
- T4: ACA (Trojan Horse — $50 referral, generates leads for T1/T2 conversion)

**Enrollment Methods:**
- Screenshare with Zach (primary — 2x conversion of self-service for private health)
- Self-service carrier quote (secondary)

**Key Responsibilities:**
- Guide screenshare enrollments (5-step protocol: prep → present 3-5 plans → compare → apply → submit)
- Generate self-service quotes with follow-up cadence (Day 2, Day 5, Day 10)
- Carrier enrollment matrix (7 states × carrier × plan specifics)
- Compliance enforcement (NPN 18181266 on every application, accuracy checklist, HIPAA)
- Capture client questions, misconceptions, objections → Feed to Publisher/GEO Monitor
- Post-enrollment retention and cross-sell detection

**Quality Gate:** 72 checkpoints — Enrollment Compliance (12), Screenshare Protocol (10), Self-Service Quotes (8), Carrier Matrix (8), Client Intelligence (10), Post-Sale (8), Cross-Agent Intelligence (8), General Quality (8)

**Outputs:**
- Enrolled clients → Revenue
- Cross-sell opportunities → Lead Shepherd (for nurturing)
- Client Questions/Misconceptions → Publisher (monthly reports for content creation)
- Objection Library → Lead Shepherd (feeds consultation prep)
- Conversion Analytics → Pilot (monthly enrollment reports)
- UX/Trust Signal Reports → Architect (quarterly design improvements)
- Carrier Technical Issues → Builder (integration fixes needed)

---

## 2. HANDOFF MATRIX

| From ↓ / To → | ARCHITECT | BUILDER | PUBLISHER | GEO MONITOR | LEAD SHEPHERD | ENROLLMENT | PILOT |
|---|---|---|---|---|---|---|---|
| **ARCHITECT** | — | BMAD Briefs, Remediation Lists, Token Updates | Design specs for calculator primitives | N/A | N/A | N/A | Design Decisions for Approval |
| **BUILDER** | Fix requests for spec review | — | Schema functions, SanityPost rendering | IndexNow execution, Bot access fixes | Form performance → /api/lead | Form UX fixes, carrier portal tech | Infrastructure status updates |
| **PUBLISHER** | Content primitive specs for architecture | Task requests for infrastructure | — | Citation tracking data, Performance Digest input | Article → Lead source metadata | Client question topics from content | Articles as Sanity Drafts, Notifications |
| **GEO MONITOR** | N/A | Infrastructure Alerts (schema, prerender) | Target Briefs, Performance Digest, PAA data | — | N/A | N/A | Quarterly Reports, Anomaly Alerts |
| **LEAD SHEPHERD** | Conversion-by-design reports, Trust signal data | Form performance data, Integration gaps | Revenue-by-article data, Top client questions | Revenue-by-query data, AI misconceptions | — | Consultation Preps, Cross-sell intelligence | Monthly Funnel Reports, Attribution data |
| **ENROLLMENT** | UX Reports (forms, trust signals) | Carrier portal tech issues | Client Q&A Reports, Misconception Reports | State-specific confusion, Query mapping | Objection Library, Conversion patterns | — | Monthly Reports, Carrier Performance |
| **PILOT** | Design approvals | Deploy approvals | Article approvals, Topic requests | Strategic directives | Resource requests | Policy approvals | — |

---

## 3. FULL PIPELINE FLOW

### Phase 1: INTELLIGENCE (Trigger)
GEO Monitor detects:
- Citation gap (BIG not cited for a high-value query)
- Competitor displacement (competitor appears in AI answer)
- Content decay signal (article losing citations)
- Predictive demand (upcoming enrollment deadline)

GEO Monitor generates → **Target Brief** (structured with competitive intelligence, fan-out queries, success criteria)

Performance Digest → feeds Publisher Session 1 with learned citation patterns

### Phase 2: CREATION (Publisher)
Publisher receives → **Target Brief** from GEO Monitor (or direct from Pilot)
Pre-Write Research: 10 steps including competitive analysis, PAA extraction, entity mapping
Pre-Write Declarations: 24 variables explicitly stated
Article written: 1,800-2,800 words, 6-block architecture, question-style H2s
Quality Gates: 10-Point Verification + 65-Point Quality Gate
Schema injection: 9 JSON-LD types output
Deploy → Sanity post as **DRAFT** (never live)
Pilot Notification: Complete status report with action items

### Phase 3: AMPLIFICATION (Publisher Session 2)
Off-page draft generation: LinkedIn posts, Reddit expert answers (2-3 if Perplexity primary), email newsletter snippet
YouTube brief + VideoObject schema generated
Lead magnet concept + 3-email nurture sequence drafted
Cluster Registry updated with internal linking inventory

### Phase 4: DESIGN REVIEW (Architect → Builder)
If article includes interactive primitives (calculators, checkers, analyzers):
→ Publisher outputs Interactive Primitive Specification
→ Architect reviews for visual feasibility → BMAD Brief produced
→ Builder implements component exactly as specified
→ Pilot approves

If infrastructure gaps detected (schema missing, prerendering broken, bot access issues):
→ Publisher generates Builder Task Request
→ Builder implements fix → IndexNow re-crawl submission

### Phase 5: LEAD CAPTURE (Live Site → Lead Shepherd)
Reader visits article via AI citation or organic search
Reader engages → CTA click → Form submission (/api/lead or /api/ringy-proxy)
Lead hits Ringy CRM via dual-route:
→ Text-consent leads → auto-text campaign (immediate response)
→ Email-only leads → manual follow-up campaign (email sequence, Zach calls)

Lead Shepherd scores lead on 4 pillars:
1. Demographics (30pts): Age, family, income, state
2. Intent Signal (25pts): Form type, pages visited, time on site
3. Product Fit (25pts): Life insurance intent weighted 5-10x
4. Urgency (20pts): Seasonal context, stated timeline

Score >80 → Zach alerted immediately (Hot Lead, respond <1 hour)
Score 50-79 → Nurture sequence activated (Warm)
Score <50 → Light nurture tracked (Cool)

### Phase 6: NURTURE (Lead Shepherd)
Product-specific nurture sequences:
→ ACA leads: ACA education → Private health alternatives → IUL introduction (Trojan Horse pipeline)
→ Life Insurance leads: Direct value education → Carrier comparison
→ Private Health leads: Plan comparison → Network verification

Decay Detection: Daily scan for cold leads (no engagement N days)
→ Trigger re-engagement sequences
→ Alert Zach for high-value cold leads

### Phase 7: ENROLLMENT (Enrollment Strategist)
Lead books consultation → Lead Shepherd generates Consultation Prep for Zach:
- Lead profile and score
- Behavioral history (pages visited, content consumed, email engagement)
- Recommended carriers and products based on state + profile
- Objection library for this lead type
- Talking points from the specific articles they read

Enrollment occurs via:
→ Screenshare with Zach (primary) — 5-step protocol
→ Self-service quote (secondary) — 3-touch follow-up

Post-enrollment:
→ Revenue attribution → Lead Shepherd (closes the loop back to content)
→ Cross-sell detection → Lead Shepherd (30-day IUL pitch for health clients)
→ Client questions/misconceptions → Publisher + GEO Monitor (monthly intelligence feed)
→ Objection patterns → Lead Shepherd (updates consultation prep library)

### Phase 8: CLOSED-LOOP FEEDBACK
Lead Shepherd monthly Revenue Attribution Reports feed to:
→ Publisher: "Article X generated 3 leads, 1 sale, $4,200 commission" — Publisher doubles down on that angle
→ GEO Monitor: "Query Y converts at 8x — prioritize Target Briefs for that cluster"
→ Architect: "Forms on state pages convert 3x blog CTAs — optimize all state page forms"
→ Builder: "Form field Z causes 40% abandonment — redesign with better UX"

Publisher updates Performance Digest with new patterns — next articles are written smarter
GEO Monitor adjusts AAIR targets — next Target Briefs are more focused
Architect updates design tokens/components — next pages convert better
Builder fixes integration gaps — next forms capture more leads
Enrollment Strategist refines carrier matrix — next consultations close faster

---

## 4. IDENTIFIED GAPS AND OVERLAPS

### GAPS (Missing Connections)

1. **No direct GEO Monitor → Enrollment Strategist feed**
   - Issue: GEO Monitor tracks which queries get AI citations but does not tell the Enrollment Strategist what topics clients are actively searching. Enrollment Strategist could pre-prepare carrier comparison materials for trending queries.
   - Impact: Missed opportunity for the "last mile" agent to anticipate client needs from search intelligence.
   - Fix: GEO Monitor should send a "Query Trend Report" to Enrollment Strategist monthly — which queries have rising citation activity (indicating market interest).

2. **No direct Publisher → Enrollment Strategist feed**
   - Issue: Publisher writes articles about specific carriers and products but does not tell the Enrollment Strategist which carrier content is resonating. Enrollment Strategist could tailor screenshare presentations accordingly.
   - Impact: Zach does not know which carrier the lead has already been educated about from content.
   - Fix: Article metadata (carrier mentions, product focus) flows to Enrollment Strategist via Lead Shepherd (already exists as "Source URL") but could be enriched with "Content Consumed Detail" field.

3. **No Architect → Publisher feedback loop**
   - Issue: Architect does not tell Publisher which design primitives (calculators, checkers, interactive tools) perform best. Publisher could write articles optimized for specific interactive components.
   - Impact: Publisher creates articles without knowing which interactive formats convert best.
   - Fix: Architect sends "Component Performance Report" quarterly to Publisher — which primitives have highest engagement and conversion.

4. **Builder Task Request from GEO Monitor is underutilized**
   - Issue: GEO Monitor has an Infrastructure Alert schema for Builder but it is primarily reactive (schema missing, prerendering broken). No proactive requests for features that would improve citation tracking on the site.
   - Fix: GEO Monitor should generate "Feature Request" briefs for Builder — e.g., "Add structured data for this carrier that AI engines currently do not see."

### OVERLAPS (Duplicate Responsibility)

1. **Schema Generation: Publisher vs. Builder**
   - Publisher outputs inline JSON-LD schema in articles.
   - Builder has `src/utils/schema.ts` with functions that generate schema on state pages (InsuranceAgency, ProfessionalService, LocalBusiness, MedicalClinic).
   - Issue: Duplicate FAQ schema generators (`faqSchema.ts` standalone vs. `schema.ts`). Publisher outputs inline FAQPage schema. Both exist simultaneously.
   - Fix: Consolidate to single source. Builder maintains `schema.ts` as the schema registry. Publisher's inline schema output is the DESIRED state — Builder upgrades functions to match.

2. **Client Question Capture: Publisher vs. Enrollment Strategist vs. Lead Shepherd**
   - Publisher: Captures PAA questions during Pre-Write Research
   - Enrollment Strategist: Captures client questions and misconceptions during enrollment
   - Lead Shepherd: Captures top client questions for content gap analysis
   - Issue: Three agents independently track client questions with no unified taxonomy.
   - Fix: Lead Shepherd should be the central question registry. Enrollment Strategist sends questions monthly to Lead Shepherd. Publisher requests PAA supplements from Lead Shepherd. One source of truth for "what clients are asking."

3. **Quality Gates: All agents use 72 checkpoint gates (except Publisher = 65)**
   - Issue: Inconsistent checkpoint counts make cross-agent quality comparison meaningless. Different gates measure different things, so the variance is understandable — but there is no "cross-agent integration quality gate" that verifies handoff completeness.
   - Fix: Add a 10-point "Integration Handoff Gate" that every agent runs before sending output to another agent.

---

## 5. RECOMMENDATIONS FOR TIGHTENING FEEDBACK LOOPS

### Immediate (High Impact, Low Effort)

1. **Performance Digest → Enrollment Strategist Feed**
   - The GEO Monitor already generates Performance Digests that flow to the Publisher. The same data (which queries generate citations, which AI engines cite BIG) is valuable to the Enrollment Strategist for understanding client research patterns. Add the Enrollment Strategist as a recipient of the Performance Digest with a "Client Intelligence" filter — only surface data about products, carriers, and plan types.

2. **Consultation Prep → Publisher Loop**
   - The Lead Shepherd generates consultation preps containing "Key content consumed: which articles — what they learned." This is gold for the Publisher — it tells exactly which articles clients read before buying. The Lead Shepherd should send a monthly "Pre-Conversion Path" report to the Publisher listing the articles clients read in the 7 days before purchase. Publisher can then strengthen internal linking between high-converting article pairs.

3. **Enrollment → Publisher Content Refresh Trigger**
   - The Enrollment Strategist captures client misconceptions monthly. When a misconception appears in 3+ enrollments, it triggers a content gap. The Publisher should receive a "Misconction Alert" — generate a Target Brief or article refresh to address the misconception before others search for it.

### Medium Impact (Requires Process Changes)

4. **Cross-Agent Handoff Validation Gate**
   - Every agent should run a 5-point "Handoff Checklist" before outputting to another agent:
     1. Schema: Is the data structure complete (all required fields)?
     2. Freshness: Is the data less than 7 days old?
     3. Targeted: Is it specific to the receiving agent's domain?
     4. Actionable: Does the receiver know what to do with it?
     5. Attributed: Source Agent and timestamp included?

5. **Unified Revenue Attribution Dashboard**
   - Current revenue attribution is fragmented: Lead Shepherd tracks content → lead → commission. Publisher tracks article performance via citation rates. There is no single view showing: "This article generated 3 leads, 1 sale, $4,200, and is cited by 3 AI engines."
   - The Lead Shepherd should produce a unified "Revenue + Citation Dashboard" monthly that maps each published article to its citation count AND its commission yield. This reveals the true ROI of the GEO/Publisher pipeline.

6. **Agent-Specific Seasonal Awareness**
   - The Publisher handles OEE (Nov 1 – Jan 15) content calendars. The Enrollment Strategist handles OEE enrollment volume. The Lead Shepherd handles OEE urgency sequences. The GEO Monitor handles OEE query surge detection. All four agents are seasonally aware but operate independently.
   - Recommend: A "Seasonal Readiness Protocol" triggered 30 days before major events (OEE start, OEE deadline, Medicare AEP, tax season). All agents receive the same trigger and coordinate their outputs.

7. **Architect → Builder BMAD Brief SLA**
   - The Architect has Decision Velocity Targets (BMAD Brief: 1-2 sessions) but no formal SLA tracked. Add a "Time from Brief Request to Brief Delivery" metric in the Architect's Health Dashboard.

### Long-term (Strategic)

8. **Agent-to-Agent Direct API Integration**
   - Currently, inter-agent communication is manual: one agent generates output, the Pilot reviews, then another agent picks it up. Future state: direct API handoffs. The GEO Monitor generates a Target Brief → automatically queues it in the Publisher's task pipeline. The Publisher publishes an article → automatically triggers a citation check by the GEO Monitor in 7 days.
   - This requires a central task orchestration layer (could be a Sanity document, a JSON file, or a lightweight API).

9. **Citation-to-Commission Attribution Chain**
   - The holy grail: Map from AI citation → organic traffic → form submission → enrolled client → commission amount. Currently this is tracked in fragments:
     - GEO Monitor tracks citations
     - Plausible tracks traffic
     - Lead Shepherd tracks leads
     - Enrollment Strategist tracks commissions
   - No agent owns the FULL chain. The Lead Shepherd should be designated as the attribution chain owner, pulling data from all other agents into a single attribution model.

10. **Self-Evolving Agent Specs**
    - All 6 agents have self-amendment protocols. But there is no mechanism for agents to trigger spec amendments in OTHER agents. When the Enrollment Strategist discovers that clients from State X have unique concerns, the Enrollment Strategist should be able to submit a "Spec Amendment Request" to the Publisher (adjust content strategy for State X) and the Lead Shepherd (adjust nurture sequences for State X).

---

# HERMES AGENT MIGRATION PLAN
## Bradford Informed Guidance — March 2026
## Migration from OpenClaw to Hermes Agent Framework

---

## WHY MIGRATE

OpenClaw has recurring stability issues:
- Gateway breaks frequently, requires token refresh
- Multiple instances get created accidentally
- Skills get archived/renamed during fixes
- Context gets lost between sessions
- Telegram integration breaks repeatedly

Hermes Agent offers:
- Self-improving skill system (learns from every interaction)
- Stable Telegram integration (primary interface)
- Background automation (doesn't need terminal running)
- Scheduled tasks (hourly/4hr/6hr/daily/on-demand)
- Local file storage (all memory/skills stay on your machine)
- OpenClaw migration built-in (`hermes migrate` command)
- PaperClip adapter for multi-agent org chart dashboard

---

## PRE-MIGRATION CHECKLIST

- [ ] Back up ALL soul files locally (copy all .md files to ~/bradford-agent-backup/)
- [ ] Back up OpenClaw skills directory
- [ ] Back up OpenClaw memory files
- [ ] Document all current OpenClaw scheduled tasks
- [ ] Verify Hermes is installed: `npm install -g @anthropic-ai/hermes` or follow GitHub instructions
- [ ] Have API keys ready: Anthropic (Claude), OpenRouter, or local Ollama

---

## MIGRATION STEPS

### Step 1: Install Hermes
```bash
# Follow official install from https://github.com/nousresearch/hermes-agent
git clone https://github.com/nousresearch/hermes-agent.git
cd hermes-agent
npm install
```

### Step 2: Run OpenClaw Migration
```bash
hermes migrate
# This automatically detects OpenClaw and imports:
# - SOUL.md (agent identity)
# - Memory files
# - Skills
# - Command allow list
```

If you already completed Hermes setup without migrating:
```bash
hermes migrate --from-openclaw
```

### Step 3: Configure Telegram Bot
Connect to your existing @ZMB007_bot or create a new bot for Hermes.
Hermes Telegram integration is the primary interface — more stable than OpenClaw's.

### Step 4: Import Soul Files as Hermes Skills

Each of our 6 agents becomes a Hermes skill:

| Agent | Source File | Hermes Skill Name |
|---|---|---|
| Publisher | SOUL.md + THE-PUBLISHER-v3.20.md | publisher |
| Architect | AGENTS.md + THE-ARCHITECT-v3.0.md | architect |
| Builder | BUILDER.md + THE-BUILDER-v2.6-FINAL-LOCKED.md | builder |
| GEO Monitor | GEO-MONITOR.md + THE-GEO-MONITOR-v1.0.md | geo-monitor |
| Lead Shepherd | LEAD-SHEPHERD.md + THE-LEAD-SHEPHERD-v1.0.md | lead-shepherd |
| Enrollment Strategist | ENROLLMENT-STRATEGIST.md + THE-ENROLLMENT-STRATEGIST-v1.2.md | enrollment-strategist |

For each agent, the compact file (.md) is the always-loaded identity. The deep spec (THE-*.md) is loaded on demand when the agent needs reference data.

### Step 5: Set Up Scheduled Automations

Map our agent workflows to Hermes scheduled tasks:

| Schedule | Task | Agent |
|---|---|---|
| Every 4 hours | Scan AI platforms for BIG citations | GEO Monitor |
| Every 6 hours | Check for content decay signals | GEO Monitor |
| Daily | Generate trending keyword opportunities | GEO Monitor |
| Daily | Scan for leads going cold in Ringy | Lead Shepherd |
| Weekly | Performance Digest (citation trends + AAIR) | GEO Monitor |
| Weekly | Revenue attribution report | Lead Shepherd |
| On demand | Write article from Target Brief | Publisher |
| On demand | Generate BMAD Brief for component | Architect |
| On demand | Execute build task | Builder |
| On demand | Enrollment prep / screenshare guide | Enrollment Strategist |

### Step 6: Configure PaperClip (Optional — Multi-Agent Dashboard)

PaperClip gives a visual org chart dashboard for all 6 agents:
```bash
# Inside Hermes terminal:
# Install PaperClip adapter
hermes install paperclip-adapter
```

Agent hierarchy in PaperClip:
- **Pilot (Zach)** — CEO, approves all outputs
  - **Publisher** — Content production
  - **GEO Monitor** — Citation intelligence (reports to Pilot, feeds Publisher)
  - **Architect** — Design system governance
  - **Builder** — Technical execution (receives specs from Architect)
  - **Lead Shepherd** — Revenue intelligence
  - **Enrollment Strategist** — Last mile conversion (receives leads from Lead Shepherd)

### Step 7: Verify Migration

After setup, test each agent through Telegram:
PUBLISHER: WRITE "ACA subsidy crisis Florida families 2026"
GEO MONITOR: AUDIT "ACA subsidy crisis"
ARCHITECT: AUDIT homepage
BUILDER: EXECUTE type-check
SHEPHERD: DECAY SCAN
ENROLLMENT: HEALTH

Each command should activate the correct agent skill and produce structured output.

---

## PARALLEL RUNNING PERIOD

Run both OpenClaw and Hermes for 1-2 weeks:
- Week 1: Run Publisher + GEO Monitor in Hermes, everything else in OpenClaw
- Week 2: If stable, migrate Lead Shepherd + Enrollment Strategist to Hermes
- Week 3: Migrate Architect + Builder to Hermes
- Week 4: Decommission OpenClaw

---

## ROLLBACK PLAN

If Hermes has critical issues:
1. All soul files are in the git repo — always accessible
2. OpenClaw is still installed — just run `openclaw` to restart
3. Memory/skills backed up in ~/bradford-agent-backup/
4. No data is lost — everything is local markdown files

---

## KEY DIFFERENCES TO REMEMBER

| Feature | OpenClaw | Hermes |
|---|---|---|
| Primary interface | Gateway UI (broken) | Telegram (stable) |
| Terminal | Required running | Background daemon |
| Self-improving | Manual (learning.md) | Automatic (built-in) |
| Scheduled tasks | Supported | Supported + more stable |
| Multi-agent | Manual routing | PaperClip org chart |
| Migration | N/A | Built-in from OpenClaw |
| Community | 340K GitHub stars | 15K stars (growing fast) |
| Stability | Degrades over time | Designed for persistence |

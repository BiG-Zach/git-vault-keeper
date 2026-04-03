#!/usr/bin/env bash
set -euo pipefail

TYPE="${1:-mobile}" # Default to 'mobile' if not specified
DATE="$(date +%Y%m%d)"
BRANCH="handoff/${DATE}-${TYPE}"

# --- Safety guard ---
if git ls-remote --exit-code --heads origin "$BRANCH" >/dev/null 2>&1; then
    echo "‚ö†Ô∏è Branch '$BRANCH' already exists on remote."
    read -p "Do you want to overwrite it? (y/N) " CONFIRM
    if [[ "${CONFIRM:-N}" != "y" && "${CONFIRM:-N}" != "Y" ]]; then
        echo "‚ùå Aborted."
        exit 1
    fi
fi

echo "Ì≥¶ Creating Lovable handoff branch: $BRANCH"

# 1) Sync with main
git checkout main
git pull origin main

# 2) Create/switch to branch
git switch -C "$BRANCH"

# 3) Commit all changes
git add -A
git commit -m "chore: Lovable handoff ($TYPE)" || echo "‚úÖ No changes to commit."

# 4) Push branch (Vercel preview auto-build)
git push -u origin "$BRANCH" --force

# 5) Trigger Vercel build + auto-open preview
echo "‚è≥ Building preview on Vercel..."
PREVIEW_URL=$(vercel --confirm --scope zach-bradfords-projects-b56c8765 | grep -Eo 'https://[^ ]+\.vercel\.app' | tail -n1)

if [[ -n "$PREVIEW_URL" ]]; then
    echo "Ì∫Ä Preview ready: $PREVIEW_URL"
    if command -v xdg-open >/dev/null; then xdg-open "$PREVIEW_URL"
    elif command -v open >/dev/null; then open "$PREVIEW_URL"
    elif command -v start >/dev/null; then start "$PREVIEW_URL"
    fi
else
    echo "‚ö†Ô∏è Could not auto-detect preview URL."
fi

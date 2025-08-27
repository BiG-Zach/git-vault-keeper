# Add this to your package.json scripts section:

\"monitor-seo\": \"node scripts/monitor-service-pages.js\",
\"monitor-daily\": \"node scripts/monitor-service-pages.js && echo 'Next check: $(date -d '+1 day')'\"

# Usage:
# npm run monitor-seo          # Run once
# npm run monitor-daily        # Run with next check reminder

# Set up daily monitoring (optional - run in terminal):
# Windows Task Scheduler or cron job:
# 0 9 * * * cd /path/to/project && npm run monitor-seo

# Or manual daily checks for the next week to monitor recovery
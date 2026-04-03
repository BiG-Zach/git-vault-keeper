"""
insurance_news_mcp.py
An MCP Server for fetching real-time insurance legislation updates.
Requires: pip install fastmcp feedparser requests
"""
from fastmcp import FastMCP
import feedparser
import requests

# Initialize the MCP Server
mcp = FastMCP("Insurance-Intelligence-Node")

# Define High-Priority Feeds for 2026
FEEDS = {
    "CMS_News": "https://www.cms.gov/newsroom/rss.xml",
    "Texas_DOI": "https://www.tdi.texas.gov/rss/news.xml",
    "KFF_Health": "https://kff.org/feed/"
}

@mcp.tool()
def scan_legislative_updates() -> str:
    """
    Scans federal and state feeds for legislative changes affecting 
    Health and Life Insurance (e.g., OBBBA, 2026 Tax Rules, Trump Accounts).
    Returns a summarized briefing for the Content Agent.
    """
    intelligence_brief = []
    
    for source, url in FEEDS.items():
        try:
            feed = feedparser.parse(url)
            for entry in feed.entries[:5]: # Top 5 recent items
                keywords = ["OBBBA", "Medicare", "Trump Account", "Tax Credit", "Section 71301", "Medicaid"]
                if any(k.lower() in entry.title.lower() or k.lower() in entry.summary.lower() for k in keywords):
                    intelligence_brief.append(f"SOURCE: {source} | TITLE: {entry.title} | LINK: {entry.link}")
        except Exception as e:
            intelligence_brief.append(f"Error fetching {source}: {str(e)}")
    
    if not intelligence_brief:
        return "No new high-impact legislative updates found in the current scan."
        
    return "\n".join(intelligence_brief)

@mcp.tool()
def fetch_authoritative_citations(topic: str) -> str:
    """
    Provides exact, verified URLs from the strategic bibliography for Source Anchoring.
    The agent MUST use these links as citations when generating content.
    """
    citations = {
        "OBBBA": [
            "IRS Official Guidance: https://www.irs.gov/newsroom/one-big-beautiful-bill-provisions",
            "AMA Care Reshape: https://www.ama-assn.org/health-care-advocacy/federal-advocacy/4-big-beautiful-bill-changes-will-reshape-care-2026",
            "HealthInsurance.org Breakdown: https://www.healthinsurance.org/blog/one-big-beautiful-bill-act-brings-sweeping-changes-to-health-coverage/"
        ],
        "Trump_Accounts": [
            "RSM US Employer Considerations: https://rsmus.com/insights/services/business-tax/trump-accounts-top-considerations-individuals-employers.html",
            "Warren Averett Breakdown: https://warrenaverett.com/insights/one-big-beautiful-bill-trump-accounts/"
        ]
    }
    
    if "obbba" in topic.lower() or "71301" in topic.lower():
        return "\n".join(citations["OBBBA"])
    elif "trump" in topic.lower() or "account" in topic.lower():
        return "\n".join(citations["Trump_Accounts"])
    else:
        return "No specific citations found for this topic. Default to general authoritative .gov sources."

if __name__ == "__main__":
    mcp.run()

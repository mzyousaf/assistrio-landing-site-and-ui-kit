import { NextResponse } from 'next/server';

export async function GET() {
    const baseUrl = 'https://your-domain.com';
    const currentDate = new Date().toISOString();

    const rssFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>AI Assistant Platform Status</title>
    <description>Real-time status updates and incident reports for the AI Assistant platform</description>
    <link>${baseUrl}/status</link>
    <language>en-us</language>
    <lastBuildDate>${currentDate}</lastBuildDate>
    <atom:link href="${baseUrl}/status/rss" rel="self" type="application/rss+xml"/>
    
    <item>
      <title>All Systems Operational</title>
      <description>All services are running normally with 99.9% uptime. No active incidents reported.</description>
      <link>${baseUrl}/status</link>
      <guid>${baseUrl}/status#operational</guid>
      <pubDate>${currentDate}</pubDate>
      <category>Status Update</category>
    </item>
    
    <item>
      <title>Email Service Degradation - Investigating</title>
      <description>Some email notifications may be delayed by up to 5 minutes. Our team is actively investigating the issue.</description>
      <link>${baseUrl}/status</link>
      <guid>${baseUrl}/status#incident-1</guid>
      <pubDate>2024-01-15T10:30:00Z</pubDate>
      <category>Incident</category>
    </item>
    
    <item>
      <title>Database Performance Issue - Resolved</title>
      <description>Database queries were experiencing slow response times due to high load. This issue has been resolved.</description>
      <link>${baseUrl}/status</link>
      <guid>${baseUrl}/status#incident-2</guid>
      <pubDate>2024-01-10T16:30:00Z</pubDate>
      <category>Resolved</category>
    </item>
    
    <item>
      <title>Planned Maintenance - Completed</title>
      <description>Scheduled maintenance window completed successfully. All services are operational.</description>
      <link>${baseUrl}/status</link>
      <guid>${baseUrl}/status#maintenance-1</guid>
      <pubDate>2024-01-05T08:00:00Z</pubDate>
      <category>Maintenance</category>
    </item>
    
    <item>
      <title>New Feature Release - AI Assistant v2.1</title>
      <description>Successfully deployed AI Assistant v2.1 with improved response accuracy and new language support.</description>
      <link>${baseUrl}/status</link>
      <guid>${baseUrl}/status#release-1</guid>
      <pubDate>2024-01-01T12:00:00Z</pubDate>
      <category>Release</category>
    </item>
  </channel>
</rss>`;

    return new NextResponse(rssFeed, {
        headers: {
            'Content-Type': 'application/rss+xml; charset=utf-8',
            'Cache-Control': 'public, max-age=300', // Cache for 5 minutes
        },
    });
}

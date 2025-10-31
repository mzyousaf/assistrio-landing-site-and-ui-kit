import { Plan } from '../types/pricing';

export const defaultPricingPlans: Plan[] = [
    {
        "_id": "68d4c70bcbf444be2c660891",
        "code": "free",
        "name": "Free Trial",
        "description": "7-day trial to experience AI chatbots with full features",
        "planType": "standard",
        "interval": "month",
        "priceCents": 0,
        "currency": "USD",
        "isActive": true,
        "isPublic": true,
        "planVersion": 1,
        "createdAt": "2025-09-25T04:37:31.914Z",
        "updatedAt": "2025-09-25T04:37:31.914Z",
        "features": [
            {
                "feature": {
                    "_id": "68d4c6f7cbf444be2c6607aa",
                    "code": "bots",
                    "name": "Bots",
                    "description": "Number of AI-powered chat bots you can create",
                    "kind": "count",
                    "unit": "bots",
                    "enumOptions": [],
                    "category": "core",
                    "group": "Core",
                    "sortOrder": 10,
                    "defaultPeriod": null,
                    "defaultScope": "org",
                    "meterKey": "bot_count",
                    "isCustomizable": true,
                    "createdAt": "2025-09-25T04:37:11.867Z",
                    "updatedAt": "2025-09-25T04:37:11.867Z"
                },
                "value": {
                    "kind": "count",
                    "value": 1,
                    "period": null,
                    "scope": "org"
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c6facbf444be2c6607da",
                    "code": "seats",
                    "name": "Seats",
                    "description": "Number of team members who can access the platform",
                    "kind": "count",
                    "unit": "seats",
                    "enumOptions": [],
                    "category": "core",
                    "group": "Core",
                    "sortOrder": 20,
                    "defaultPeriod": null,
                    "defaultScope": "org",
                    "meterKey": "seat_count",
                    "isCustomizable": true,
                    "createdAt": "2025-09-25T04:37:14.175Z",
                    "updatedAt": "2025-09-25T04:37:14.175Z"
                },
                "value": {
                    "kind": "count",
                    "value": 1,
                    "period": null,
                    "scope": null
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c6fbcbf444be2c6607fe",
                    "code": "replies_per_month",
                    "name": "AI replies / month",
                    "description": "Number of AI-generated replies per month",
                    "kind": "count",
                    "unit": "replies",
                    "enumOptions": [],
                    "category": "core",
                    "group": "Core",
                    "sortOrder": 30,
                    "defaultPeriod": "month",
                    "defaultScope": "org",
                    "meterKey": "ai_replies",
                    "isCustomizable": true,
                    "createdAt": "2025-09-25T04:37:15.494Z",
                    "updatedAt": "2025-09-25T04:37:15.494Z"
                },
                "value": {
                    "kind": "count",
                    "value": 100,
                    "period": "month",
                    "scope": "org"
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c6fccbf444be2c66080e",
                    "code": "multi_language",
                    "name": "Multi-language replies",
                    "description": "Support for multiple languages in AI responses",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "core",
                    "group": "Core",
                    "sortOrder": 40,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:16.106Z",
                    "updatedAt": "2025-09-25T04:37:16.106Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c6fccbf444be2c66081a",
                    "code": "storage_per_bot",
                    "name": "Storage per Bot",
                    "description": "Storage space allocated per bot",
                    "kind": "size",
                    "unit": "MB",
                    "enumOptions": [],
                    "category": "storage",
                    "group": "Storage",
                    "sortOrder": 105,
                    "defaultPeriod": null,
                    "defaultScope": "bot",
                    "meterKey": "storage_per_bot",
                    "isCustomizable": true,
                    "createdAt": "2025-09-25T04:37:16.568Z",
                    "updatedAt": "2025-09-25T04:37:16.568Z"
                },
                "value": {
                    "kind": "size",
                    "value": 10,
                    "period": null,
                    "scope": "bot"
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c6fdcbf444be2c660825",
                    "code": "kb_docs",
                    "name": "Documents",
                    "description": "Number of documents you can upload to knowledge base",
                    "kind": "count",
                    "unit": "docs",
                    "enumOptions": [],
                    "category": "knowledge_base",
                    "group": "Knowledge Base",
                    "sortOrder": 110,
                    "defaultPeriod": null,
                    "defaultScope": "org",
                    "meterKey": "kb_doc_count",
                    "isCustomizable": true,
                    "createdAt": "2025-09-25T04:37:17.028Z",
                    "updatedAt": "2025-09-25T04:37:17.028Z"
                },
                "value": {
                    "kind": "count",
                    "value": 2,
                    "period": null,
                    "scope": null
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c6fdcbf444be2c66082e",
                    "code": "kb_pages",
                    "name": "Website pages",
                    "description": "Number of website pages that can be indexed",
                    "kind": "count",
                    "unit": "pages",
                    "enumOptions": [],
                    "category": "knowledge_base",
                    "group": "Knowledge Base",
                    "sortOrder": 120,
                    "defaultPeriod": null,
                    "defaultScope": "org",
                    "meterKey": "kb_page_count",
                    "isCustomizable": true,
                    "createdAt": "2025-09-25T04:37:17.486Z",
                    "updatedAt": "2025-09-25T04:37:17.486Z"
                },
                "value": {
                    "kind": "count",
                    "value": 2,
                    "period": null,
                    "scope": null
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c6fdcbf444be2c660835",
                    "code": "kb_notion_pages",
                    "name": "Notion pages",
                    "description": "Number of Notion pages that can be indexed",
                    "kind": "count",
                    "unit": "pages",
                    "enumOptions": [],
                    "category": "knowledge_base",
                    "group": "Knowledge Base",
                    "sortOrder": 130,
                    "defaultPeriod": null,
                    "defaultScope": "org",
                    "meterKey": "kb_notion_page_count",
                    "isCustomizable": true,
                    "createdAt": "2025-09-25T04:37:17.944Z",
                    "updatedAt": "2025-09-25T04:37:17.944Z"
                },
                "value": {
                    "kind": "count",
                    "value": 2,
                    "period": null,
                    "scope": null
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c6fecbf444be2c660839",
                    "code": "kb_drive_files",
                    "name": "Google Drive files",
                    "description": "Number of Google Drive files that can be indexed",
                    "kind": "count",
                    "unit": "files",
                    "enumOptions": [],
                    "category": "knowledge_base",
                    "group": "Knowledge Base",
                    "sortOrder": 140,
                    "defaultPeriod": null,
                    "defaultScope": "org",
                    "meterKey": "kb_drive_file_count",
                    "isCustomizable": true,
                    "createdAt": "2025-09-25T04:37:18.402Z",
                    "updatedAt": "2025-09-25T04:37:18.402Z"
                },
                "value": {
                    "kind": "status",
                    "period": null,
                    "scope": null,
                    "state": "not_available"
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c6fecbf444be2c66083c",
                    "code": "custom_personalities",
                    "name": "Custom bot personalities",
                    "description": "Create and manage custom bot personalities with custom prompts",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "customization",
                    "group": "Customization",
                    "sortOrder": 205,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:18.860Z",
                    "updatedAt": "2025-09-25T04:37:18.860Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c6ffcbf444be2c66083f",
                    "code": "appearance",
                    "name": "Custom bot appearance (color + avatar)",
                    "description": "Customize bot color scheme and avatar",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "customization",
                    "group": "Customization",
                    "sortOrder": 210,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:19.317Z",
                    "updatedAt": "2025-09-25T04:37:19.317Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c6ffcbf444be2c660842",
                    "code": "welcome_message",
                    "name": "Custom welcome message",
                    "description": "Set custom welcome message for visitors",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "customization",
                    "group": "Customization",
                    "sortOrder": 220,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:19.774Z",
                    "updatedAt": "2025-09-25T04:37:19.774Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": false,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c700cbf444be2c660845",
                    "code": "branding_removal",
                    "name": "Branding removal",
                    "description": "Remove platform branding from chat widget",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "customization",
                    "group": "Customization",
                    "sortOrder": 230,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:20.232Z",
                    "updatedAt": "2025-09-25T04:37:20.232Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": false,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c700cbf444be2c660848",
                    "code": "Alexi_studio",
                    "name": "Alexi Studio (interactive builder)",
                    "description": "Access to visual bot builder interface",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "customization",
                    "group": "Customization",
                    "sortOrder": 240,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:20.691Z",
                    "updatedAt": "2025-09-25T04:37:20.691Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": false,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c701cbf444be2c66084b",
                    "code": "lead_email",
                    "name": "Lead → Email inbox",
                    "description": "Send captured leads to email inbox",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "lead",
                    "group": "Lead Capture",
                    "sortOrder": 310,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:21.149Z",
                    "updatedAt": "2025-09-25T04:37:21.149Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c701cbf444be2c66084e",
                    "code": "lead_dashboard",
                    "name": "Lead → Dashboard",
                    "description": "View captured leads in dashboard",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "lead",
                    "group": "Lead Capture",
                    "sortOrder": 320,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:21.607Z",
                    "updatedAt": "2025-09-25T04:37:21.607Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c702cbf444be2c660851",
                    "code": "lead_sheets",
                    "name": "Lead export → Google Sheets",
                    "description": "Export leads to Google Sheets",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "lead",
                    "group": "Lead Capture",
                    "sortOrder": 330,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:22.063Z",
                    "updatedAt": "2025-09-25T04:37:22.063Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": false,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c702cbf444be2c660854",
                    "code": "lead_zapier",
                    "name": "Lead export → Zapier/Webhook",
                    "description": "Export leads via Zapier or webhooks",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "lead",
                    "group": "Lead Capture",
                    "sortOrder": 340,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:22.521Z",
                    "updatedAt": "2025-09-25T04:37:22.521Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": false,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c702cbf444be2c660857",
                    "code": "analytics_conversions",
                    "name": "Conversions",
                    "description": "Track conversion rates and metrics",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "analytics",
                    "group": "Analytics",
                    "sortOrder": 410,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:22.978Z",
                    "updatedAt": "2025-09-25T04:37:22.978Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c703cbf444be2c66085a",
                    "code": "analytics_messages",
                    "name": "Messages",
                    "description": "Message volume and engagement analytics",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "analytics",
                    "group": "Analytics",
                    "sortOrder": 420,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:23.437Z",
                    "updatedAt": "2025-09-25T04:37:23.437Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c703cbf444be2c66085d",
                    "code": "analytics_leads",
                    "name": "Leads",
                    "description": "Lead generation and tracking analytics",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "analytics",
                    "group": "Analytics",
                    "sortOrder": 430,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:23.897Z",
                    "updatedAt": "2025-09-25T04:37:23.897Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c704cbf444be2c660860",
                    "code": "analytics_top_faqs",
                    "name": "Top FAQs",
                    "description": "Most frequently asked questions analytics",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "analytics",
                    "group": "Analytics",
                    "sortOrder": 440,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:24.353Z",
                    "updatedAt": "2025-09-25T04:37:24.353Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c704cbf444be2c660863",
                    "code": "analytics_csv_export",
                    "name": "CSV Export",
                    "description": "Export analytics data to CSV format",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "analytics",
                    "group": "Analytics",
                    "sortOrder": 450,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:24.810Z",
                    "updatedAt": "2025-09-25T04:37:24.810Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c705cbf444be2c660866",
                    "code": "analytics_trends",
                    "name": "Trends",
                    "description": "Trend analysis and historical data insights",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "analytics",
                    "group": "Analytics",
                    "sortOrder": 460,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:25.277Z",
                    "updatedAt": "2025-09-25T04:37:25.277Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": false,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c705cbf444be2c660869",
                    "code": "analytics_sentiment",
                    "name": "Sentiment",
                    "description": "Sentiment analysis of conversations",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "analytics",
                    "group": "Analytics",
                    "sortOrder": 470,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:25.739Z",
                    "updatedAt": "2025-09-25T04:37:25.739Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": false,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c706cbf444be2c66086c",
                    "code": "analytics_topics",
                    "name": "Topics",
                    "description": "Topic analysis and categorization",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "analytics",
                    "group": "Analytics",
                    "sortOrder": 480,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:26.195Z",
                    "updatedAt": "2025-09-25T04:37:26.195Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": false,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c706cbf444be2c66086f",
                    "code": "analytics_unanswered",
                    "name": "Unanswered",
                    "description": "Track unanswered questions and gaps",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "analytics",
                    "group": "Analytics",
                    "sortOrder": 490,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:26.652Z",
                    "updatedAt": "2025-09-25T04:37:26.652Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": false,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c707cbf444be2c660872",
                    "code": "team_roles",
                    "name": "Team management (roles & permissions)",
                    "description": "Advanced team management with roles and permissions",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "team",
                    "group": "Team",
                    "sortOrder": 510,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:27.110Z",
                    "updatedAt": "2025-09-25T04:37:27.110Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": false,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c709cbf444be2c660881",
                    "code": "int_notion",
                    "name": "Notion (integration)",
                    "description": "Notion integration status",
                    "kind": "status",
                    "enumOptions": [],
                    "category": "integrations",
                    "group": "Integrations",
                    "sortOrder": 650,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:29.397Z",
                    "updatedAt": "2025-09-25T04:37:29.397Z"
                },
                "value": {
                    "kind": "status",
                    "period": null,
                    "scope": null,
                    "state": "included"
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c707cbf444be2c660875",
                    "code": "int_shopify",
                    "name": "Shopify",
                    "description": "Shopify integration status",
                    "kind": "status",
                    "enumOptions": [],
                    "category": "integrations",
                    "group": "Integrations",
                    "sortOrder": 610,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:27.567Z",
                    "updatedAt": "2025-09-25T04:37:27.567Z"
                },
                "value": {
                    "kind": "status",
                    "period": null,
                    "scope": null,
                    "state": "not_available"
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c708cbf444be2c660878",
                    "code": "int_wix",
                    "name": "Wix",
                    "description": "Wix integration status",
                    "kind": "status",
                    "enumOptions": [],
                    "category": "integrations",
                    "group": "Integrations",
                    "sortOrder": 620,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:28.025Z",
                    "updatedAt": "2025-09-25T04:37:28.025Z"
                },
                "value": {
                    "kind": "status",
                    "period": null,
                    "scope": null,
                    "state": "not_available"
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c708cbf444be2c66087b",
                    "code": "int_wp",
                    "name": "WordPress",
                    "description": "WordPress integration status",
                    "kind": "status",
                    "enumOptions": [],
                    "category": "integrations",
                    "group": "Integrations",
                    "sortOrder": 630,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:28.484Z",
                    "updatedAt": "2025-09-25T04:37:28.484Z"
                },
                "value": {
                    "kind": "status",
                    "period": null,
                    "scope": null,
                    "state": "not_available"
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c708cbf444be2c66087e",
                    "code": "int_drive",
                    "name": "Google Drive (integration)",
                    "description": "Google Drive integration status",
                    "kind": "status",
                    "enumOptions": [],
                    "category": "integrations",
                    "group": "Integrations",
                    "sortOrder": 640,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:28.940Z",
                    "updatedAt": "2025-09-25T04:37:28.940Z"
                },
                "value": {
                    "kind": "status",
                    "period": null,
                    "scope": null,
                    "state": "not_available"
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c709cbf444be2c660884",
                    "code": "int_zapier",
                    "name": "Zapier Integration",
                    "description": "Zapier integration for advanced automation",
                    "kind": "status",
                    "enumOptions": [],
                    "category": "integrations",
                    "group": "Integrations",
                    "sortOrder": 660,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:29.854Z",
                    "updatedAt": "2025-09-25T04:37:29.854Z"
                },
                "value": {
                    "kind": "status",
                    "period": null,
                    "scope": null,
                    "state": "not_available"
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c70acbf444be2c660887",
                    "code": "support_self_serve",
                    "name": "Standard Support",
                    "description": "Self-serve docs + Standard Email (48–72h)",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "support",
                    "group": "Support",
                    "sortOrder": 710,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:30.312Z",
                    "updatedAt": "2025-09-25T04:37:30.312Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c70acbf444be2c66088a",
                    "code": "support_priority_email",
                    "name": "Priority Email Support",
                    "description": "Priority Email (24–48h)",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "support",
                    "group": "Support",
                    "sortOrder": 720,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:30.770Z",
                    "updatedAt": "2025-09-25T04:37:30.770Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": false,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c70bcbf444be2c66088d",
                    "code": "support_priority_support",
                    "name": "Priority Support",
                    "description": "Priority Support (email + faster SLA)",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "support",
                    "group": "Support",
                    "sortOrder": 730,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:31.227Z",
                    "updatedAt": "2025-09-25T04:37:31.227Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": false,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            }
        ]
    },
    {
        "_id": "68d4c725cbf444be2c660928",
        "code": "starter",
        "name": "Starter",
        "description": "Perfect for small teams getting started with AI chatbots",
        "planType": "standard",
        "interval": "month",
        "priceCents": 2900,
        "currency": "USD",
        "isActive": true,
        "isPublic": true,
        "planVersion": 1,
        "createdAt": "2025-09-25T04:37:57.736Z",
        "updatedAt": "2025-09-25T04:37:57.736Z",
        "features": [
            {
                "feature": {
                    "_id": "68d4c6f7cbf444be2c6607aa",
                    "code": "bots",
                    "name": "Bots",
                    "description": "Number of AI-powered chat bots you can create",
                    "kind": "count",
                    "unit": "bots",
                    "enumOptions": [],
                    "category": "core",
                    "group": "Core",
                    "sortOrder": 10,
                    "defaultPeriod": null,
                    "defaultScope": "org",
                    "meterKey": "bot_count",
                    "isCustomizable": true,
                    "createdAt": "2025-09-25T04:37:11.867Z",
                    "updatedAt": "2025-09-25T04:37:11.867Z"
                },
                "value": {
                    "kind": "count",
                    "value": 1,
                    "period": null,
                    "scope": "org"
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c6facbf444be2c6607da",
                    "code": "seats",
                    "name": "Seats",
                    "description": "Number of team members who can access the platform",
                    "kind": "count",
                    "unit": "seats",
                    "enumOptions": [],
                    "category": "core",
                    "group": "Core",
                    "sortOrder": 20,
                    "defaultPeriod": null,
                    "defaultScope": "org",
                    "meterKey": "seat_count",
                    "isCustomizable": true,
                    "createdAt": "2025-09-25T04:37:14.175Z",
                    "updatedAt": "2025-09-25T04:37:14.175Z"
                },
                "value": {
                    "kind": "count",
                    "value": 1,
                    "period": null,
                    "scope": null
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c6fbcbf444be2c6607fe",
                    "code": "replies_per_month",
                    "name": "AI replies / month",
                    "description": "Number of AI-generated replies per month",
                    "kind": "count",
                    "unit": "replies",
                    "enumOptions": [],
                    "category": "core",
                    "group": "Core",
                    "sortOrder": 30,
                    "defaultPeriod": "month",
                    "defaultScope": "org",
                    "meterKey": "ai_replies",
                    "isCustomizable": true,
                    "createdAt": "2025-09-25T04:37:15.494Z",
                    "updatedAt": "2025-09-25T04:37:15.494Z"
                },
                "value": {
                    "kind": "count",
                    "value": 1000,
                    "period": "month",
                    "scope": "org"
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c6fccbf444be2c66080e",
                    "code": "multi_language",
                    "name": "Multi-language replies",
                    "description": "Support for multiple languages in AI responses",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "core",
                    "group": "Core",
                    "sortOrder": 40,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:16.106Z",
                    "updatedAt": "2025-09-25T04:37:16.106Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c6fccbf444be2c66081a",
                    "code": "storage_per_bot",
                    "name": "Storage per Bot",
                    "description": "Storage space allocated per bot",
                    "kind": "size",
                    "unit": "MB",
                    "enumOptions": [],
                    "category": "storage",
                    "group": "Storage",
                    "sortOrder": 105,
                    "defaultPeriod": null,
                    "defaultScope": "bot",
                    "meterKey": "storage_per_bot",
                    "isCustomizable": true,
                    "createdAt": "2025-09-25T04:37:16.568Z",
                    "updatedAt": "2025-09-25T04:37:16.568Z"
                },
                "value": {
                    "kind": "size",
                    "value": 40,
                    "period": null,
                    "scope": "bot"
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c6fdcbf444be2c660825",
                    "code": "kb_docs",
                    "name": "Documents",
                    "description": "Number of documents you can upload to knowledge base",
                    "kind": "count",
                    "unit": "docs",
                    "enumOptions": [],
                    "category": "knowledge_base",
                    "group": "Knowledge Base",
                    "sortOrder": 110,
                    "defaultPeriod": null,
                    "defaultScope": "org",
                    "meterKey": "kb_doc_count",
                    "isCustomizable": true,
                    "createdAt": "2025-09-25T04:37:17.028Z",
                    "updatedAt": "2025-09-25T04:37:17.028Z"
                },
                "value": {
                    "kind": "count",
                    "value": 10,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c6fdcbf444be2c66082e",
                    "code": "kb_pages",
                    "name": "Website pages",
                    "description": "Number of website pages that can be indexed",
                    "kind": "count",
                    "unit": "pages",
                    "enumOptions": [],
                    "category": "knowledge_base",
                    "group": "Knowledge Base",
                    "sortOrder": 120,
                    "defaultPeriod": null,
                    "defaultScope": "org",
                    "meterKey": "kb_page_count",
                    "isCustomizable": true,
                    "createdAt": "2025-09-25T04:37:17.486Z",
                    "updatedAt": "2025-09-25T04:37:17.486Z"
                },
                "value": {
                    "kind": "count",
                    "value": 10,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c6fdcbf444be2c660835",
                    "code": "kb_notion_pages",
                    "name": "Notion pages",
                    "description": "Number of Notion pages that can be indexed",
                    "kind": "count",
                    "unit": "pages",
                    "enumOptions": [],
                    "category": "knowledge_base",
                    "group": "Knowledge Base",
                    "sortOrder": 130,
                    "defaultPeriod": null,
                    "defaultScope": "org",
                    "meterKey": "kb_notion_page_count",
                    "isCustomizable": true,
                    "createdAt": "2025-09-25T04:37:17.944Z",
                    "updatedAt": "2025-09-25T04:37:17.944Z"
                },
                "value": {
                    "kind": "count",
                    "value": 10,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c6fecbf444be2c660839",
                    "code": "kb_drive_files",
                    "name": "Google Drive files",
                    "description": "Number of Google Drive files that can be indexed",
                    "kind": "count",
                    "unit": "files",
                    "enumOptions": [],
                    "category": "knowledge_base",
                    "group": "Knowledge Base",
                    "sortOrder": 140,
                    "defaultPeriod": null,
                    "defaultScope": "org",
                    "meterKey": "kb_drive_file_count",
                    "isCustomizable": true,
                    "createdAt": "2025-09-25T04:37:18.402Z",
                    "updatedAt": "2025-09-25T04:37:18.402Z"
                },
                "value": {
                    "kind": "status",
                    "period": null,
                    "scope": null,
                    "state": "not_available"
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c6fecbf444be2c66083c",
                    "code": "custom_personalities",
                    "name": "Custom bot personalities",
                    "description": "Create and manage custom bot personalities with custom prompts",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "customization",
                    "group": "Customization",
                    "sortOrder": 205,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:18.860Z",
                    "updatedAt": "2025-09-25T04:37:18.860Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c6ffcbf444be2c66083f",
                    "code": "appearance",
                    "name": "Custom bot appearance (color + avatar)",
                    "description": "Customize bot color scheme and avatar",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "customization",
                    "group": "Customization",
                    "sortOrder": 210,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:19.317Z",
                    "updatedAt": "2025-09-25T04:37:19.317Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c6ffcbf444be2c660842",
                    "code": "welcome_message",
                    "name": "Custom welcome message",
                    "description": "Set custom welcome message for visitors",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "customization",
                    "group": "Customization",
                    "sortOrder": 220,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:19.774Z",
                    "updatedAt": "2025-09-25T04:37:19.774Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": false,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c700cbf444be2c660845",
                    "code": "branding_removal",
                    "name": "Branding removal",
                    "description": "Remove platform branding from chat widget",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "customization",
                    "group": "Customization",
                    "sortOrder": 230,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:20.232Z",
                    "updatedAt": "2025-09-25T04:37:20.232Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": false,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c700cbf444be2c660848",
                    "code": "Alexi_studio",
                    "name": "Alexi Studio (interactive builder)",
                    "description": "Access to visual bot builder interface",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "customization",
                    "group": "Customization",
                    "sortOrder": 240,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:20.691Z",
                    "updatedAt": "2025-09-25T04:37:20.691Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": false,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c701cbf444be2c66084b",
                    "code": "lead_email",
                    "name": "Lead → Email inbox",
                    "description": "Send captured leads to email inbox",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "lead",
                    "group": "Lead Capture",
                    "sortOrder": 310,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:21.149Z",
                    "updatedAt": "2025-09-25T04:37:21.149Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c701cbf444be2c66084e",
                    "code": "lead_dashboard",
                    "name": "Lead → Dashboard",
                    "description": "View captured leads in dashboard",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "lead",
                    "group": "Lead Capture",
                    "sortOrder": 320,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:21.607Z",
                    "updatedAt": "2025-09-25T04:37:21.607Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c702cbf444be2c660851",
                    "code": "lead_sheets",
                    "name": "Lead export → Google Sheets",
                    "description": "Export leads to Google Sheets",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "lead",
                    "group": "Lead Capture",
                    "sortOrder": 330,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:22.063Z",
                    "updatedAt": "2025-09-25T04:37:22.063Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": false,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c702cbf444be2c660854",
                    "code": "lead_zapier",
                    "name": "Lead export → Zapier/Webhook",
                    "description": "Export leads via Zapier or webhooks",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "lead",
                    "group": "Lead Capture",
                    "sortOrder": 340,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:22.521Z",
                    "updatedAt": "2025-09-25T04:37:22.521Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": false,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c702cbf444be2c660857",
                    "code": "analytics_conversions",
                    "name": "Conversions",
                    "description": "Track conversion rates and metrics",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "analytics",
                    "group": "Analytics",
                    "sortOrder": 410,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:22.978Z",
                    "updatedAt": "2025-09-25T04:37:22.978Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c703cbf444be2c66085a",
                    "code": "analytics_messages",
                    "name": "Messages",
                    "description": "Message volume and engagement analytics",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "analytics",
                    "group": "Analytics",
                    "sortOrder": 420,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:23.437Z",
                    "updatedAt": "2025-09-25T04:37:23.437Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c703cbf444be2c66085d",
                    "code": "analytics_leads",
                    "name": "Leads",
                    "description": "Lead generation and tracking analytics",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "analytics",
                    "group": "Analytics",
                    "sortOrder": 430,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:23.897Z",
                    "updatedAt": "2025-09-25T04:37:23.897Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c704cbf444be2c660860",
                    "code": "analytics_top_faqs",
                    "name": "Top FAQs",
                    "description": "Most frequently asked questions analytics",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "analytics",
                    "group": "Analytics",
                    "sortOrder": 440,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:24.353Z",
                    "updatedAt": "2025-09-25T04:37:24.353Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c704cbf444be2c660863",
                    "code": "analytics_csv_export",
                    "name": "CSV Export",
                    "description": "Export analytics data to CSV format",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "analytics",
                    "group": "Analytics",
                    "sortOrder": 450,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:24.810Z",
                    "updatedAt": "2025-09-25T04:37:24.810Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c705cbf444be2c660866",
                    "code": "analytics_trends",
                    "name": "Trends",
                    "description": "Trend analysis and historical data insights",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "analytics",
                    "group": "Analytics",
                    "sortOrder": 460,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:25.277Z",
                    "updatedAt": "2025-09-25T04:37:25.277Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": false,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c705cbf444be2c660869",
                    "code": "analytics_sentiment",
                    "name": "Sentiment",
                    "description": "Sentiment analysis of conversations",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "analytics",
                    "group": "Analytics",
                    "sortOrder": 470,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:25.739Z",
                    "updatedAt": "2025-09-25T04:37:25.739Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": false,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c706cbf444be2c66086c",
                    "code": "analytics_topics",
                    "name": "Topics",
                    "description": "Topic analysis and categorization",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "analytics",
                    "group": "Analytics",
                    "sortOrder": 480,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:26.195Z",
                    "updatedAt": "2025-09-25T04:37:26.195Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": false,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c706cbf444be2c66086f",
                    "code": "analytics_unanswered",
                    "name": "Unanswered",
                    "description": "Track unanswered questions and gaps",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "analytics",
                    "group": "Analytics",
                    "sortOrder": 490,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:26.652Z",
                    "updatedAt": "2025-09-25T04:37:26.652Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": false,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c707cbf444be2c660872",
                    "code": "team_roles",
                    "name": "Team management (roles & permissions)",
                    "description": "Advanced team management with roles and permissions",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "team",
                    "group": "Team",
                    "sortOrder": 510,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:27.110Z",
                    "updatedAt": "2025-09-25T04:37:27.110Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": false,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c709cbf444be2c660881",
                    "code": "int_notion",
                    "name": "Notion (integration)",
                    "description": "Notion integration status",
                    "kind": "status",
                    "enumOptions": [],
                    "category": "integrations",
                    "group": "Integrations",
                    "sortOrder": 650,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:29.397Z",
                    "updatedAt": "2025-09-25T04:37:29.397Z"
                },
                "value": {
                    "kind": "status",
                    "period": null,
                    "scope": null,
                    "state": "included"
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c707cbf444be2c660875",
                    "code": "int_shopify",
                    "name": "Shopify",
                    "description": "Shopify integration status",
                    "kind": "status",
                    "enumOptions": [],
                    "category": "integrations",
                    "group": "Integrations",
                    "sortOrder": 610,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:27.567Z",
                    "updatedAt": "2025-09-25T04:37:27.567Z"
                },
                "value": {
                    "kind": "status",
                    "period": null,
                    "scope": null,
                    "state": "not_available"
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c708cbf444be2c660878",
                    "code": "int_wix",
                    "name": "Wix",
                    "description": "Wix integration status",
                    "kind": "status",
                    "enumOptions": [],
                    "category": "integrations",
                    "group": "Integrations",
                    "sortOrder": 620,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:28.025Z",
                    "updatedAt": "2025-09-25T04:37:28.025Z"
                },
                "value": {
                    "kind": "status",
                    "period": null,
                    "scope": null,
                    "state": "not_available"
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c708cbf444be2c66087b",
                    "code": "int_wp",
                    "name": "WordPress",
                    "description": "WordPress integration status",
                    "kind": "status",
                    "enumOptions": [],
                    "category": "integrations",
                    "group": "Integrations",
                    "sortOrder": 630,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:28.484Z",
                    "updatedAt": "2025-09-25T04:37:28.484Z"
                },
                "value": {
                    "kind": "status",
                    "period": null,
                    "scope": null,
                    "state": "not_available"
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c708cbf444be2c66087e",
                    "code": "int_drive",
                    "name": "Google Drive (integration)",
                    "description": "Google Drive integration status",
                    "kind": "status",
                    "enumOptions": [],
                    "category": "integrations",
                    "group": "Integrations",
                    "sortOrder": 640,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:28.940Z",
                    "updatedAt": "2025-09-25T04:37:28.940Z"
                },
                "value": {
                    "kind": "status",
                    "period": null,
                    "scope": null,
                    "state": "not_available"
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c709cbf444be2c660884",
                    "code": "int_zapier",
                    "name": "Zapier Integration",
                    "description": "Zapier integration for advanced automation",
                    "kind": "status",
                    "enumOptions": [],
                    "category": "integrations",
                    "group": "Integrations",
                    "sortOrder": 660,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:29.854Z",
                    "updatedAt": "2025-09-25T04:37:29.854Z"
                },
                "value": {
                    "kind": "status",
                    "period": null,
                    "scope": null,
                    "state": "not_available"
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c70acbf444be2c660887",
                    "code": "support_self_serve",
                    "name": "Standard Support",
                    "description": "Self-serve docs + Standard Email (48–72h)",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "support",
                    "group": "Support",
                    "sortOrder": 710,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:30.312Z",
                    "updatedAt": "2025-09-25T04:37:30.312Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c70acbf444be2c66088a",
                    "code": "support_priority_email",
                    "name": "Priority Email Support",
                    "description": "Priority Email (24–48h)",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "support",
                    "group": "Support",
                    "sortOrder": 720,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:30.770Z",
                    "updatedAt": "2025-09-25T04:37:30.770Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": false,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c70bcbf444be2c66088d",
                    "code": "support_priority_support",
                    "name": "Priority Support",
                    "description": "Priority Support (email + faster SLA)",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "support",
                    "group": "Support",
                    "sortOrder": 730,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:31.227Z",
                    "updatedAt": "2025-09-25T04:37:31.227Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": false,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            }
        ]
    },
    {
        "_id": "68d4c73fcbf444be2c6609bf",
        "code": "growth",
        "name": "Growth",
        "description": "Ideal for growing businesses that need more capacity and features",
        "planType": "standard",
        "interval": "month",
        "priceCents": 5900,
        "currency": "USD",
        "isActive": true,
        "isPublic": true,
        "planVersion": 1,
        "createdAt": "2025-09-25T04:38:23.552Z",
        "updatedAt": "2025-09-25T04:38:23.552Z",
        "features": [
            {
                "feature": {
                    "_id": "68d4c6f7cbf444be2c6607aa",
                    "code": "bots",
                    "name": "Bots",
                    "description": "Number of AI-powered chat bots you can create",
                    "kind": "count",
                    "unit": "bots",
                    "enumOptions": [],
                    "category": "core",
                    "group": "Core",
                    "sortOrder": 10,
                    "defaultPeriod": null,
                    "defaultScope": "org",
                    "meterKey": "bot_count",
                    "isCustomizable": true,
                    "createdAt": "2025-09-25T04:37:11.867Z",
                    "updatedAt": "2025-09-25T04:37:11.867Z"
                },
                "value": {
                    "kind": "count",
                    "value": 3,
                    "period": null,
                    "scope": "org"
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c6facbf444be2c6607da",
                    "code": "seats",
                    "name": "Seats",
                    "description": "Number of team members who can access the platform",
                    "kind": "count",
                    "unit": "seats",
                    "enumOptions": [],
                    "category": "core",
                    "group": "Core",
                    "sortOrder": 20,
                    "defaultPeriod": null,
                    "defaultScope": "org",
                    "meterKey": "seat_count",
                    "isCustomizable": true,
                    "createdAt": "2025-09-25T04:37:14.175Z",
                    "updatedAt": "2025-09-25T04:37:14.175Z"
                },
                "value": {
                    "kind": "count",
                    "value": 10,
                    "period": null,
                    "scope": null
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c6fbcbf444be2c6607fe",
                    "code": "replies_per_month",
                    "name": "AI replies / month",
                    "description": "Number of AI-generated replies per month",
                    "kind": "count",
                    "unit": "replies",
                    "enumOptions": [],
                    "category": "core",
                    "group": "Core",
                    "sortOrder": 30,
                    "defaultPeriod": "month",
                    "defaultScope": "org",
                    "meterKey": "ai_replies",
                    "isCustomizable": true,
                    "createdAt": "2025-09-25T04:37:15.494Z",
                    "updatedAt": "2025-09-25T04:37:15.494Z"
                },
                "value": {
                    "kind": "count",
                    "value": 2500,
                    "period": "month",
                    "scope": "org"
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c6fccbf444be2c66080e",
                    "code": "multi_language",
                    "name": "Multi-language replies",
                    "description": "Support for multiple languages in AI responses",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "core",
                    "group": "Core",
                    "sortOrder": 40,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:16.106Z",
                    "updatedAt": "2025-09-25T04:37:16.106Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c6fccbf444be2c66081a",
                    "code": "storage_per_bot",
                    "name": "Storage per Bot",
                    "description": "Storage space allocated per bot",
                    "kind": "size",
                    "unit": "MB",
                    "enumOptions": [],
                    "category": "storage",
                    "group": "Storage",
                    "sortOrder": 105,
                    "defaultPeriod": null,
                    "defaultScope": "bot",
                    "meterKey": "storage_per_bot",
                    "isCustomizable": true,
                    "createdAt": "2025-09-25T04:37:16.568Z",
                    "updatedAt": "2025-09-25T04:37:16.568Z"
                },
                "value": {
                    "kind": "size",
                    "value": 60,
                    "period": null,
                    "scope": "bot"
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c6fdcbf444be2c660825",
                    "code": "kb_docs",
                    "name": "Documents",
                    "description": "Number of documents you can upload to knowledge base",
                    "kind": "count",
                    "unit": "docs",
                    "enumOptions": [],
                    "category": "knowledge_base",
                    "group": "Knowledge Base",
                    "sortOrder": 110,
                    "defaultPeriod": null,
                    "defaultScope": "org",
                    "meterKey": "kb_doc_count",
                    "isCustomizable": true,
                    "createdAt": "2025-09-25T04:37:17.028Z",
                    "updatedAt": "2025-09-25T04:37:17.028Z"
                },
                "value": {
                    "kind": "count",
                    "value": 25,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c6fdcbf444be2c66082e",
                    "code": "kb_pages",
                    "name": "Website pages",
                    "description": "Number of website pages that can be indexed",
                    "kind": "count",
                    "unit": "pages",
                    "enumOptions": [],
                    "category": "knowledge_base",
                    "group": "Knowledge Base",
                    "sortOrder": 120,
                    "defaultPeriod": null,
                    "defaultScope": "org",
                    "meterKey": "kb_page_count",
                    "isCustomizable": true,
                    "createdAt": "2025-09-25T04:37:17.486Z",
                    "updatedAt": "2025-09-25T04:37:17.486Z"
                },
                "value": {
                    "kind": "count",
                    "value": 25,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c6fdcbf444be2c660835",
                    "code": "kb_notion_pages",
                    "name": "Notion pages",
                    "description": "Number of Notion pages that can be indexed",
                    "kind": "count",
                    "unit": "pages",
                    "enumOptions": [],
                    "category": "knowledge_base",
                    "group": "Knowledge Base",
                    "sortOrder": 130,
                    "defaultPeriod": null,
                    "defaultScope": "org",
                    "meterKey": "kb_notion_page_count",
                    "isCustomizable": true,
                    "createdAt": "2025-09-25T04:37:17.944Z",
                    "updatedAt": "2025-09-25T04:37:17.944Z"
                },
                "value": {
                    "kind": "count",
                    "value": 50,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c6fecbf444be2c660839",
                    "code": "kb_drive_files",
                    "name": "Google Drive files",
                    "description": "Number of Google Drive files that can be indexed",
                    "kind": "count",
                    "unit": "files",
                    "enumOptions": [],
                    "category": "knowledge_base",
                    "group": "Knowledge Base",
                    "sortOrder": 140,
                    "defaultPeriod": null,
                    "defaultScope": "org",
                    "meterKey": "kb_drive_file_count",
                    "isCustomizable": true,
                    "createdAt": "2025-09-25T04:37:18.402Z",
                    "updatedAt": "2025-09-25T04:37:18.402Z"
                },
                "value": {
                    "kind": "count",
                    "value": 20,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c6fecbf444be2c66083c",
                    "code": "custom_personalities",
                    "name": "Custom bot personalities",
                    "description": "Create and manage custom bot personalities with custom prompts",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "customization",
                    "group": "Customization",
                    "sortOrder": 205,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:18.860Z",
                    "updatedAt": "2025-09-25T04:37:18.860Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c6ffcbf444be2c66083f",
                    "code": "appearance",
                    "name": "Custom bot appearance (color + avatar)",
                    "description": "Customize bot color scheme and avatar",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "customization",
                    "group": "Customization",
                    "sortOrder": 210,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:19.317Z",
                    "updatedAt": "2025-09-25T04:37:19.317Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c6ffcbf444be2c660842",
                    "code": "welcome_message",
                    "name": "Custom welcome message",
                    "description": "Set custom welcome message for visitors",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "customization",
                    "group": "Customization",
                    "sortOrder": 220,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:19.774Z",
                    "updatedAt": "2025-09-25T04:37:19.774Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c700cbf444be2c660845",
                    "code": "branding_removal",
                    "name": "Branding removal",
                    "description": "Remove platform branding from chat widget",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "customization",
                    "group": "Customization",
                    "sortOrder": 230,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:20.232Z",
                    "updatedAt": "2025-09-25T04:37:20.232Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c700cbf444be2c660848",
                    "code": "Alexi_studio",
                    "name": "Alexi Studio (interactive builder)",
                    "description": "Access to visual bot builder interface",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "customization",
                    "group": "Customization",
                    "sortOrder": 240,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:20.691Z",
                    "updatedAt": "2025-09-25T04:37:20.691Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c701cbf444be2c66084b",
                    "code": "lead_email",
                    "name": "Lead → Email inbox",
                    "description": "Send captured leads to email inbox",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "lead",
                    "group": "Lead Capture",
                    "sortOrder": 310,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:21.149Z",
                    "updatedAt": "2025-09-25T04:37:21.149Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c701cbf444be2c66084e",
                    "code": "lead_dashboard",
                    "name": "Lead → Dashboard",
                    "description": "View captured leads in dashboard",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "lead",
                    "group": "Lead Capture",
                    "sortOrder": 320,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:21.607Z",
                    "updatedAt": "2025-09-25T04:37:21.607Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c702cbf444be2c660851",
                    "code": "lead_sheets",
                    "name": "Lead export → Google Sheets",
                    "description": "Export leads to Google Sheets",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "lead",
                    "group": "Lead Capture",
                    "sortOrder": 330,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:22.063Z",
                    "updatedAt": "2025-09-25T04:37:22.063Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c702cbf444be2c660854",
                    "code": "lead_zapier",
                    "name": "Lead export → Zapier/Webhook",
                    "description": "Export leads via Zapier or webhooks",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "lead",
                    "group": "Lead Capture",
                    "sortOrder": 340,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:22.521Z",
                    "updatedAt": "2025-09-25T04:37:22.521Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": false,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c702cbf444be2c660857",
                    "code": "analytics_conversions",
                    "name": "Conversions",
                    "description": "Track conversion rates and metrics",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "analytics",
                    "group": "Analytics",
                    "sortOrder": 410,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:22.978Z",
                    "updatedAt": "2025-09-25T04:37:22.978Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c703cbf444be2c66085a",
                    "code": "analytics_messages",
                    "name": "Messages",
                    "description": "Message volume and engagement analytics",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "analytics",
                    "group": "Analytics",
                    "sortOrder": 420,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:23.437Z",
                    "updatedAt": "2025-09-25T04:37:23.437Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c703cbf444be2c66085d",
                    "code": "analytics_leads",
                    "name": "Leads",
                    "description": "Lead generation and tracking analytics",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "analytics",
                    "group": "Analytics",
                    "sortOrder": 430,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:23.897Z",
                    "updatedAt": "2025-09-25T04:37:23.897Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c704cbf444be2c660860",
                    "code": "analytics_top_faqs",
                    "name": "Top FAQs",
                    "description": "Most frequently asked questions analytics",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "analytics",
                    "group": "Analytics",
                    "sortOrder": 440,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:24.353Z",
                    "updatedAt": "2025-09-25T04:37:24.353Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c704cbf444be2c660863",
                    "code": "analytics_csv_export",
                    "name": "CSV Export",
                    "description": "Export analytics data to CSV format",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "analytics",
                    "group": "Analytics",
                    "sortOrder": 450,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:24.810Z",
                    "updatedAt": "2025-09-25T04:37:24.810Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c705cbf444be2c660866",
                    "code": "analytics_trends",
                    "name": "Trends",
                    "description": "Trend analysis and historical data insights",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "analytics",
                    "group": "Analytics",
                    "sortOrder": 460,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:25.277Z",
                    "updatedAt": "2025-09-25T04:37:25.277Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c705cbf444be2c660869",
                    "code": "analytics_sentiment",
                    "name": "Sentiment",
                    "description": "Sentiment analysis of conversations",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "analytics",
                    "group": "Analytics",
                    "sortOrder": 470,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:25.739Z",
                    "updatedAt": "2025-09-25T04:37:25.739Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c706cbf444be2c66086c",
                    "code": "analytics_topics",
                    "name": "Topics",
                    "description": "Topic analysis and categorization",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "analytics",
                    "group": "Analytics",
                    "sortOrder": 480,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:26.195Z",
                    "updatedAt": "2025-09-25T04:37:26.195Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c706cbf444be2c66086f",
                    "code": "analytics_unanswered",
                    "name": "Unanswered",
                    "description": "Track unanswered questions and gaps",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "analytics",
                    "group": "Analytics",
                    "sortOrder": 490,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:26.652Z",
                    "updatedAt": "2025-09-25T04:37:26.652Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c707cbf444be2c660872",
                    "code": "team_roles",
                    "name": "Team management (roles & permissions)",
                    "description": "Advanced team management with roles and permissions",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "team",
                    "group": "Team",
                    "sortOrder": 510,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:27.110Z",
                    "updatedAt": "2025-09-25T04:37:27.110Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c709cbf444be2c660881",
                    "code": "int_notion",
                    "name": "Notion (integration)",
                    "description": "Notion integration status",
                    "kind": "status",
                    "enumOptions": [],
                    "category": "integrations",
                    "group": "Integrations",
                    "sortOrder": 650,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:29.397Z",
                    "updatedAt": "2025-09-25T04:37:29.397Z"
                },
                "value": {
                    "kind": "status",
                    "period": null,
                    "scope": null,
                    "state": "included"
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c707cbf444be2c660875",
                    "code": "int_shopify",
                    "name": "Shopify",
                    "description": "Shopify integration status",
                    "kind": "status",
                    "enumOptions": [],
                    "category": "integrations",
                    "group": "Integrations",
                    "sortOrder": 610,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:27.567Z",
                    "updatedAt": "2025-09-25T04:37:27.567Z"
                },
                "value": {
                    "kind": "status",
                    "period": null,
                    "scope": null,
                    "state": "coming_soon"
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c708cbf444be2c660878",
                    "code": "int_wix",
                    "name": "Wix",
                    "description": "Wix integration status",
                    "kind": "status",
                    "enumOptions": [],
                    "category": "integrations",
                    "group": "Integrations",
                    "sortOrder": 620,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:28.025Z",
                    "updatedAt": "2025-09-25T04:37:28.025Z"
                },
                "value": {
                    "kind": "status",
                    "period": null,
                    "scope": null,
                    "state": "coming_soon"
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c708cbf444be2c66087b",
                    "code": "int_wp",
                    "name": "WordPress",
                    "description": "WordPress integration status",
                    "kind": "status",
                    "enumOptions": [],
                    "category": "integrations",
                    "group": "Integrations",
                    "sortOrder": 630,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:28.484Z",
                    "updatedAt": "2025-09-25T04:37:28.484Z"
                },
                "value": {
                    "kind": "status",
                    "period": null,
                    "scope": null,
                    "state": "coming_soon"
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c708cbf444be2c66087e",
                    "code": "int_drive",
                    "name": "Google Drive (integration)",
                    "description": "Google Drive integration status",
                    "kind": "status",
                    "enumOptions": [],
                    "category": "integrations",
                    "group": "Integrations",
                    "sortOrder": 640,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:28.940Z",
                    "updatedAt": "2025-09-25T04:37:28.940Z"
                },
                "value": {
                    "kind": "status",
                    "period": null,
                    "scope": null,
                    "state": "coming_soon"
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c709cbf444be2c660884",
                    "code": "int_zapier",
                    "name": "Zapier Integration",
                    "description": "Zapier integration for advanced automation",
                    "kind": "status",
                    "enumOptions": [],
                    "category": "integrations",
                    "group": "Integrations",
                    "sortOrder": 660,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:29.854Z",
                    "updatedAt": "2025-09-25T04:37:29.854Z"
                },
                "value": {
                    "kind": "status",
                    "period": null,
                    "scope": null,
                    "state": "not_available"
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c70acbf444be2c660887",
                    "code": "support_self_serve",
                    "name": "Standard Support",
                    "description": "Self-serve docs + Standard Email (48–72h)",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "support",
                    "group": "Support",
                    "sortOrder": 710,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:30.312Z",
                    "updatedAt": "2025-09-25T04:37:30.312Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c70acbf444be2c66088a",
                    "code": "support_priority_email",
                    "name": "Priority Email Support",
                    "description": "Priority Email (24–48h)",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "support",
                    "group": "Support",
                    "sortOrder": 720,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:30.770Z",
                    "updatedAt": "2025-09-25T04:37:30.770Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c70bcbf444be2c66088d",
                    "code": "support_priority_support",
                    "name": "Priority Support",
                    "description": "Priority Support (email + faster SLA)",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "support",
                    "group": "Support",
                    "sortOrder": 730,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:31.227Z",
                    "updatedAt": "2025-09-25T04:37:31.227Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": false,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            }
        ]
    },
    {
        "_id": "68d4c759cbf444be2c660a56",
        "code": "pro",
        "name": "Pro",
        "description": "Advanced features for established businesses with high-volume needs",
        "planType": "standard",
        "interval": "month",
        "priceCents": 9900,
        "currency": "USD",
        "isActive": true,
        "isPublic": true,
        "planVersion": 1,
        "createdAt": "2025-09-25T04:38:49.329Z",
        "updatedAt": "2025-09-25T04:38:49.329Z",
        "features": [
            {
                "feature": {
                    "_id": "68d4c6f7cbf444be2c6607aa",
                    "code": "bots",
                    "name": "Bots",
                    "description": "Number of AI-powered chat bots you can create",
                    "kind": "count",
                    "unit": "bots",
                    "enumOptions": [],
                    "category": "core",
                    "group": "Core",
                    "sortOrder": 10,
                    "defaultPeriod": null,
                    "defaultScope": "org",
                    "meterKey": "bot_count",
                    "isCustomizable": true,
                    "createdAt": "2025-09-25T04:37:11.867Z",
                    "updatedAt": "2025-09-25T04:37:11.867Z"
                },
                "value": {
                    "kind": "count",
                    "value": 5,
                    "period": null,
                    "scope": "org"
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c6facbf444be2c6607da",
                    "code": "seats",
                    "name": "Seats",
                    "description": "Number of team members who can access the platform",
                    "kind": "count",
                    "unit": "seats",
                    "enumOptions": [],
                    "category": "core",
                    "group": "Core",
                    "sortOrder": 20,
                    "defaultPeriod": null,
                    "defaultScope": "org",
                    "meterKey": "seat_count",
                    "isCustomizable": true,
                    "createdAt": "2025-09-25T04:37:14.175Z",
                    "updatedAt": "2025-09-25T04:37:14.175Z"
                },
                "value": {
                    "kind": "count",
                    "value": 30,
                    "period": null,
                    "scope": null
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c6fbcbf444be2c6607fe",
                    "code": "replies_per_month",
                    "name": "AI replies / month",
                    "description": "Number of AI-generated replies per month",
                    "kind": "count",
                    "unit": "replies",
                    "enumOptions": [],
                    "category": "core",
                    "group": "Core",
                    "sortOrder": 30,
                    "defaultPeriod": "month",
                    "defaultScope": "org",
                    "meterKey": "ai_replies",
                    "isCustomizable": true,
                    "createdAt": "2025-09-25T04:37:15.494Z",
                    "updatedAt": "2025-09-25T04:37:15.494Z"
                },
                "value": {
                    "kind": "count",
                    "value": 5000,
                    "period": "month",
                    "scope": "org"
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c6fccbf444be2c66080e",
                    "code": "multi_language",
                    "name": "Multi-language replies",
                    "description": "Support for multiple languages in AI responses",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "core",
                    "group": "Core",
                    "sortOrder": 40,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:16.106Z",
                    "updatedAt": "2025-09-25T04:37:16.106Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c6fccbf444be2c66081a",
                    "code": "storage_per_bot",
                    "name": "Storage per Bot",
                    "description": "Storage space allocated per bot",
                    "kind": "size",
                    "unit": "MB",
                    "enumOptions": [],
                    "category": "storage",
                    "group": "Storage",
                    "sortOrder": 105,
                    "defaultPeriod": null,
                    "defaultScope": "bot",
                    "meterKey": "storage_per_bot",
                    "isCustomizable": true,
                    "createdAt": "2025-09-25T04:37:16.568Z",
                    "updatedAt": "2025-09-25T04:37:16.568Z"
                },
                "value": {
                    "kind": "size",
                    "value": 75,
                    "period": null,
                    "scope": "bot"
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c6fdcbf444be2c660825",
                    "code": "kb_docs",
                    "name": "Documents",
                    "description": "Number of documents you can upload to knowledge base",
                    "kind": "count",
                    "unit": "docs",
                    "enumOptions": [],
                    "category": "knowledge_base",
                    "group": "Knowledge Base",
                    "sortOrder": 110,
                    "defaultPeriod": null,
                    "defaultScope": "org",
                    "meterKey": "kb_doc_count",
                    "isCustomizable": true,
                    "createdAt": "2025-09-25T04:37:17.028Z",
                    "updatedAt": "2025-09-25T04:37:17.028Z"
                },
                "value": {
                    "kind": "count",
                    "value": 100,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c6fdcbf444be2c66082e",
                    "code": "kb_pages",
                    "name": "Website pages",
                    "description": "Number of website pages that can be indexed",
                    "kind": "count",
                    "unit": "pages",
                    "enumOptions": [],
                    "category": "knowledge_base",
                    "group": "Knowledge Base",
                    "sortOrder": 120,
                    "defaultPeriod": null,
                    "defaultScope": "org",
                    "meterKey": "kb_page_count",
                    "isCustomizable": true,
                    "createdAt": "2025-09-25T04:37:17.486Z",
                    "updatedAt": "2025-09-25T04:37:17.486Z"
                },
                "value": {
                    "kind": "count",
                    "value": 100,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c6fdcbf444be2c660835",
                    "code": "kb_notion_pages",
                    "name": "Notion pages",
                    "description": "Number of Notion pages that can be indexed",
                    "kind": "count",
                    "unit": "pages",
                    "enumOptions": [],
                    "category": "knowledge_base",
                    "group": "Knowledge Base",
                    "sortOrder": 130,
                    "defaultPeriod": null,
                    "defaultScope": "org",
                    "meterKey": "kb_notion_page_count",
                    "isCustomizable": true,
                    "createdAt": "2025-09-25T04:37:17.944Z",
                    "updatedAt": "2025-09-25T04:37:17.944Z"
                },
                "value": {
                    "kind": "count",
                    "value": -1,
                    "unlimited": true,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c6fecbf444be2c660839",
                    "code": "kb_drive_files",
                    "name": "Google Drive files",
                    "description": "Number of Google Drive files that can be indexed",
                    "kind": "count",
                    "unit": "files",
                    "enumOptions": [],
                    "category": "knowledge_base",
                    "group": "Knowledge Base",
                    "sortOrder": 140,
                    "defaultPeriod": null,
                    "defaultScope": "org",
                    "meterKey": "kb_drive_file_count",
                    "isCustomizable": true,
                    "createdAt": "2025-09-25T04:37:18.402Z",
                    "updatedAt": "2025-09-25T04:37:18.402Z"
                },
                "value": {
                    "kind": "count",
                    "value": -1,
                    "unlimited": true,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c6fecbf444be2c66083c",
                    "code": "custom_personalities",
                    "name": "Custom bot personalities",
                    "description": "Create and manage custom bot personalities with custom prompts",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "customization",
                    "group": "Customization",
                    "sortOrder": 205,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:18.860Z",
                    "updatedAt": "2025-09-25T04:37:18.860Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c6ffcbf444be2c66083f",
                    "code": "appearance",
                    "name": "Custom bot appearance (color + avatar)",
                    "description": "Customize bot color scheme and avatar",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "customization",
                    "group": "Customization",
                    "sortOrder": 210,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:19.317Z",
                    "updatedAt": "2025-09-25T04:37:19.317Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c6ffcbf444be2c660842",
                    "code": "welcome_message",
                    "name": "Custom welcome message",
                    "description": "Set custom welcome message for visitors",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "customization",
                    "group": "Customization",
                    "sortOrder": 220,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:19.774Z",
                    "updatedAt": "2025-09-25T04:37:19.774Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c700cbf444be2c660845",
                    "code": "branding_removal",
                    "name": "Branding removal",
                    "description": "Remove platform branding from chat widget",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "customization",
                    "group": "Customization",
                    "sortOrder": 230,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:20.232Z",
                    "updatedAt": "2025-09-25T04:37:20.232Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c700cbf444be2c660848",
                    "code": "Alexi_studio",
                    "name": "Alexi Studio (interactive builder)",
                    "description": "Access to visual bot builder interface",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "customization",
                    "group": "Customization",
                    "sortOrder": 240,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:20.691Z",
                    "updatedAt": "2025-09-25T04:37:20.691Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c701cbf444be2c66084b",
                    "code": "lead_email",
                    "name": "Lead → Email inbox",
                    "description": "Send captured leads to email inbox",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "lead",
                    "group": "Lead Capture",
                    "sortOrder": 310,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:21.149Z",
                    "updatedAt": "2025-09-25T04:37:21.149Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c701cbf444be2c66084e",
                    "code": "lead_dashboard",
                    "name": "Lead → Dashboard",
                    "description": "View captured leads in dashboard",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "lead",
                    "group": "Lead Capture",
                    "sortOrder": 320,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:21.607Z",
                    "updatedAt": "2025-09-25T04:37:21.607Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c702cbf444be2c660851",
                    "code": "lead_sheets",
                    "name": "Lead export → Google Sheets",
                    "description": "Export leads to Google Sheets",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "lead",
                    "group": "Lead Capture",
                    "sortOrder": 330,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:22.063Z",
                    "updatedAt": "2025-09-25T04:37:22.063Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c702cbf444be2c660854",
                    "code": "lead_zapier",
                    "name": "Lead export → Zapier/Webhook",
                    "description": "Export leads via Zapier or webhooks",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "lead",
                    "group": "Lead Capture",
                    "sortOrder": 340,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:22.521Z",
                    "updatedAt": "2025-09-25T04:37:22.521Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c702cbf444be2c660857",
                    "code": "analytics_conversions",
                    "name": "Conversions",
                    "description": "Track conversion rates and metrics",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "analytics",
                    "group": "Analytics",
                    "sortOrder": 410,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:22.978Z",
                    "updatedAt": "2025-09-25T04:37:22.978Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c703cbf444be2c66085a",
                    "code": "analytics_messages",
                    "name": "Messages",
                    "description": "Message volume and engagement analytics",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "analytics",
                    "group": "Analytics",
                    "sortOrder": 420,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:23.437Z",
                    "updatedAt": "2025-09-25T04:37:23.437Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c703cbf444be2c66085d",
                    "code": "analytics_leads",
                    "name": "Leads",
                    "description": "Lead generation and tracking analytics",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "analytics",
                    "group": "Analytics",
                    "sortOrder": 430,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:23.897Z",
                    "updatedAt": "2025-09-25T04:37:23.897Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c704cbf444be2c660860",
                    "code": "analytics_top_faqs",
                    "name": "Top FAQs",
                    "description": "Most frequently asked questions analytics",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "analytics",
                    "group": "Analytics",
                    "sortOrder": 440,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:24.353Z",
                    "updatedAt": "2025-09-25T04:37:24.353Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c704cbf444be2c660863",
                    "code": "analytics_csv_export",
                    "name": "CSV Export",
                    "description": "Export analytics data to CSV format",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "analytics",
                    "group": "Analytics",
                    "sortOrder": 450,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:24.810Z",
                    "updatedAt": "2025-09-25T04:37:24.810Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c705cbf444be2c660866",
                    "code": "analytics_trends",
                    "name": "Trends",
                    "description": "Trend analysis and historical data insights",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "analytics",
                    "group": "Analytics",
                    "sortOrder": 460,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:25.277Z",
                    "updatedAt": "2025-09-25T04:37:25.277Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c705cbf444be2c660869",
                    "code": "analytics_sentiment",
                    "name": "Sentiment",
                    "description": "Sentiment analysis of conversations",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "analytics",
                    "group": "Analytics",
                    "sortOrder": 470,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:25.739Z",
                    "updatedAt": "2025-09-25T04:37:25.739Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c706cbf444be2c66086c",
                    "code": "analytics_topics",
                    "name": "Topics",
                    "description": "Topic analysis and categorization",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "analytics",
                    "group": "Analytics",
                    "sortOrder": 480,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:26.195Z",
                    "updatedAt": "2025-09-25T04:37:26.195Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c706cbf444be2c66086f",
                    "code": "analytics_unanswered",
                    "name": "Unanswered",
                    "description": "Track unanswered questions and gaps",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "analytics",
                    "group": "Analytics",
                    "sortOrder": 490,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:26.652Z",
                    "updatedAt": "2025-09-25T04:37:26.652Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c707cbf444be2c660872",
                    "code": "team_roles",
                    "name": "Team management (roles & permissions)",
                    "description": "Advanced team management with roles and permissions",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "team",
                    "group": "Team",
                    "sortOrder": 510,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:27.110Z",
                    "updatedAt": "2025-09-25T04:37:27.110Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c709cbf444be2c660881",
                    "code": "int_notion",
                    "name": "Notion (integration)",
                    "description": "Notion integration status",
                    "kind": "status",
                    "enumOptions": [],
                    "category": "integrations",
                    "group": "Integrations",
                    "sortOrder": 650,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:29.397Z",
                    "updatedAt": "2025-09-25T04:37:29.397Z"
                },
                "value": {
                    "kind": "status",
                    "period": null,
                    "scope": null,
                    "state": "included"
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c707cbf444be2c660875",
                    "code": "int_shopify",
                    "name": "Shopify",
                    "description": "Shopify integration status",
                    "kind": "status",
                    "enumOptions": [],
                    "category": "integrations",
                    "group": "Integrations",
                    "sortOrder": 610,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:27.567Z",
                    "updatedAt": "2025-09-25T04:37:27.567Z"
                },
                "value": {
                    "kind": "status",
                    "period": null,
                    "scope": null,
                    "state": "coming_soon"
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c708cbf444be2c660878",
                    "code": "int_wix",
                    "name": "Wix",
                    "description": "Wix integration status",
                    "kind": "status",
                    "enumOptions": [],
                    "category": "integrations",
                    "group": "Integrations",
                    "sortOrder": 620,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:28.025Z",
                    "updatedAt": "2025-09-25T04:37:28.025Z"
                },
                "value": {
                    "kind": "status",
                    "period": null,
                    "scope": null,
                    "state": "coming_soon"
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c708cbf444be2c66087b",
                    "code": "int_wp",
                    "name": "WordPress",
                    "description": "WordPress integration status",
                    "kind": "status",
                    "enumOptions": [],
                    "category": "integrations",
                    "group": "Integrations",
                    "sortOrder": 630,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:28.484Z",
                    "updatedAt": "2025-09-25T04:37:28.484Z"
                },
                "value": {
                    "kind": "status",
                    "period": null,
                    "scope": null,
                    "state": "coming_soon"
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c708cbf444be2c66087e",
                    "code": "int_drive",
                    "name": "Google Drive (integration)",
                    "description": "Google Drive integration status",
                    "kind": "status",
                    "enumOptions": [],
                    "category": "integrations",
                    "group": "Integrations",
                    "sortOrder": 640,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:28.940Z",
                    "updatedAt": "2025-09-25T04:37:28.940Z"
                },
                "value": {
                    "kind": "status",
                    "period": null,
                    "scope": null,
                    "state": "coming_soon"
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c709cbf444be2c660884",
                    "code": "int_zapier",
                    "name": "Zapier Integration",
                    "description": "Zapier integration for advanced automation",
                    "kind": "status",
                    "enumOptions": [],
                    "category": "integrations",
                    "group": "Integrations",
                    "sortOrder": 660,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:29.854Z",
                    "updatedAt": "2025-09-25T04:37:29.854Z"
                },
                "value": {
                    "kind": "status",
                    "period": null,
                    "scope": null,
                    "state": "coming_soon"
                },
                "highlight": true
            },
            {
                "feature": {
                    "_id": "68d4c70acbf444be2c660887",
                    "code": "support_self_serve",
                    "name": "Standard Support",
                    "description": "Self-serve docs + Standard Email (48–72h)",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "support",
                    "group": "Support",
                    "sortOrder": 710,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:30.312Z",
                    "updatedAt": "2025-09-25T04:37:30.312Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c70acbf444be2c66088a",
                    "code": "support_priority_email",
                    "name": "Priority Email Support",
                    "description": "Priority Email (24–48h)",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "support",
                    "group": "Support",
                    "sortOrder": 720,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:30.770Z",
                    "updatedAt": "2025-09-25T04:37:30.770Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": false
            },
            {
                "feature": {
                    "_id": "68d4c70bcbf444be2c66088d",
                    "code": "support_priority_support",
                    "name": "Priority Support",
                    "description": "Priority Support (email + faster SLA)",
                    "kind": "boolean",
                    "enumOptions": [],
                    "category": "support",
                    "group": "Support",
                    "sortOrder": 730,
                    "defaultPeriod": null,
                    "defaultScope": null,
                    "isCustomizable": false,
                    "createdAt": "2025-09-25T04:37:31.227Z",
                    "updatedAt": "2025-09-25T04:37:31.227Z"
                },
                "value": {
                    "kind": "boolean",
                    "value": true,
                    "period": null,
                    "scope": null
                },
                "highlight": true
            }
        ]
    }
]

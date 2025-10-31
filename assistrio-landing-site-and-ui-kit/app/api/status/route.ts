import { NextResponse } from 'next/server';

export async function GET() {
    const statusData = {
        status: 'operational',
        timestamp: new Date().toISOString(),
        services: [
            {
                name: 'AI Assistant API',
                status: 'operational',
                uptime: '99.9%',
                responseTime: '45ms',
                lastIncident: null
            },
            {
                name: 'Authentication Service',
                status: 'operational',
                uptime: '99.8%',
                responseTime: '23ms',
                lastIncident: null
            },
            {
                name: 'Database',
                status: 'operational',
                uptime: '99.95%',
                responseTime: '12ms',
                lastIncident: null
            },
            {
                name: 'CDN & Assets',
                status: 'operational',
                uptime: '99.9%',
                responseTime: '8ms',
                lastIncident: null
            },
            {
                name: 'Email Service',
                status: 'degraded',
                uptime: '98.2%',
                responseTime: '120ms',
                lastIncident: '2024-01-15T10:30:00Z'
            },
            {
                name: 'Analytics',
                status: 'operational',
                uptime: '99.7%',
                responseTime: '67ms',
                lastIncident: null
            }
        ],
        incidents: [
            {
                id: 1,
                title: 'Email Service Degradation',
                status: 'investigating',
                severity: 'minor',
                description: 'Some email notifications may be delayed by up to 5 minutes.',
                startedAt: '2024-01-15T10:30:00Z',
                updatedAt: new Date().toISOString(),
                affectedServices: ['Email Service']
            }
        ],
        metrics: {
            overallUptime: '99.9%',
            averageResponseTime: '45ms',
            activeIncidents: 1,
            totalServices: 6,
            operationalServices: 5
        }
    };

    return NextResponse.json(statusData, {
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'public, max-age=60', // Cache for 1 minute
        },
    });
}

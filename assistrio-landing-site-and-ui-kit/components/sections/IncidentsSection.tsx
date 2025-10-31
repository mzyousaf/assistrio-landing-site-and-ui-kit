import { IncidentCard } from '../content';

interface Incident {
    id: number;
    title: string;
    status: string;
    severity: string;
    description: string;
    startedAt: string;
    updatedAt: string;
    resolvedAt?: string;
    affectedServices: string[];
}

interface IncidentsSectionProps {
    incidents: Incident[];
}

export default function IncidentsSection({ incidents }: IncidentsSectionProps) {
    return (
        <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Recent Incidents</h3>
            <div className="space-y-4">
                {incidents.map((incident, index) => (
                    <IncidentCard key={incident.id} incident={incident} index={index} />
                ))}
            </div>
        </div>
    );
}

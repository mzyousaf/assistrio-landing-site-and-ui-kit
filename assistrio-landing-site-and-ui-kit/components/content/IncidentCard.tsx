import { StatusBadge } from '../ui';

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

interface IncidentCardProps {
    incident: Incident;
    index: number;
}

export default function IncidentCard({ incident, index }: IncidentCardProps) {
    return (
        <div
            className="bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-lg dark:hover:shadow-brand-500/20 transition-all duration-300 p-6 border border-gray-200 dark:border-slate-700 hover:border-brand-500 dark:hover:border-brand-500 transform hover:scale-[1.02]"
            style={{ animationDelay: `${index * 150}ms` }}
        >
            <div className="flex items-start justify-between mb-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{incident.title}</h4>
                    <p className="text-gray-600 dark:text-gray-300 mb-3">{incident.description}</p>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                        Started: {new Date(incident.startedAt).toLocaleString()}
                        {incident.resolvedAt && (
                            <span className="ml-4">
                                Resolved: {new Date(incident.resolvedAt).toLocaleString()}
                            </span>
                        )}
                    </div>
                </div>
                <StatusBadge status={incident.status} />
            </div>

            <div className="text-sm text-gray-500 dark:text-gray-400">
                Affected Services: {incident.affectedServices.join(', ')}
            </div>
        </div>
    );
}

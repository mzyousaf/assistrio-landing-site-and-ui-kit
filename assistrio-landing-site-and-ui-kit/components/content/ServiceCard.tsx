import { StatusBadge } from '../ui';

interface Service {
    name: string;
    status: string;
    uptime: string;
    responseTime: string;
    lastIncident?: string | null;
    description: string;
}

interface ServiceCardProps {
    service: Service;
    index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
    return (
        <div
            className="bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-lg dark:hover:shadow-brand-500/20 transition-all duration-300 p-6 border border-gray-200 dark:border-slate-700 hover:border-brand-500 dark:hover:border-brand-500 group transform hover:scale-[1.02]"
            style={{ animationDelay: `${index * 100}ms` }}
        >
            <div className="flex items-start justify-between mb-4">
                <div>
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white group-hover:text-brand-600 dark:group-hover:text-brand-400 transition-colors">
                        {service.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">{service.description}</p>
                </div>
                <StatusBadge status={service.status} />
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                    <div className="text-gray-500 dark:text-gray-400">Uptime</div>
                    <div className="font-semibold text-gray-900 dark:text-white">{service.uptime}</div>
                </div>
                <div>
                    <div className="text-gray-500 dark:text-gray-400">Response Time</div>
                    <div className="font-semibold text-gray-900 dark:text-white">{service.responseTime}</div>
                </div>
            </div>

            {service.lastIncident && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                    <div className="text-xs text-gray-500">
                        Last incident: {new Date(service.lastIncident).toLocaleDateString()}
                    </div>
                </div>
            )}
        </div>
    );
}

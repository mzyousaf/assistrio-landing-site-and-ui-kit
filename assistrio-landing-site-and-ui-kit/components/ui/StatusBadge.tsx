import StatusIcon from './StatusIcon';

interface StatusBadgeProps {
    status: string;
    className?: string;
}

const getStatusColor = (status: string) => {
    switch (status) {
        case 'operational': return 'text-green-600 bg-green-100';
        case 'degraded': return 'text-yellow-600 bg-yellow-100';
        case 'outage': return 'text-red-600 bg-red-100';
        case 'investigating': return 'text-orange-600 bg-orange-100';
        case 'resolved': return 'text-blue-600 bg-blue-100';
        default: return 'text-gray-600 bg-gray-100';
    }
};

export default function StatusBadge({ status, className = '' }: StatusBadgeProps) {
    return (
        <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(status)} ${className}`}>
            <StatusIcon status={status} />
            <span className="ml-1 capitalize">{status}</span>
        </div>
    );
}

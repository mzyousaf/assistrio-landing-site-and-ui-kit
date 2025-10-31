import { ServiceCard } from '../content';

interface Service {
    name: string;
    status: string;
    uptime: string;
    responseTime: string;
    lastIncident?: string | null;
    description: string;
}

interface ServicesSectionProps {
    services: Service[];
}

export default function ServicesSection({ services }: ServicesSectionProps) {
    return (
        <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Service Status</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service, index) => (
                    <ServiceCard key={service.name} service={service} index={index} />
                ))}
            </div>
        </div>
    );
}

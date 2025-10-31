import { PerkIcon } from '@/components/ui';

interface PerkCardProps {
    title: string;
    description: string;
    icon: string;
}

export default function PerkCard({ title, description, icon }: PerkCardProps) {
    return (
        <div className="text-center group">
            <div className="w-16 h-16 bg-brand-100 dark:bg-brand-900/30 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-200 dark:group-hover:bg-brand-900/50 transition-colors duration-200">
                <PerkIcon iconName={icon} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{description}</p>
        </div>
    );
}

interface ProcessStepProps {
    stepNumber: number;
    title: string;
    description: string;
}

export default function ProcessStep({ stepNumber, title, description }: ProcessStepProps) {
    return (
        <div className="text-center">
            <div className="w-12 h-12 bg-brand-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                {stepNumber}
            </div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">{description}</p>
        </div>
    );
}

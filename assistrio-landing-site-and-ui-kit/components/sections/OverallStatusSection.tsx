interface OverallStatusSectionProps {
    operationalServices: number;
    totalServices: number;
}

export default function OverallStatusSection({ operationalServices, totalServices }: OverallStatusSectionProps) {
    return (
        <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 mb-12">
            <div className="flex flex-col lg:flex-row items-center justify-between">
                <div className="text-center lg:text-left mb-6 lg:mb-0">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">All Systems Operational</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-300">
                        {operationalServices} of {totalServices} services are running normally
                    </p>
                </div>
                <div className="flex items-center space-x-8">
                    <div className="text-center">
                        <div className="text-3xl font-bold text-green-600 dark:text-green-400">99.9%</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">Uptime</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">45ms</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">Avg Response</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">0</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">Active Issues</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

interface JobCardProps {
    id: number;
    title: string;
    department: string;
    location: string;
    type: string;
    experience: string;
    description: string;
    requirements: string[];
    benefits: string[];
}

export default function JobCard({
    title,
    department,
    location,
    type,
    experience,
    description,
    requirements,
    benefits
}: JobCardProps) {
    return (
        <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 p-6">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
                        <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                            </svg>
                            {department}
                        </span>
                        <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {location}
                        </span>
                        <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {type}
                        </span>
                        <span className="flex items-center">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {experience}
                        </span>
                    </div>
                </div>
                <button className="mt-4 lg:mt-0 bg-brand-500 dark:bg-brand-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-brand-600 dark:hover:bg-brand-700 transition-colors">
                    Apply Now
                </button>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
            <div className="grid md:grid-cols-2 gap-6">
                <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Requirements</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        {requirements.map((req, index) => (
                            <li key={index} className="flex items-start">
                                <svg className="w-4 h-4 text-brand-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                {req}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Benefits</h4>
                    <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                        {benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                                <svg className="w-4 h-4 text-brand-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                                {benefit}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

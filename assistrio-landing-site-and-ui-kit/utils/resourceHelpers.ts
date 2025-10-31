export const getTypeIcon = (type: string) => {
    switch (type.toLowerCase()) {
        case 'guide':
            return 'FaBook';
        case 'whitepaper':
            return 'FaFileAlt';
        case 'webinar':
            return 'FaVideo';
        case 'tool':
            return 'FaCog';
        default:
            return 'FaBook';
    }
};

export const getTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
        case 'guide': return 'from-blue-500 to-cyan-500';
        case 'whitepaper': return 'from-teal-500 to-blue-500';
        case 'webinar': return 'from-cyan-500 to-teal-500';
        case 'tool': return 'from-blue-600 to-teal-600';
        default: return 'from-blue-500 to-teal-500';
    }
};

export const getDifficultyColor = (difficulty?: string) => {
    switch (difficulty?.toLowerCase()) {
        case 'beginner': return 'bg-green-500';
        case 'intermediate': return 'bg-yellow-500';
        case 'advanced': return 'bg-red-500';
        default: return 'bg-blue-500';
    }
};

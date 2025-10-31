import React from 'react';

interface ContactInfoItemProps {
    day: string;
    time: string;
    isClosed?: boolean;
}

const ContactInfoItem: React.FC<ContactInfoItemProps> = ({
    day,
    time,
    isClosed = false
}) => {
    return (
        <div className="flex justify-between">
            <span className="font-medium text-gray-900 dark:text-white">{day}:</span>
            <span className={isClosed ? "text-gray-500 dark:text-gray-400" : "text-gray-900 dark:text-white"}>{time}</span>
        </div>
    );
};

export default ContactInfoItem;

import BaseMetaInfo from './BaseMetaInfo';

interface CompanyInfoProps {
    company: string;
    industry: string;
    companySize: string;
    logo: string;
    className?: string;
}

export default function CompanyInfo({
    company,
    industry,
    companySize,
    logo,
    className = ''
}: CompanyInfoProps) {
    return (
        <BaseMetaInfo
            variant="company"
            company={company}
            industry={industry}
            companySize={companySize}
            logo={logo}
            className={className}
        />
    );
}

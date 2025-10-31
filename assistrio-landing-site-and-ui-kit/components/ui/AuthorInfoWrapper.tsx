import BaseMetaInfo from './BaseMetaInfo';

interface AuthorInfoProps {
    author: string;
    authorRole: string;
    authorImage: string;
    publishedAt: string;
    readTime: string;
    className?: string;
}

export default function AuthorInfo({
    author,
    authorRole,
    authorImage,
    publishedAt,
    readTime,
    className = ''
}: AuthorInfoProps) {
    return (
        <BaseMetaInfo
            variant="author"
            author={author}
            authorRole={authorRole}
            authorImage={authorImage}
            publishedAt={publishedAt}
            readTime={readTime}
            className={className}
        />
    );
}

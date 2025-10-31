'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Comment {
    id: string;
    author: string;
    authorImage: string;
    authorRole?: string;
    content: string;
    timestamp: string;
    likes: number;
    replies: Comment[];
    isLiked?: boolean;
}

interface CommentsProps {
    postId: string;
    postTitle: string;
}

// Mock comments data
const mockComments: Comment[] = [
    {
        id: '1',
        author: 'Alex Thompson',
        authorImage: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
        authorRole: 'AI Engineer',
        content: 'This is exactly what I needed! The section on predictive customer service really opened my eyes to new possibilities. I\'m already thinking about how to implement this in our current system.',
        timestamp: '2 hours ago',
        likes: 12,
        replies: [
            {
                id: '1-1',
                author: 'Sarah Chen',
                authorImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face',
                authorRole: 'Head of AI Research',
                content: 'Thanks Alex! I\'d love to hear about your implementation. Feel free to reach out if you need any guidance.',
                timestamp: '1 hour ago',
                likes: 8,
                replies: [],
                isLiked: true
            }
        ],
        isLiked: false
    },
    {
        id: '2',
        author: 'Maria Rodriguez',
        authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
        authorRole: 'Product Manager',
        content: 'The multimodal AI interactions section was particularly insightful. We\'ve been struggling with voice integration, and this gives us a clear roadmap forward.',
        timestamp: '4 hours ago',
        likes: 7,
        replies: [],
        isLiked: true
    },
    {
        id: '3',
        author: 'David Kim',
        authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
        authorRole: 'CTO',
        content: 'Excellent article! The human-AI collaboration model is spot on. We\'ve found that the most successful implementations are those that augment rather than replace human capabilities.',
        timestamp: '6 hours ago',
        likes: 15,
        replies: [
            {
                id: '3-1',
                author: 'Jennifer Lee',
                authorImage: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
                authorRole: 'UX Designer',
                content: 'Absolutely agree! The key is finding the right balance. Great insights, David.',
                timestamp: '5 hours ago',
                likes: 3,
                replies: [],
                isLiked: false
            }
        ],
        isLiked: false
    }
];

export default function Comments({ postTitle }: CommentsProps) {
    const [comments, setComments] = useState<Comment[]>(mockComments);
    const [newComment, setNewComment] = useState('');
    const [replyingTo, setReplyingTo] = useState<string | null>(null);
    const [replyContent, setReplyContent] = useState('');
    const [sortBy, setSortBy] = useState<'newest' | 'oldest' | 'popular'>('newest');
    const [showReplies, setShowReplies] = useState<Set<string>>(new Set());

    const handleSubmitComment = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newComment.trim()) return;

        const comment: Comment = {
            id: Date.now().toString(),
            author: 'You',
            authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
            authorRole: 'Reader',
            content: newComment,
            timestamp: 'Just now',
            likes: 0,
            replies: [],
            isLiked: false
        };

        setComments([comment, ...comments]);
        setNewComment('');
    };

    const handleSubmitReply = (e: React.FormEvent, parentId: string) => {
        e.preventDefault();
        if (!replyContent.trim()) return;

        const reply: Comment = {
            id: `${parentId}-${Date.now()}`,
            author: 'You',
            authorImage: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
            authorRole: 'Reader',
            content: replyContent,
            timestamp: 'Just now',
            likes: 0,
            replies: [],
            isLiked: false
        };

        setComments(comments.map(comment =>
            comment.id === parentId
                ? { ...comment, replies: [...comment.replies, reply] }
                : comment
        ));

        setReplyContent('');
        setReplyingTo(null);
    };

    const handleLike = (commentId: string, isReply: boolean = false, parentId?: string) => {
        if (isReply && parentId) {
            setComments(comments.map(comment =>
                comment.id === parentId
                    ? {
                        ...comment,
                        replies: comment.replies.map(reply =>
                            reply.id === commentId
                                ? {
                                    ...reply,
                                    likes: reply.isLiked ? reply.likes - 1 : reply.likes + 1,
                                    isLiked: !reply.isLiked
                                }
                                : reply
                        )
                    }
                    : comment
            ));
        } else {
            setComments(comments.map(comment =>
                comment.id === commentId
                    ? {
                        ...comment,
                        likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1,
                        isLiked: !comment.isLiked
                    }
                    : comment
            ));
        }
    };

    const toggleReplies = (commentId: string) => {
        const newShowReplies = new Set(showReplies);
        if (newShowReplies.has(commentId)) {
            newShowReplies.delete(commentId);
        } else {
            newShowReplies.add(commentId);
        }
        setShowReplies(newShowReplies);
    };

    const sortedComments = [...comments].sort((a, b) => {
        switch (sortBy) {
            case 'newest':
                return new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime();
            case 'oldest':
                return new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime();
            case 'popular':
                return b.likes - a.likes;
            default:
                return 0;
        }
    });

    const CommentItem = ({ comment, isReply = false, parentId }: { comment: Comment; isReply?: boolean; parentId?: string }) => (
        <div className={`${isReply ? 'ml-4 sm:ml-8 lg:ml-12 mt-3 sm:mt-4' : ''} bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200`}>
            <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="relative flex-shrink-0">
                    <Image
                        src={comment.authorImage || `https://ui-avatars.com/api/?name=${encodeURIComponent(comment.author)}&size=100&background=6366f1&color=ffffff&bold=true`}
                        alt={comment.author}
                        width={48}
                        height={48}
                        className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full object-cover shadow-md"
                    />
                    {comment.authorRole === 'Head of AI Research' && (
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 sm:w-4 sm:h-4 lg:w-5 lg:h-5 bg-yellow-400 rounded-full border border-white sm:border-2 flex items-center justify-center">
                            <svg className="w-2 h-2 sm:w-2.5 sm:h-2.5 lg:w-3 lg:h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                        </div>
                    )}
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2 mb-2">
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{comment.author}</h4>
                        <div className="flex items-center space-x-1 sm:space-x-2 mt-1 sm:mt-0">
                            {comment.authorRole && (
                                <span className="inline-flex items-center px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-full bg-brand-100 text-brand-700 text-xs font-medium">
                                    {comment.authorRole}
                                </span>
                            )}
                            <span className="text-xs sm:text-sm text-gray-500 hidden sm:inline">•</span>
                            <span className="text-xs sm:text-sm text-gray-500">{comment.timestamp}</span>
                        </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed mb-3 sm:mb-4 text-sm sm:text-base">{comment.content}</p>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                        <button
                            onClick={() => handleLike(comment.id, isReply, parentId)}
                            className={`flex items-center space-x-1 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium transition-colors ${comment.isLiked
                                ? 'bg-red-100 text-red-600 hover:bg-red-200'
                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                }`}
                        >
                            <svg className={`w-3 h-3 sm:w-4 sm:h-4 ${comment.isLiked ? 'fill-current' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                            </svg>
                            <span>{comment.likes}</span>
                        </button>
                        {!isReply && (
                            <button
                                onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                                className="flex items-center space-x-1 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-gray-600 hover:bg-gray-100 transition-colors"
                            >
                                <svg className="w-3 h-3 sm:w-4 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                                </svg>
                                <span className="hidden sm:inline">Reply</span>
                            </button>
                        )}
                        {!isReply && comment.replies.length > 0 && (
                            <button
                                onClick={() => toggleReplies(comment.id)}
                                className="flex items-center space-x-1 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-medium text-brand-600 hover:bg-brand-50 transition-colors"
                            >
                                <svg className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform ${showReplies.has(comment.id) ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                                <span>{comment.replies.length} {comment.replies.length === 1 ? 'reply' : 'replies'}</span>
                            </button>
                        )}
                    </div>

                    {/* Reply Form */}
                    {replyingTo === comment.id && (
                        <form onSubmit={(e) => handleSubmitReply(e, comment.id)} className="mt-3 sm:mt-4">
                            <div className="flex space-x-2 sm:space-x-3">
                                <Image
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                                    alt="Your avatar"
                                    width={32}
                                    height={32}
                                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full object-cover flex-shrink-0"
                                />
                                <div className="flex-1 min-w-0">
                                    <textarea
                                        value={replyContent}
                                        onChange={(e) => setReplyContent(e.target.value)}
                                        placeholder="Write a reply..."
                                        className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none text-sm sm:text-base"
                                        rows={2}
                                    />
                                    <div className="flex flex-col sm:flex-row sm:justify-end gap-2 sm:gap-3 mt-2 sm:mt-3">
                                        <button
                                            type="button"
                                            onClick={() => {
                                                setReplyingTo(null);
                                                setReplyContent('');
                                            }}
                                            className="px-3 sm:px-4 py-1.5 sm:py-2 text-gray-600 hover:text-gray-800 transition-colors text-sm sm:text-base order-2 sm:order-1"
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="submit"
                                            disabled={!replyContent.trim()}
                                            className="px-4 sm:px-6 py-1.5 sm:py-2 bg-brand-500 text-white rounded-lg font-medium hover:bg-brand-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base order-1 sm:order-2"
                                        >
                                            Reply
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );

    return (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-t border-gray-200 pt-12 sm:pt-16">
                <div className="text-center mb-8 sm:mb-12">
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Join the Conversation</h2>
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                        Share your thoughts and insights about &quot;{postTitle}&quot;. We&apos;d love to hear from you!
                    </p>
                </div>

                {/* Comment Form */}
                <div className="bg-gradient-to-br from-brand-50 to-blue-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 mb-8 sm:mb-12 border border-brand-200">
                    <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-4 sm:mb-6">Leave a Comment</h3>
                    <form onSubmit={handleSubmitComment}>
                        <div className="flex space-x-3 sm:space-x-4">
                            <Image
                                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                                alt="Your avatar"
                                width={48}
                                height={48}
                                className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 rounded-full object-cover shadow-md flex-shrink-0"
                            />
                            <div className="flex-1 min-w-0">
                                <textarea
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                    placeholder="Share your thoughts on this article..."
                                    className="w-full px-3 sm:px-4 py-3 sm:py-4 border border-gray-200 rounded-lg sm:rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent resize-none text-sm sm:text-base"
                                    rows={3}
                                />
                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 sm:gap-0 mt-3 sm:mt-4">
                                    <p className="text-xs sm:text-sm text-gray-500 order-2 sm:order-1">
                                        Be respectful and constructive. Comments are moderated.
                                    </p>
                                    <button
                                        type="submit"
                                        disabled={!newComment.trim()}
                                        className="px-6 sm:px-8 py-2 sm:py-3 bg-brand-500 text-white rounded-lg sm:rounded-xl font-semibold hover:bg-brand-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base order-1 sm:order-2 w-full sm:w-auto"
                                    >
                                        Post Comment
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>

                {/* Comments Header */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-0 mb-6 sm:mb-8">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                        {comments.length} {comments.length === 1 ? 'Comment' : 'Comments'}
                    </h3>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                        <span className="text-xs sm:text-sm text-gray-500">Sort by:</span>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value as 'newest' | 'oldest' | 'popular')}
                            className="px-2 sm:px-3 py-1.5 sm:py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-500 bg-white text-xs sm:text-sm"
                        >
                            <option value="newest">Newest</option>
                            <option value="oldest">Oldest</option>
                            <option value="popular">Most Liked</option>
                        </select>
                    </div>
                </div>

                {/* Comments List */}
                <div className="space-y-4 sm:space-y-6">
                    {sortedComments.map((comment) => (
                        <div key={comment.id}>
                            <CommentItem comment={comment} />
                            {showReplies.has(comment.id) && comment.replies.length > 0 && (
                                <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4">
                                    {comment.replies.map((reply) => (
                                        <CommentItem
                                            key={reply.id}
                                            comment={reply}
                                            isReply={true}
                                            parentId={comment.id}
                                        />
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {comments.length === 0 && (
                    <div className="text-center py-8 sm:py-12">
                        <svg className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-3 sm:mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                        <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">No comments yet</h3>
                        <p className="text-sm sm:text-base text-gray-600">Be the first to share your thoughts!</p>
                    </div>
                )}
            </div>
        </div>
    );
}

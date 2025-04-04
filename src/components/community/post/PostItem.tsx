import React from 'react';
import { Link } from 'react-router-dom';
import './styles/PostItem.css';

interface PostItemProps {
  post: {
    id: string;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    views: number;
    comments: number;
    category: string;
  };
}

const PostItem: React.FC<PostItemProps> = ({ post }) => {
  return (
    <div className="post-item">
      <Link to={`/community/post/${post.id}`} className="post-item-title">
        {post.title}
      </Link>
      <div className="post-item-meta">
        <span className="post-item-author">{post.author}</span>
        <span className="post-item-date">{post.date}</span>
        <span className="post-item-views">조회 {post.views}</span>
        <span className="post-item-comments">댓글 {post.comments}</span>
        <span 
          className="post-item-category" 
          style={{ backgroundColor: getCategoryColor(post.category) }}
        >
          {post.category}
        </span>
      </div>
      <p className="post-item-excerpt">{post.excerpt}</p>
    </div>
  );
};

function getCategoryColor(category: string): string {
  const colors: Record<string, string> = {
    '질문': '#fee2e2', // bg-red-100
    '정보': '#e0f2fe', // bg-blue-100
    '경험': '#f3e8ff', // bg-purple-100
    '일상': '#d1fae5', // bg-green-100
    '기타': '#f3f4f6', // bg-gray-100
  };
  return colors[category] || colors['기타'];
}

export default PostItem; 
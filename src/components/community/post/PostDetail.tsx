import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CommentList from '../comment/CommentList';
import CommentForm from '../comment/CommentForm';
import './styles/PostDetail.css';

interface PostDetailProps {
  post: {
    id: string;
    title: string;
    content: string;
    imageUrl?: string;
    tags?: string[];
    author: {
      id: string;
      name: string;
      avatar: string;
      bio: string;
    };
    category: string;
    date: string;
    views: number;
    reactions: {
      like: number;
      love: number;
      insightful: number;
    };
    comments: Array<{
      id: string;
      author: {
        name: string;
        avatar: string;
      };
      content: string;
      date: string;
    }>;
  };
  currentUser?: {
    id: string;
    name: string;
  };
  onHide: () => void;
}

const PostDetail: React.FC<PostDetailProps> = ({ post, currentUser, onHide }) => {
  const navigate = useNavigate();
  const [reactions, setReactions] = useState(post.reactions);
  const [activeReaction, setActiveReaction] = useState<string | null>(null);

  const handleReaction = (type: 'like' | 'love' | 'insightful') => {
    if (activeReaction === type) {
      setReactions({
        ...reactions,
        [type]: reactions[type] - 1
      });
      setActiveReaction(null);
    } else {
      if (activeReaction) {
        setReactions({
          ...reactions,
          [activeReaction]: reactions[activeReaction] - 1,
          [type]: reactions[type] + 1
        });
      } else {
        setReactions({
          ...reactions,
          [type]: reactions[type] + 1
        });
      }
      setActiveReaction(type);
    }
  };

  const isAuthor = currentUser && currentUser.id === post.author.id;

  const handleEdit = () => {
    navigate(`/community/edit/${post.id}`);
  };

  const handleDelete = () => {
    if (window.confirm('정말로 이 게시글을 삭제하시겠습니까?')) {
      console.log('게시글 삭제:', post.id);
      navigate('/community');
    }
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title">{post.title}</h5>
          <button type="button" className="close" onClick={onHide}>
            &times;
          </button>
        </div>
        <div className="modal-body">
          {post.imageUrl && <img src={post.imageUrl} alt={post.title} />}
          <div className="post-content" style={{ outline: '1px solid #ccc', padding: '10px' }}>
            {post.content.split('\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>
          {post.tags && post.tags.length > 0 && (
            <div className="tags">
              {post.tags.map((tag, index) => (
                <span key={index} className="badge" style={{ outline: '1px solid #ccc', margin: '5px' }}>
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="reactions">
          <button
            className={`reaction-button ${activeReaction === 'like' ? 'active' : ''}`}
            onClick={() => handleReaction('like')}
          >
            <span className="reaction-emoji">👍</span>
            <span>좋아요</span>
            <span className="reaction-count">{reactions.like}</span>
          </button>
          <button
            className={`reaction-button ${activeReaction === 'love' ? 'active' : ''}`}
            onClick={() => handleReaction('love')}
          >
            <span className="reaction-emoji">❤️</span>
            <span>사랑해요</span>
            <span className="reaction-count">{reactions.love}</span>
          </button>
          <button
            className={`reaction-button ${activeReaction === 'insightful' ? 'active' : ''}`}
            onClick={() => handleReaction('insightful')}
          >
            <span className="reaction-emoji">💡</span>
            <span>통찰력 있어요</span>
            <span className="reaction-count">{reactions.insightful}</span>
          </button>
        </div>
        <div className="author-info">
          <img src={post.author.avatar} alt={post.author.name} className="author-avatar" />
          <div>
            <div className="author-name">{post.author.name}</div>
            <div className="author-bio">{post.author.bio}</div>
          </div>
        </div>
        {isAuthor && (
          <div className="post-actions">
            <div>
              <button className="btn btn-outline" onClick={() => navigate('/community')}>
                목록으로
              </button>
            </div>
            <div>
              <button className="btn btn-primary mr-2" onClick={handleEdit}>
                수정
              </button>
              <button className="btn btn-danger" onClick={handleDelete}>
                삭제
              </button>
            </div>
          </div>
        )}
        <CommentList comments={post.comments} />
        <CommentForm postId={post.id} />
      </div>
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

export default PostDetail; 
import React from 'react';
import './styles/CommentList.css';

interface CommentListProps {
  comments: Array<{
    id: string;
    author: {
      name: string;
      avatar: string;
    };
    content: string;
    date: string;
  }>;
}

const CommentList: React.FC<CommentListProps> = ({ comments }) => {
  return (
    <div className="comments-section">
      <h3 className="comments-title">댓글 {comments.length}개</h3>
      
      {comments.length > 0 ? (
        <div className="comment-list">
          {comments.map((comment) => (
            <div key={comment.id} className="comment-item">
              <div className="comment-header">
                <img src={comment.author.avatar} alt={comment.author.name} className="comment-avatar" />
                <span className="comment-author">{comment.author.name}</span>
                <span className="comment-date">{comment.date}</span>
              </div>
              <div className="comment-content">{comment.content}</div>
              <div className="comment-actions">
                <span className="comment-action">답글</span>
                <span className="comment-action">신고</span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="comments-empty">
          아직 댓글이 없습니다. 첫 댓글을 작성해보세요!
        </div>
      )}
    </div>
  );
};

export default CommentList; 
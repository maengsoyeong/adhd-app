import React, { useState } from 'react';
import './styles/CommentForm.css';

interface CommentFormProps {
  postId: string;
}

const CommentForm: React.FC<CommentFormProps> = ({ postId }) => {
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (comment.trim()) {
      console.log('댓글 작성:', { postId, content: comment });
      // API 호출 또는 다른 처리
      setComment('');
    }
  };

  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <h3 className="comment-form-title">댓글 작성</h3>
      <textarea
        className="comment-textarea"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="댓글을 작성하세요..."
      />
      <div className="comment-form-actions">
        <button type="submit" className="btn btn-primary" disabled={!comment.trim()}>
          댓글 작성
        </button>
      </div>
    </form>
  );
};

export default CommentForm; 
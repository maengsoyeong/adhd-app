import React, { useState } from 'react';
import { Post, Comment } from '../../pages/Community';

interface PostDetailProps {
  show: boolean;
  onHide: () => void;
  post: Post;
  onEdit: () => void;
  onDelete: () => void;
  onAddComment: (comment: Partial<Comment>) => void;
  onAddReaction: (type: string) => void;
  isLoggedIn: boolean;
  categories: { id: string; name: string; color: string; }[];
  reactions: { id: string; emoji: string; label: string; }[];
  posts: Post[];
}

export const PostDetail: React.FC<PostDetailProps> = ({
  show,
  onHide,
  post,
  onEdit,
  onDelete,
  onAddComment,
  onAddReaction,
  isLoggedIn,
  categories,
  reactions,
  posts
}) => {
  const [commentContent, setCommentContent] = useState('');
  const [isCommentAnonymous, setIsCommentAnonymous] = useState(false);

  // 카테고리 이름과 색상 가져오기
  const getCategoryName = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.name : '기타';
  };

  const getCategoryColor = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.color : '#6c757d';
  };

  // 댓글 제출
  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commentContent.trim()) return;
    
    onAddComment({
      content: commentContent,
      isAnonymous: isCommentAnonymous
    });
    
    setCommentContent('');
    setIsCommentAnonymous(false);
  };

  // 이전/다음 게시글 찾기
  const currentIndex = posts.findIndex(p => p.id === post.id);
  const prevPost = currentIndex < posts.length - 1 ? posts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? posts[currentIndex - 1] : null;

  if (!show) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{post.title}</h5>
            <button 
              type="button" 
              className="btn-close" 
              onClick={onHide}
              title="닫기"
              aria-label="닫기"
            ></button>
          </div>
          <div className="modal-body">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <span 
                  className="badge me-2"
                  style={{ 
                    backgroundColor: getCategoryColor(post.category),
                    color: '#fff'
                  }}
                >
                  {getCategoryName(post.category)}
                </span>
                <span className="text-muted">
                  {post.isAnonymous ? '익명' : post.author} • {post.date}
                </span>
              </div>
              {isLoggedIn && (
                <div>
                  <button className="btn btn-sm btn-outline-primary me-2" onClick={onEdit}>
                    수정
                  </button>
                  <button className="btn btn-sm btn-outline-danger" onClick={onDelete}>
                    삭제
                  </button>
                </div>
              )}
            </div>
            
            {post.imageUrl && (
              <div className="text-center mb-3">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="img-fluid rounded" 
                  style={{ maxHeight: '400px' }}
                />
              </div>
            )}
            
            <div className="post-content mb-4">
              {post.content.split('\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
            
            {post.tags && post.tags.length > 0 && (
              <div className="mb-4">
                {post.tags.map((tag, index) => (
                  <span key={index} className="badge bg-light text-dark me-1">#{tag}</span>
                ))}
              </div>
            )}
            
            <div className="reaction-buttons mb-4">
              <div className="d-flex flex-wrap gap-2">
                {reactions.map(reaction => (
                  <button 
                    key={reaction.id}
                    className="btn btn-light reaction-btn"
                    onClick={() => onAddReaction(reaction.id)}
                  >
                    <span className="reaction-emoji">{reaction.emoji}</span>
                    <span className="reaction-label">{reaction.label}</span>
                    <span className="reaction-count">
                      {post.reactions[reaction.id] || 0}
                    </span>
                  </button>
                ))}
              </div>
            </div>
            
            <hr />
            
            <h6 className="mb-3">댓글 {post.comments.length}개</h6>
            
            {post.comments.length > 0 ? (
              <div className="comments-list mb-4">
                {post.comments.map(comment => (
                  <div key={comment.id} className="comment-item p-3 mb-2 bg-light rounded">
                    <div className="d-flex justify-content-between">
                      <span className="fw-bold">
                        {comment.isAnonymous ? '익명' : comment.author}
                      </span>
                      <small className="text-muted">{comment.date}</small>
                    </div>
                    <p className="mb-1 mt-2">{comment.content}</p>
                    <div className="comment-reactions">
                      {Object.entries(comment.reactions)
                        .filter(([_, count]) => count > 0)
                        .map(([type, count]) => {
                          const reaction = reactions.find(r => r.id === type);
                          return reaction ? (
                            <span key={type} className="me-2 small">
                              {reaction.emoji} {count}
                            </span>
                          ) : null;
                        })}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-muted mb-4">아직 댓글이 없습니다. 첫 댓글을 작성해보세요!</p>
            )}
            
            {isLoggedIn && (
              <form onSubmit={handleCommentSubmit}>
                <div className="mb-3">
                  <label htmlFor="comment-content" className="form-label">댓글 작성</label>
                  <textarea
                    className="form-control"
                    id="comment-content"
                    rows={3}
                    value={commentContent}
                    onChange={(e) => setCommentContent(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="comment-anonymous"
                    checked={isCommentAnonymous}
                    onChange={(e) => setIsCommentAnonymous(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="comment-anonymous">
                    익명으로 작성하기
                  </label>
                </div>
                <button type="submit" className="btn btn-primary">댓글 작성</button>
              </form>
            )}
            
            <hr className="my-4" />
            
            {/* 이전/다음 게시글 네비게이션 */}
            <div className="d-flex justify-content-between">
              {prevPost ? (
                <button 
                  className="btn btn-outline-secondary" 
                  onClick={() => {
                    onHide();
                    setTimeout(() => {
                      const postElement = document.getElementById(`post-${prevPost.id}`);
                      if (postElement) postElement.scrollIntoView({ behavior: 'smooth' });
                    }, 300);
                  }}
                >
                  <i className="bi bi-arrow-left"></i> 이전 글: {prevPost.title.substring(0, 15)}
                  {prevPost.title.length > 15 ? '...' : ''}
                </button>
              ) : (
                <div></div>
              )}
              
              {nextPost ? (
                <button 
                  className="btn btn-outline-secondary" 
                  onClick={() => {
                    onHide();
                    setTimeout(() => {
                      const postElement = document.getElementById(`post-${nextPost.id}`);
                      if (postElement) postElement.scrollIntoView({ behavior: 'smooth' });
                    }, 300);
                  }}
                >
                  다음 글: {nextPost.title.substring(0, 15)}
                  {nextPost.title.length > 15 ? '...' : ''} <i className="bi bi-arrow-right"></i>
                </button>
              ) : (
                <div></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 
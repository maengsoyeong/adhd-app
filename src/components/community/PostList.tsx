import React from 'react';
import { Post } from '../../pages/Community';

interface PostListProps {
  posts: Post[];
  loading: boolean;
  onPostClick: (post: Post) => void;
  categories: { id: string; name: string; color: string; }[];
  reactions: { id: string; emoji: string; label: string; }[];
}

export const PostList: React.FC<PostListProps> = ({ 
  posts, 
  loading, 
  onPostClick,
  categories,
  reactions
}) => {
  // 카테고리 이름과 색상 가져오기
  const getCategoryName = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.name : '기타';
  };

  const getCategoryColor = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    return category ? category.color : '#6c757d';
  };

  if (loading) {
    return (
      <div className="box-container text-center my-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">로딩 중...</span>
        </div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="box-container text-center my-5">
        <p>표시할 게시글이 없습니다.</p>
        <button className="btn btn-outline-primary">첫 게시글 작성하기</button>
      </div>
    );
  }

  return (
    <div className="box-container">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {posts.map((post) => (
          <div className="col" key={post.id}>
            <div className="card h-100 shadow-sm post-item" onClick={() => onPostClick(post)}>
              {post.imageUrl && (
                <img 
                  className="card-img-top post-image" 
                  src={post.imageUrl} 
                  alt={post.title}
                />
              )}
              <div className="card-body">
                <div className="d-flex justify-content-between align-items-start mb-2">
                  <span 
                    className="badge"
                    style={{ 
                      backgroundColor: getCategoryColor(post.category),
                      color: '#fff'
                    }}
                  >
                    {getCategoryName(post.category)}
                  </span>
                  <small className="text-muted">{post.date}</small>
                </div>
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text post-content">{post.content}</p>
                
                {post.tags && post.tags.length > 0 && (
                  <div className="mb-2">
                    {post.tags.map((tag, index) => (
                      <span key={index} className="badge bg-light text-dark me-1">#{tag}</span>
                    ))}
                  </div>
                )}
              </div>
              <div className="card-footer bg-white">
                <div className="d-flex justify-content-between align-items-center">
                  <small className="text-muted">
                    {post.isAnonymous ? '익명' : post.author} • 댓글 {post.comments.length}개
                  </small>
                  <div className="reaction-summary">
                    {Object.entries(post.reactions)
                      .filter(([_, count]) => count > 0)
                      .slice(0, 3)
                      .map(([type, count]) => {
                        const reaction = reactions.find(r => r.id === type);
                        return reaction ? (
                          <span key={type} className="me-2">
                            {reaction.emoji} {count}
                          </span>
                        ) : null;
                      })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 
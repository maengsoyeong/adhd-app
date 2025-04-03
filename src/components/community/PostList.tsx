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
  // 카테고리 이름 가져오기
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
      <div className="table-responsive">
        <table className="table table-hover">
          <thead className="table-light">
            <tr>
              <th className="col-no">No</th>
              <th className="col-category">카테고리</th>
              <th className="col-title">제목</th>
              <th className="col-author">글쓴이</th>
              <th className="col-date">작성시간</th>
              <th className="col-views">조회수</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post, index) => (
              <tr 
                key={post.id} 
                onClick={() => onPostClick(post)}
                className="post-row"
              >
                <td>{posts.length - index}</td>
                <td>
                  <span className={`badge category-${post.category}`}>
                    {getCategoryName(post.category)}
                  </span>
                </td>
                <td>
                  <div className="d-flex align-items-center">
                    <span className="post-title-text">{post.title}</span>
                    {post.comments.length > 0 && (
                      <span className="ms-2 text-primary">
                        [{post.comments.length}]
                      </span>
                    )}
                    {Object.values(post.reactions).some(count => count > 0) && (
                      <span className="ms-2 text-danger">
                        <i className="bi bi-heart-fill"></i>
                      </span>
                    )}
                  </div>
                </td>
                <td>{post.isAnonymous ? '익명' : post.author}</td>
                <td>{post.date}</td>
                <td>{Math.floor(Math.random() * 100) + 10}</td> {/* 임시 조회수 */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* 페이지네이션 */}
      <nav aria-label="Page navigation">
        <ul className="pagination justify-content-center mt-4">
          <li className="page-item disabled">
            <a className="page-link" href="#" tabIndex={-1} aria-disabled="true">이전</a>
          </li>
          <li className="page-item active"><a className="page-link" href="#">1</a></li>
          <li className="page-item"><a className="page-link" href="#">2</a></li>
          <li className="page-item"><a className="page-link" href="#">3</a></li>
          <li className="page-item">
            <a className="page-link" href="#">다음</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}; 
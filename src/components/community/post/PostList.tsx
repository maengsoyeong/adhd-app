import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PostItem from './PostItem';
import './styles/PostList.css';

interface PostListProps {
  posts: Array<{
    id: string;
    title: string;
    excerpt: string;
    author: string;
    date: string;
    views: number;
    comments: number;
    category: string;
  }>;
  title?: string;
}

const PostList: React.FC<PostListProps> = ({ posts, title = '커뮤니티 게시글' }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;

  // 페이지네이션 계산
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewPost = () => {
    navigate('/community/new');
  };

  return (
    <div className="post-list">
      <div className="post-list-header">
        <h2 className="post-list-title">{title}</h2>
        <div className="post-list-actions">
          <button className="btn btn-primary" onClick={handleNewPost}>
            글쓰기
          </button>
        </div>
      </div>

      {currentPosts.length > 0 ? (
        <>
          {currentPosts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}

          {/* 페이지네이션 */}
          {totalPages > 1 && (
            <div className="pagination">
              <button
                className={`pagination-arrow ${currentPage === 1 ? 'disabled' : ''}`}
                onClick={() => currentPage > 1 && handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
              >
                &lt;
              </button>
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  className={`pagination-item ${currentPage === page ? 'active' : ''}`}
                  onClick={() => handlePageChange(page)}
                >
                  {page}
                </button>
              ))}
              
              <button
                className={`pagination-arrow ${currentPage === totalPages ? 'disabled' : ''}`}
                onClick={() => currentPage < totalPages && handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
              >
                &gt;
              </button>
            </div>
          )}
        </>
      ) : (
        <div className="post-list-empty">
          <div className="post-list-empty-icon">📝</div>
          <p className="post-list-empty-text">아직 게시글이 없습니다.</p>
          <button className="btn btn-primary" onClick={handleNewPost}>
            첫 게시글 작성하기
          </button>
        </div>
      )}
    </div>
  );
};

export default PostList; 
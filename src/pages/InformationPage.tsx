import React, { useState, useEffect } from 'react';
import './Community.css'; // 기존 CSS 스타일 재사용

interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  imageUrl?: string;
  link: string;
}

const InformationPage: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    // 로그인 상태 확인 (임시로 localStorage 사용)
    const checkLoginStatus = () => {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(loggedIn);
    };
    
    checkLoginStatus();

    // 실제 API 호출
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/blog/naver-blog');
        if (!response.ok) {
          throw new Error('서버 응답 오류');
        }
        const data = await response.json();
        setBlogPosts(data);
        setLoading(false);
      } catch (err) {
        console.error('데이터 로딩 중 오류가 발생했습니다:', err);
        setError('데이터를 불러올 수 없습니다. 나중에 다시 시도해주세요.');
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  return (
    <div className="container py-5">
      <div className="box-container mb-4">
        <h1 className="box-title text-center">{isLoggedIn ? '마이페이지 - 정보 센터' : '정보 센터'}</h1>
      </div>
      
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      
      {loading ? (
        <div className="box-container text-center my-5">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">로딩 중...</span>
          </div>
        </div>
      ) : (
        <div className="box-container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {blogPosts.map((post) => (
              <div className="col" key={post.id}>
                <div className="card h-100 shadow-sm blog-post-card">
                  {post.imageUrl && (
                    <img 
                      className="card-img-top blog-post-image" 
                      src={post.imageUrl} 
                      alt={post.title}
                    />
                  )}
                  <div className="card-body">
                    <h5 className="card-title blog-post-title">{post.title}</h5>
                    <p className="card-text blog-post-excerpt">{post.content}</p>
                  </div>
                  <div className="card-footer d-flex justify-content-between align-items-center bg-white">
                    <small className="text-muted blog-post-date">{post.date}</small>
                    <a href={post.link} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-outline-primary blog-post-link">
                      자세히 보기
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {!loading && blogPosts.length === 0 && !error && (
        <div className="box-container text-center my-5">
          <p>표시할 블로그 포스트가 없습니다.</p>
        </div>
      )}
    </div>
  );
};

export default InformationPage; 
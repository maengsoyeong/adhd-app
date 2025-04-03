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

  useEffect(() => {
    // 임시 데이터로 API 호출 대체
    const fetchMockData = () => {
      try {
        setLoading(true);
        // 임시 데이터
        const mockPosts: BlogPost[] = [
          {
            id: '1',
            title: '정신 건강 관리의 중요성',
            content: '현대 사회에서 정신 건강 관리는 신체 건강만큼 중요합니다. 스트레스, 불안, 우울증 등 다양한 정신 건강 문제가 증가하고 있으며, 이에 대한 인식과 관리가 필요합니다.',
            date: '2023-10-15',
            imageUrl: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1000&auto=format&fit=crop',
            link: 'https://example.com/post1'
          },
          {
            id: '2',
            title: '스트레스 관리 방법 5가지',
            content: '일상에서 쉽게 실천할 수 있는 스트레스 관리 방법을 소개합니다. 명상, 규칙적인 운동, 충분한 수면, 건강한 식습관, 사회적 연결 유지가 중요합니다.',
            date: '2023-11-02',
            imageUrl: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1000&auto=format&fit=crop',
            link: 'https://example.com/post2'
          },
          {
            id: '3',
            title: '우울증의 징후와 대처 방법',
            content: '우울증은 단순한 슬픔이나 일시적인 기분 저하와는 다릅니다. 지속적인 의욕 저하, 수면 장애, 식욕 변화 등이 나타날 수 있으며, 전문가의 도움을 받는 것이 중요합니다.',
            date: '2023-11-20',
            imageUrl: 'https://images.unsplash.com/photo-1493836512294-502baa1986e2?q=80&w=1000&auto=format&fit=crop',
            link: 'https://example.com/post3'
          },
          {
            id: '4',
            title: '직장에서의 정신 건강 관리',
            content: '직장 스트레스는 정신 건강에 큰 영향을 미칩니다. 업무 시간 관리, 휴식 시간 확보, 동료와의 건강한 관계 유지 등이 중요합니다.',
            date: '2023-12-05',
            imageUrl: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=1000&auto=format&fit=crop',
            link: 'https://example.com/post4'
          },
          {
            id: '5',
            title: '명상의 효과와 실천 방법',
            content: '명상은 스트레스 감소, 집중력 향상, 정서적 안정 등 다양한 효과가 있습니다. 초보자도 쉽게 시작할 수 있는 명상 방법을 소개합니다.',
            date: '2023-12-18',
            imageUrl: 'https://images.unsplash.com/photo-1506126279646-a697353d3166?q=80&w=1000&auto=format&fit=crop',
            link: 'https://example.com/post5'
          },
          {
            id: '6',
            title: '수면과 정신 건강의 관계',
            content: '충분한 수면은 정신 건강 유지에 필수적입니다. 수면 부족은 집중력 저하, 기분 변화, 스트레스 증가 등을 유발할 수 있습니다.',
            date: '2024-01-10',
            imageUrl: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1000&auto=format&fit=crop',
            link: 'https://example.com/post6'
          }
        ];
        
        setBlogPosts(mockPosts);
        setLoading(false);
      } catch (err) {
        console.error('데이터 로딩 중 오류가 발생했습니다:', err);
        setError('데이터를 불러올 수 없습니다. 나중에 다시 시도해주세요.');
        setLoading(false);
      }
    };

    // 임시 데이터 로딩 (API 연동 대신)
    setTimeout(fetchMockData, 1000); // 로딩 효과를 위한 지연
  }, []);

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">정보 센터</h1>
      
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      
      {loading ? (
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">로딩 중...</span>
          </div>
        </div>
      ) : (
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
      )}
      
      {!loading && blogPosts.length === 0 && !error && (
        <div className="text-center my-5">
          <p>표시할 블로그 포스트가 없습니다.</p>
        </div>
      )}
    </div>
  );
};

export default InformationPage; 
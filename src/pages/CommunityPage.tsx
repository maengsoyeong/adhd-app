import React, { useState, useEffect } from 'react';
import CommunityLayout from '../components/community/common/CommunityLayout';
import CategoryFilter from '../components/community/filter/CategoryFilter';
import PostList from '../components/community/post/PostList';

interface Post {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  views: number;
  comments: number;
  category: string;
}

const CommunityPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  
  const categories = [
    { id: 'all', name: '전체', color: '#6b7280' },
    { id: '질문', name: '질문', color: '#ef4444' },
    { id: '정보', name: '정보', color: '#3b82f6' },
    { id: '경험', name: '경험', color: '#8b5cf6' },
    { id: '일상', name: '일상', color: '#10b981' },
    { id: '기타', name: '기타', color: '#6b7280' },
  ];

  useEffect(() => {
    // 임시 데이터 로딩
    const fetchMockData = () => {
      try {
        // 임시 데이터
        const mockPosts: Post[] = [
          // 데이터 추가
        ];
        
        setPosts(mockPosts);
        setFilteredPosts(mockPosts);
        setLoading(false);
      } catch (err) {
        console.error('데이터 로딩 중 오류가 발생했습니다:', err);
        setLoading(false);
      }
    };

    setTimeout(fetchMockData, 1000); // 로딩 효과를 위한 지연
  }, []);

  useEffect(() => {
    // 필터링 로직
    let result = [...posts];
    
    if (activeFilter !== 'all') {
      result = result.filter(post => post.category === activeFilter);
    }
    
    if (searchQuery) {
      result = result.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    setFilteredPosts(result);
  }, [posts, activeFilter, searchQuery]);

  const handleCategoryChange = (categoryId: string) => {
    setActiveFilter(categoryId);
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <CommunityLayout
      sidebar={
        <CategoryFilter 
          categories={categories}
          activeFilter={activeFilter}
          onFilterChange={handleCategoryChange}
          onSearch={handleSearch}
        />
      }
    >
      {loading ? (
        <div className="text-center py-10">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">로딩 중...</span>
          </div>
        </div>
      ) : (
        <PostList posts={filteredPosts} />
      )}
    </CommunityLayout>
  );
};

export default CommunityPage; 
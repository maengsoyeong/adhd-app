import React, { useState, useEffect } from 'react';
import PostList from '../components/community/post/PostList';
import PostDetail from '../components/community/post/PostDetail';
import PostForm from '../components/community/post/PostForm';
import CommunityLayout from '../components/community/common/CommunityLayout';
import CategoryFilter from '../components/community/filter/CategoryFilter';
import './Community.css';

// 카테고리 정의
export const CATEGORIES = [
  { id: 'all', name: '전체', color: '#6c757d' },
  { id: 'daily', name: '일상', color: '#0d6efd' },
  { id: 'worry', name: '고민', color: '#dc3545' },
  { id: 'question', name: '질문', color: '#198754' },
  { id: 'share', name: '정보공유', color: '#6f42c1' },
  { id: 'support', name: '응원', color: '#fd7e14' }
];

// 이모지 반응 정의
export const REACTIONS = [
  { id: 'like', emoji: '👍', label: '좋아요' },
  { id: 'support', emoji: '💪', label: '응원해요' },
  { id: 'hug', emoji: '🤗', label: '위로해요' },
  { id: 'relate', emoji: '🤝', label: '공감해요' },
  { id: 'thanks', emoji: '🙏', label: '감사해요' }
];

export interface Comment {
  id: string;
  author: string;
  isAnonymous: boolean;
  content: string;
  date: string;
  reactions: {
    [key: string]: number;
  };
}

export interface Post {
  id: string;
  title: string;
  content: string;
  author: string;
  isAnonymous: boolean;
  date: string;
  imageUrl?: string;
  category: string;
  tags?: string[];
  reactions: {
    [key: string]: number;
  };
  comments: Comment[];
}

export interface User {
  id: string;
  name: string;
  avatar: string;
  posts: number;
  likes: number;
  comments: number;
}

const Community: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
  
  // 게시글 작성 관련 상태
  const [showPostModal, setShowPostModal] = useState<boolean>(false);
  
  // 게시글 상세 보기 관련 상태
  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [showPostDetail, setShowPostDetail] = useState<boolean>(false);
  
  // 게시글 수정 관련 상태
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editPostId, setEditPostId] = useState<string | null>(null);

  const [searchTerm, setSearchTerm] = useState('');
  const [searchCategory, setSearchCategory] = useState('title'); // 'title', 'content', 'author'

  useEffect(() => {
    // 로그인 상태 확인
    const checkLoginStatus = () => {
      const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
      setIsLoggedIn(loggedIn);
      
      if (loggedIn) {
        setUser({
          id: '1',
          name: '사용자',
          avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop',
          posts: 5,
          likes: 42,
          comments: 18
        });
      }
    };
    
    checkLoginStatus();
    loadPosts();
  }, []);

  // 게시글 데이터 로드
  const loadPosts = () => {
    try {
      setLoading(true);
      // 임시 데이터 (실제로는 API 호출)
      const mockPosts: Post[] = [
        {
          id: '1',
          title: '불안감 극복하는 방법을 공유합니다',
          content: '최근에 불안감을 극복하는 데 도움이 된 방법들을 공유합니다. 명상, 호흡 운동, 그리고 규칙적인 운동이 큰 도움이 되었어요.',
          author: '마음지기',
          isAnonymous: false,
          date: '2023-12-15',
          imageUrl: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?q=80&w=1000&auto=format&fit=crop',
          category: 'share',
          tags: ['불안', '자기관리', '명상'],
          reactions: { like: 15, support: 8, hug: 5, relate: 12, thanks: 2 },
          comments: [
            {
              id: 'c1',
              author: '힐링맘',
              isAnonymous: false,
              content: '저도 명상을 시작했는데 정말 도움이 많이 되고 있어요. 감사합니다!',
              date: '2023-12-16',
              reactions: { like: 3, relate: 2 }
            }
          ]
        },
        {
          id: '2',
          title: 'ADHD와 함께 살아가는 법',
          content: 'ADHD를 가지고 살아가면서 배운 것들과 도움이 된 전략들을 공유합니다.',
          author: '집중력맨',
          isAnonymous: false,
          date: '2023-12-10',
          imageUrl: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1000&auto=format&fit=crop',
          category: 'daily',
          tags: ['ADHD', '집중력', '일상관리'],
          reactions: { like: 10, support: 5, relate: 8 },
          comments: []
        },
        {
          id: '3',
          title: '우울증에서 벗어난 나의 이야기',
          content: '2년간의 우울증을 극복한 경험을 나누고 싶어요.',
          author: '희망찾기',
          isAnonymous: false,
          date: '2023-12-05',
          imageUrl: 'https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=1000&auto=format&fit=crop',
          category: 'worry',
          tags: ['우울증', '회복', '희망'],
          reactions: { like: 20, hug: 15, support: 12 },
          comments: []
        }
      ];
      
      setPosts(mockPosts);
      setLoading(false);
    } catch (err) {
      console.error('데이터 로딩 중 오류가 발생했습니다:', err);
      setError('데이터를 불러올 수 없습니다. 나중에 다시 시도해주세요.');
      setLoading(false);
    }
  };

  // 로그인/로그아웃 처리
  const handleLogin = () => {
    localStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
    setUser({
      id: '1',
      name: '사용자',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1000&auto=format&fit=crop',
      posts: 5,
      likes: 42,
      comments: 18
    });
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
    setUser(null);
  };

  // 게시글 필터링
  const filterPosts = (category: string) => {
    setActiveFilter(category);
  };

  const getFilteredPosts = () => {
    if (activeFilter === 'all') return posts;
    return posts.filter(post => post.category === activeFilter);
  };

  // 게시글 작성 모달 열기
  const openPostModal = () => {
    setIsEditing(false);
    setEditPostId(null);
    setShowPostModal(true);
  };

  // 게시글 상세 보기
  const viewPostDetail = (post: Post) => {
    setSelectedPost(post);
    setShowPostDetail(true);
  };

  // 게시글 작성/수정 처리
  const handleSavePost = (newPost: Partial<Post>, isEdit: boolean) => {
    if (isEdit && editPostId) {
      // 게시글 수정
      setPosts(posts.map(post => 
        post.id === editPostId 
          ? { ...post, ...newPost, date: new Date().toISOString().split('T')[0] } 
          : post
      ));
    } else {
      // 새 게시글 작성
      const post: Post = {
        id: Date.now().toString(),
        title: newPost.title || '',
        content: newPost.content || '',
        author: user?.name || '익명',
        isAnonymous: newPost.isAnonymous || false,
        date: new Date().toISOString().split('T')[0],
        category: newPost.category || 'daily',
        tags: newPost.tags || [],
        reactions: {},
        comments: [],
        imageUrl: newPost.imageUrl
      };
      
      setPosts([post, ...posts]);
    }
    
    setShowPostModal(false);
  };

  // 게시글 수정 모달 열기
  const openEditModal = (postId: string) => {
    const postToEdit = posts.find(p => p.id === postId);
    if (postToEdit) {
      setIsEditing(true);
      setEditPostId(postId);
      setShowPostModal(true);
    }
  };

  // 게시글 삭제
  const handleDeletePost = (postId: string) => {
    setPosts(posts.filter(post => post.id !== postId));
    setShowPostDetail(false);
  };

  // 댓글 추가
  const handleAddComment = (postId: string, comment: Partial<Comment>) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        const newComment: Comment = {
          id: Date.now().toString(),
          author: user?.name || '익명',
          isAnonymous: comment.isAnonymous || false,
          content: comment.content || '',
          date: new Date().toISOString().split('T')[0],
          reactions: {}
        };
        
        return {
          ...post,
          comments: [...post.comments, newComment]
        };
      }
      return post;
    }));
  };

  // 반응 추가
  const handleAddReaction = (postId: string, reactionType: string) => {
    setPosts(posts.map(post => {
      if (post.id === postId) {
        const currentCount = post.reactions[reactionType] || 0;
        return {
          ...post,
          reactions: {
            ...post.reactions,
            [reactionType]: currentCount + 1
          }
        };
      }
      return post;
    }));
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // 검색 로직 구현
    // ...
  };

  return (
    <div className="container py-5">
      {/* 로그인 상태에 따라 다른 헤더 표시 */}
      {isLoggedIn && user ? (
        <div className="box-container mb-4">
          <div className="user-profile">
            <img src={user.avatar} alt={user.name} className="user-avatar" />
            <div className="user-info">
              <h2 className="user-name">{user.name}님의 마이페이지</h2>
              <div className="user-stats">
                <div className="stat-item">
                  <div className="stat-value">{user.posts}</div>
                  <div className="stat-label">작성글</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">{user.likes}</div>
                  <div className="stat-label">받은 좋아요</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">{user.comments}</div>
                  <div className="stat-label">받은 댓글</div>
                </div>
              </div>
            </div>
            <button className="btn btn-outline-secondary" onClick={handleLogout}>로그아웃</button>
          </div>
        </div>
      ) : (
        <div className="box-container mb-4">
          <div className="d-flex justify-content-between align-items-center">
            <h1 className="box-title mb-0">커뮤니티</h1>
            <button className="btn btn-primary" onClick={handleLogin}>로그인</button>
          </div>
        </div>
      )}
      
      {/* 글쓰기 버튼 */}
      <div className="box-container mb-4">
        <div className="d-flex justify-content-between align-items-center">
          <h2 className="box-title mb-0">게시글</h2>
          {isLoggedIn && (
            <button className="btn btn-primary" onClick={openPostModal}>글쓰기</button>
          )}
        </div>
      </div>
      
      {/* 카테고리 필터 */}
      <CategoryFilter 
        categories={CATEGORIES} 
        activeFilter={activeFilter} 
        onFilterChange={filterPosts} 
      />
      
      {/* 검색 폼 */}
      <div className="box-container mb-4">
        <form onSubmit={handleSearch} className="d-flex">
          <select 
            className="form-select me-2 search-category-select" 
            value={searchCategory}
            onChange={(e) => setSearchCategory(e.target.value)}
            aria-label="검색 카테고리 선택"
            title="검색 카테고리 선택"
          >
            <option value="title">제목</option>
            <option value="content">내용</option>
            <option value="author">작성자</option>
          </select>
          <input 
            type="text" 
            className="form-control me-2" 
            placeholder="검색어를 입력하세요" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="btn btn-outline-primary" type="submit">검색</button>
        </form>
      </div>
      
      {/* 에러 메시지 */}
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      
      {/* 게시글 목록 */}
      <PostList 
        posts={getFilteredPosts()} 
        loading={loading} 
        onPostClick={viewPostDetail} 
        categories={CATEGORIES}
        reactions={REACTIONS}
      />
      
      {/* 게시글 작성/수정 모달 */}
      {showPostModal && (
        <PostForm 
          show={showPostModal}
          onHide={() => setShowPostModal(false)}
          onSave={handleSavePost}
          isEditing={isEditing}
          post={isEditing ? posts.find(p => p.id === editPostId) || null : null}
          categories={CATEGORIES}
        />
      )}
      
      {/* 게시글 상세 보기 모달 */}
      {showPostDetail && selectedPost && (
        <PostDetail 
          show={showPostDetail}
          onHide={() => setShowPostDetail(false)}
          post={selectedPost}
          onEdit={() => openEditModal(selectedPost.id)}
          onDelete={() => handleDeletePost(selectedPost.id)}
          onAddComment={(comment) => handleAddComment(selectedPost.id, comment)}
          onAddReaction={(type) => handleAddReaction(selectedPost.id, type)}
          isLoggedIn={isLoggedIn}
          categories={CATEGORIES}
          reactions={REACTIONS}
          posts={posts}
        />
      )}
    </div>
  );
};

export default Community; 
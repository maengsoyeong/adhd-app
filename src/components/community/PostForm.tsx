import React, { useState, useEffect } from 'react';
import { Post } from '../../pages/Community';

interface PostFormProps {
  show: boolean;
  onHide: () => void;
  onSave: (post: Partial<Post>, isEdit: boolean) => void;
  isEditing: boolean;
  post: Post | null;
  categories: { id: string; name: string; color: string; }[];
}

export const PostForm: React.FC<PostFormProps> = ({
  show,
  onHide,
  onSave,
  isEditing,
  post,
  categories
}) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('daily');
  const [tags, setTags] = useState('');
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [imageUrl, setImageUrl] = useState('');

  // 수정 모드일 경우 기존 데이터 로드
  useEffect(() => {
    if (isEditing && post) {
      setTitle(post.title);
      setContent(post.content);
      setCategory(post.category);
      setTags(post.tags ? post.tags.join(', ') : '');
      setIsAnonymous(post.isAnonymous);
      setImageUrl(post.imageUrl || '');
    } else {
      // 새 글 작성 시 초기화
      setTitle('');
      setContent('');
      setCategory('daily');
      setTags('');
      setIsAnonymous(false);
      setImageUrl('');
    }
  }, [isEditing, post]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const tagArray = tags
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag !== '');
    
    onSave({
      title,
      content,
      category,
      tags: tagArray,
      isAnonymous,
      imageUrl: imageUrl || undefined
    }, isEditing);
  };

  if (!show) return null;

  return (
    <div className="modal-backdrop">
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{isEditing ? '게시글 수정' : '새 게시글 작성'}</h5>
            <button 
              type="button" 
              className="btn-close" 
              onClick={onHide}
              title="닫기"
              aria-label="닫기"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="post-title" className="form-label">제목</label>
                <input
                  type="text"
                  className="form-control"
                  id="post-title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="post-category" className="form-label">카테고리</label>
                <select
                  className="form-select"
                  id="post-category"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categories.filter(c => c.id !== 'all').map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="mb-3">
                <label htmlFor="post-content" className="form-label">내용</label>
                <textarea
                  className="form-control"
                  id="post-content"
                  rows={6}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                ></textarea>
              </div>
              
              <div className="mb-3">
                <label htmlFor="post-tags" className="form-label">태그 (쉼표로 구분)</label>
                <input
                  type="text"
                  className="form-control"
                  id="post-tags"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="예: 불안, 명상, 일상"
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="post-image" className="form-label">이미지 URL (선택사항)</label>
                <input
                  type="url"
                  className="form-control"
                  id="post-image"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="post-anonymous"
                  checked={isAnonymous}
                  onChange={(e) => setIsAnonymous(e.target.checked)}
                />
                <label className="form-check-label" htmlFor="post-anonymous">
                  익명으로 작성하기
                </label>
              </div>
              
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={onHide}>취소</button>
                <button type="submit" className="btn btn-primary">
                  {isEditing ? '수정하기' : '작성하기'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}; 
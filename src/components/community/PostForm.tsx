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
          <div className="modal-header bg-light">
            <h5 className="modal-title fw-bold">
              {isEditing ? '게시글 수정' : '새 게시글 작성'}
            </h5>
            <button 
              type="button" 
              className="btn-close" 
              onClick={onHide}
              title="닫기"
              aria-label="닫기"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit} className="post-form">
              <div className="mb-3 row">
                <label htmlFor="post-category" className="col-sm-2 col-form-label text-end fw-bold">카테고리</label>
                <div className="col-sm-10">
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
              </div>
              
              <div className="mb-3 row">
                <label htmlFor="post-title" className="col-sm-2 col-form-label text-end fw-bold">제목</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="post-title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="제목을 입력하세요"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-3 row">
                <label htmlFor="post-content" className="col-sm-2 col-form-label text-end fw-bold">내용</label>
                <div className="col-sm-10">
                  <textarea
                    className="form-control"
                    id="post-content"
                    rows={12}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="내용을 입력하세요"
                    required
                  ></textarea>
                </div>
              </div>
              
              <div className="mb-3 row">
                <label htmlFor="post-tags" className="col-sm-2 col-form-label text-end fw-bold">태그</label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="post-tags"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder="쉼표로 구분하여 입력 (예: 불안, 명상, 일상)"
                  />
                  <div className="form-text text-muted">
                    태그는 쉼표(,)로 구분하여 입력해주세요.
                  </div>
                </div>
              </div>
              
              <div className="mb-3 row">
                <label htmlFor="post-image" className="col-sm-2 col-form-label text-end fw-bold">이미지</label>
                <div className="col-sm-10">
                  <input
                    type="url"
                    className="form-control"
                    id="post-image"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="이미지 URL을 입력하세요 (선택사항)"
                  />
                </div>
              </div>
              
              <div className="mb-3 row">
                <div className="col-sm-2"></div>
                <div className="col-sm-10">
                  <div className="form-check">
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
                </div>
              </div>
              
              <div className="d-flex justify-content-center gap-2 mt-4">
                <button type="button" className="btn btn-secondary px-4" onClick={onHide}>취소</button>
                <button type="submit" className="btn btn-primary px-4">
                  {isEditing ? '수정하기' : '등록하기'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}; 
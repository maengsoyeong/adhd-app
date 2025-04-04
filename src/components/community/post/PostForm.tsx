import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/PostForm.css';

interface PostFormProps {
  initialData?: {
    id?: string;
    title: string;
    content: string;
    category: string;
  };
  onSubmit: (formData: { title: string; content: string; category: string }) => void;
}

const PostForm: React.FC<PostFormProps> = ({ initialData, onSubmit }) => {
  const navigate = useNavigate();
  const [title, setTitle] = useState(initialData?.title || '');
  const [content, setContent] = useState(initialData?.content || '');
  const [category, setCategory] = useState(initialData?.category || '질문');
  const [errors, setErrors] = useState<{ title?: string; content?: string }>({});

  const validateForm = () => {
    const newErrors: { title?: string; content?: string } = {};
    if (!title.trim()) {
      newErrors.title = '제목을 입력해주세요.';
    }
    if (!content.trim()) {
      newErrors.content = '내용을 입력해주세요.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onSubmit({ title, content, category });
    }
  };

  const handleCancel = () => {
    if (window.confirm('작성 중인 내용이 저장되지 않습니다. 정말 취소하시겠습니까?')) {
      navigate('/community');
    }
  };

  // 에디터 기능 (간단한 예시)
  const handleBold = () => {
    const textarea = document.getElementById('content') as HTMLTextAreaElement;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);
    const newContent = content.substring(0, start) + `<strong>${selectedText}</strong>` + content.substring(end);
    setContent(newContent);
    
    // 포커스 유지 및 선택 영역 조정
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + 8, start + 8 + selectedText.length);
    }, 0);
  };

  const handleItalic = () => {
    const textarea = document.getElementById('content') as HTMLTextAreaElement;
    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = content.substring(start, end);
    const newContent = content.substring(0, start) + `<em>${selectedText}</em>` + content.substring(end);
    setContent(newContent);
    
    setTimeout(() => {
      textarea.focus();
      textarea.setSelectionRange(start + 4, start + 4 + selectedText.length);
    }, 0);
  };

  return (
    <div className="post-form">
      <h2 className="post-form-title">{initialData ? '게시글 수정' : '새 게시글 작성'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="category" className="form-label">카테고리</label>
          <select
            id="category"
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="질문">질문</option>
            <option value="정보">정보</option>
            <option value="경험">경험</option>
            <option value="일상">일상</option>
            <option value="기타">기타</option>
          </select>
        </div>
        
        <div className="form-group">
          <label htmlFor="title" className="form-label">제목</label>
          <input
            type="text"
            id="title"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="제목을 입력하세요"
          />
          {errors.title && <div className="form-text text-red-500">{errors.title}</div>}
        </div>
        
        <div className="form-group">
          <label htmlFor="content" className="form-label">내용</label>
          <div className="editor-toolbar">
            <button type="button" className="editor-button" onClick={handleBold}>
              <strong>B</strong>
            </button>
            <button type="button" className="editor-button" onClick={handleItalic}>
              <em>I</em>
            </button>
            {/* 추가 에디터 버튼들 */}
          </div>
          <textarea
            id="content"
            className="form-textarea"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="내용을 입력하세요"
          />
          {errors.content && <div className="form-text text-red-500">{errors.content}</div>}
        </div>
        
        <div className="form-actions">
          <button type="button" className="btn btn-outline" onClick={handleCancel}>
            취소
          </button>
          <button type="submit" className="btn btn-primary">
            {initialData ? '수정하기' : '작성하기'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default PostForm; 
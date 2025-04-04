import React, { useState } from 'react';
import './styles/CategoryFilter.css';

interface Category {
  id: string;
  name: string;
  color: string;
}

interface CategoryFilterProps {
  categories: Category[];
  activeFilter: string;
  onFilterChange: (category: string) => void;
  onSearch: (query: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  activeFilter, 
  onFilterChange,
  onSearch
}) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryClick = (categoryId: string) => {
    onFilterChange(categoryId);
  };

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchQuery.trim());
  };

  return (
    <div className="box-container mb-4">
      <ul className="nav nav-pills">
        {categories.map(category => (
          <li className="nav-item" key={category.id}>
            <button 
              className={`nav-link ${activeFilter === category.id ? 'active' : ''}`}
              style={{
                border: `2px solid ${category.color}`,
                backgroundColor: 'transparent',
                color: category.color
              }}
              onClick={() => handleCategoryClick(category.id)}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>

      <form className="search-form" onSubmit={handleSearchSubmit}>
        <div className="search-input-group">
          <input
            type="text"
            className="search-input"
            placeholder="검색어를 입력하세요"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit" className="search-button">
            검색
          </button>
        </div>
      </form>
    </div>
  );
};

export default CategoryFilter; 
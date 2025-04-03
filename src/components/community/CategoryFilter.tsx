import React from 'react';

interface Category {
  id: string;
  name: string;
  color: string;
}

interface CategoryFilterProps {
  categories: Category[];
  activeFilter: string;
  onFilterChange: (category: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  activeFilter, 
  onFilterChange 
}) => {
  return (
    <div className="box-container mb-4">
      <ul className="nav nav-pills">
        {categories.map(category => (
          <li className="nav-item" key={category.id}>
            <button 
              className={`nav-link ${activeFilter === category.id ? 'active' : ''}`} 
              onClick={() => onFilterChange(category.id)}
              style={activeFilter === category.id ? { backgroundColor: category.color } : {}}
            >
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}; 
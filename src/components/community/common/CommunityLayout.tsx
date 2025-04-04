import React, { ReactNode } from 'react';
import './styles/CommunityLayout.css';

interface CommunityLayoutProps {
  children: ReactNode;
  sidebar?: ReactNode;
  title?: string;
}

const CommunityLayout: React.FC<CommunityLayoutProps> = ({ 
  children, 
  sidebar, 
  title = '커뮤니티' 
}) => {
  return (
    <div>
      <div className="community-header">
        <div className="community-container">
          <h1 className="community-title">{title}</h1>
        </div>
      </div>
      
      <div className="community-content">
        <div className="community-container">
          <div className="community-grid">
            <main className="community-main">
              {children}
            </main>
            
            {sidebar && (
              <aside className="community-sidebar">
                {sidebar}
              </aside>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunityLayout; 
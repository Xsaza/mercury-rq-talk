import React from 'react';
import { useNavigate } from 'react-router-dom';

export const NavigationBar: React.FC = () => {
  const navigate = useNavigate();

  const navigateTo = (path: string) => {
    navigate(path);
  };

  return (
    <div className="nav-bar">
      <div className="nav-link" onClick={() => navigateTo('/welcome')}>
        Welcome
      </div>
      <div className="nav-link" onClick={() => navigateTo('/posts')}>
        Posts
      </div>
      <div className="nav-link" onClick={() => navigateTo('/admin')}>
        Admin
      </div>
    </div>
  );
};
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetPosts } from '@/hooks/useGetPosts';

export const PostsPage: React.FC = () => {
  const navigate = useNavigate();
  const postsQuery = useGetPosts();

  const navigateTo = (id: number) => {
    navigate(`/posts/${id}`);
  };

  return (
    <div className="page">
      {postsQuery.isLoading ? (
        <div className="page-loading">Loading...</div>
      ) : (
          <div className="posts-list">
            {postsQuery.data?.map(post => (
              <div className="post-item" key={post.id} onClick={() => navigateTo(post.id)}>
                <div className="post-item_title">{post.title}</div>
                <div className="post-item_content">{post.content}</div>
              </div>
            ))}
          </div>
      )}
    </div>
  );
};

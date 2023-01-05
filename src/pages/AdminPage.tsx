import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useGetPosts } from '@/hooks/useGetPosts';
import { PostForm } from '@/components/PostForm';
import { useAddPost } from '@/hooks/useAddPost';
import { useDeletePost } from '@/hooks/useDeletePost';

export const AdminPage: React.FC = () => {
  const navigate = useNavigate();

  const postsQuery = useGetPosts();
  const addPostMutation = useAddPost();
  const deletePostMutation = useDeletePost();

  const navigateTo = (id: number) => {
    navigate(`/admin/${id}`);
  };

  const addPost = (title: string, content: string) => {
    addPostMutation.mutate({ title, content });
  };

  const deletePost = (id: number) => {
    deletePostMutation.mutate(id);
  };

  return (
    <div className="page">
      {postsQuery.isLoading ? (
        <div className="page-loading">Loading...</div>
      ) : (
        <>
          <div className="admin-posts-list">
            {postsQuery.data?.map(post => (
              <div key={post.id}>
                <div className="admin-posts-item" onClick={() => navigateTo(post.id)}>
                  {post.title}
                </div>
                <button onClick={() => deletePost(post.id)}>X</button>
              </div>
            ))}
          </div>
          <PostForm
            isEdit={false}
            isLoading={addPostMutation.isLoading}
            onSubmit={addPost}
          />
        </>
      )}
    </div>
  );
};

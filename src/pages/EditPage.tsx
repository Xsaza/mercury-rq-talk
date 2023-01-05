import React from 'react';
import { useParams } from 'react-router-dom';

import { useGetPost } from '@/hooks/useGetPost';
import { PostForm } from '@/components/PostForm';
import { useEditPost } from '@/hooks/useEditPost';

export const EditPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const postQuery = useGetPost(Number(id!));

  const editPostMutation = useEditPost(Number(id!));

  const editPost = (title: string, content: string) => {
    editPostMutation.mutate({ title, content });
  };

  return (
    <div className="page">
      {postQuery.isLoading ? (
        <div className="page-loading">Loading...</div>
      ) : (
        <>
          <div className="edit-page__post-details">
            <div className="edit-page__post-details_title">{postQuery.data?.title}</div>
            <div className="edit-page__post-details_content">{postQuery.data?.content}</div>
          </div>
          <PostForm
            isEdit
            title={postQuery.data?.title}
            content={postQuery.data?.content}
            isLoading={editPostMutation.isLoading}
            onSubmit={editPost}
          />
        </>
      )}
    </div>
  );
};

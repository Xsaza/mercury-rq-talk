import React from 'react';

import { useGetPost } from '@/hooks/useGetPost';
import { useParams } from 'react-router-dom';

export const PostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const postQuery = useGetPost(Number(id!));

  return (
    <div className="page">
      {postQuery.isLoading ? (
        <div className="page-loading">Loading...</div>
      ) : (
        <div className="post">
          <div className="post_title">{postQuery.data?.title}</div>
          <div className="post_content">{postQuery.data?.content}</div>
        </div>
      )}
    </div>
  );
};

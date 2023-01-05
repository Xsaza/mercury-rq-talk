import { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { Post } from '@/models/posts';

export const useGetPost = (id: number) => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);
  // const [error, setError] = useState<unknown>();
  // const [data, setData] = useState<Post>();

  // const fetchPosts = async () => {
  //   try {
  //     setIsLoading(true);
  //     setIsError(false);
  //     setError(undefined);
  //     console.log(id);

  //     const data = await fetch(`http://localhost:3000/posts/${id}`, { method: 'GET' }).then(data => data.json());
  //     console.log(data);
  //     setData(data);
  //   } catch (err) {
  //     setIsError(true);
  //     setError(err);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   void fetchPosts();
  // }, []);

  // return {
  //   isLoading,
  //   isError,
  //   error,
  //   data,
  // }

  const client = useQueryClient();

  return useQuery<Post>(
    ['posts', id],
    async () => fetch(`http://localhost:3000/posts/${id}`, { method: 'GET' }).then(data => data.json()),
    {
      initialData: () => client.getQueryData<Post[]>(['posts'])?.find(post => post.id === id),
    }
  );
};

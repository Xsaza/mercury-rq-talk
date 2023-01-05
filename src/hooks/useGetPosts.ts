import { useEffect, useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import { Post } from '@/models/posts';

export const useGetPosts = () => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);
  // const [error, setError] = useState<unknown>();
  // const [data, setData] = useState<Post[]>();

  // const fetchPosts = async () => {
  //   try {
  //     setIsLoading(true);
  //     setIsError(false);
  //     setError(undefined);

  //     const data = await fetch('http://localhost:3000/posts', { method: 'GET' }).then(data => data.json());
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

  return useQuery<Post[]>(
    ['posts'],
    async () => fetch('http://localhost:3000/posts', { method: 'GET' }).then(data => data.json()),
  );
};

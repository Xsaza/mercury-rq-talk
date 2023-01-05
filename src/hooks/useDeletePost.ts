import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Post } from '@/models/posts';

export const useDeletePost = () => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);
  // const [error, setError] = useState<unknown>();

  // const mutate = async (id: number) => {
  //   try {
  //     setIsLoading(true);
  //     setIsError(false);
  //     setError(undefined);

  //     await fetch(`http://localhost:3000/posts/${id}`, {
  //       method: 'DELETE',
  //       headers: {
  //         'content-type': 'application/json',
  //       },
  //     }).then(data => data.json());

  //   } catch (err) {
  //     setIsError(true);
  //     setError(err);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // return {
  //   isLoading,
  //   isError,
  //   error,
  //   mutate,
  // }

  const client = useQueryClient();

  return useMutation(
    async (id: number) => fetch(`http://localhost:3000/posts/${id}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
      },
    }).then(data => data.json()),
    {
      onSettled: () => {
        void client.invalidateQueries(['posts']);
      },
      // onSuccess: (_, id: number) => {
      //   client.setQueryData<Post[]>(['posts'], old => old?.filter(post => post.id !== id));
      // },
      onMutate: (id: number) => {
        client.setQueryData<Post[]>(['posts'], old => old?.filter(post => post.id !== id));
      },
    }
  );
};

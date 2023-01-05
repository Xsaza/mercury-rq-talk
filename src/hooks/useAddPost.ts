import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';

export const useAddPost = () => {
  // const [isLoading, setIsLoading] = useState(false);
  // const [isError, setIsError] = useState(false);
  // const [error, setError] = useState<unknown>();

  // const mutate = async ({ title, content }: { title: string, content: string }) => {
  //   try {
  //     setIsLoading(true);
  //     setIsError(false);
  //     setError(undefined);

  //     await fetch('http://localhost:3000/posts', {
  //       method: 'POST',
  //       headers: {
  //         'content-type': 'application/json',
  //       },
  //       body: JSON.stringify({
  //         title,
  //         content,
  //       }),
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
    async ({ title, content }: { title: string, content: string }) => fetch('http://localhost:3000/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        title,
        content,
      }),
    }).then(data => data.json()),
    {
      onSettled: () => {
        void client.invalidateQueries(['posts']);
      },
    }
  );
};

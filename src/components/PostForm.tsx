import React, { FormEvent, useState } from 'react';

interface PostFormProps {
  title?: string;
  content?: string;
  isEdit: boolean;
  isLoading: boolean;
  onSubmit: (title: string, content: string) => void;
}

export const PostForm: React.FC<PostFormProps> = ({
  title: initTitle,
  content: initContent,
  isEdit,
  isLoading,
  onSubmit,
}) => {
  const [title, setTitle] = useState(initTitle ?? '');
  const [content, setContent] = useState(initContent ?? '');

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(title, content);
  };

  return (
    <form onSubmit={submit}>
      <div className="post-form">
        <div>
          <label className="post-form_label">Title</label>
          <input className="post-form_input" type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div>
          <label className="post-form_label">Content</label>
          <textarea className="post-form_input" cols={30} rows={10} value={content} onChange={e => setContent(e.target.value)} />
        </div>
        <button
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? 'loading...' : isEdit ? 'Update post' : 'Create post'}
        </button>
      </div>
    </form>
  );
};

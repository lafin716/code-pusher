'use client';

import React, { useState } from 'react';

// React.FC stands for "React Function Component"
// It's a type that represents a functional component in React with TypeScript
// It's a generic type that can accept props as a type parameter
const CreatePost: React.FC = () => {
  const [content, setContent] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement post creation logic
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit} className="rounded-lg bg-white p-4 shadow">
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
        className="w-full resize-none rounded-lg border p-2"
        rows={3}
      />
      <button
        type="submit"
        className="mt-2 rounded-lg bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
      >
        Post
      </button>
    </form>
  );
};

export default CreatePost;

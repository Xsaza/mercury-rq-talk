import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { NavigationBar } from '@/components/NavigationBar';
import { WelcomePage } from '@/pages/WelcomePage';
import { PostsPage } from '@/pages/PostsPage';
import { PostPage } from '@/pages/PostPage';
import { AdminPage } from '@/pages/AdminPage';
import { EditPage } from '@/pages/EditPage';

import './styles/main.scss';

export const App = () => {

  return (
    <div className="main-wrapper">
      <NavigationBar />
      <ReactQueryDevtools />
      <Routes>
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/posts" element={<PostsPage />} />
        <Route path="/posts/:id" element={<PostPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin/:id" element={<EditPage />} />
      </Routes>
  </div>
  );
}

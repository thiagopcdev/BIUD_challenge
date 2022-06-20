import React from 'react';
import {
  BrowserRouter, Route, Routes, Navigate,
} from 'react-router-dom';
import {
  Categories,
  RegisterCategory,
  ChangeCategory,
  Articles,
  RegisterArticle,
  ChangeArticle,
  Article,
  Main,
  NotFound,
} from '../pages';

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Navigate to="/main" />} />
        <Route exact path="/main" element={<Main />} />
        <Route exact path="/categories/:id/modify" element={<ChangeCategory />} />
        <Route exact path="/categories/new" element={<RegisterCategory />} />
        <Route exact path="/categories" element={<Categories />} />
        <Route exact path="/articles/:id/modify" element={<ChangeArticle />} />
        <Route exact path="/articles/:id" element={<Article />} />
        <Route exact path="/articles/new" element={<RegisterArticle />} />
        <Route exact path="/articles" element={<Articles />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

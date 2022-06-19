import React from 'react';
import {
  SubHeader, ListItems, Header, Footer,
} from '../../components';
import './Articles.css';

function Articles() {
  const ArticleList = ['Artigo 1', 'Artigo 2', 'Artigo 3'];
  return (
    <>
      <Header />
      <div className="articles-container">
        <SubHeader name="Artigos" />
        <ListItems list={ArticleList} />
      </div>
      <Footer />
    </>
  );
}

export default Articles;

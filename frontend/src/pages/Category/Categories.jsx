import React from 'react';
import {
  SubHeader, ListItems, Header, Footer,
} from '../../components';
import './Categories.css';

function Categories() {
  const CategoriesList = ['Categoria 1', 'Categoria 2', 'Categoria 3'];
  return (
    <>
      <Header />
      <div className="categories-container">
        <SubHeader name="Categorias" />
        <ListItems list={CategoriesList} />
      </div>
      <Footer />
    </>
  );
}

export default Categories;

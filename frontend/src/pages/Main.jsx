import React from 'react';
import { Header, Footer, Button } from '../components';
import './Main.css';

function Main() {
  return (
    <>
      <Header />
      <div className="main-container">
        <Button
          name="Categorias"
          link="/categories"
          className="btn-category"
        />
        <Button
          name="Artigos"
          link="/articles"
          className="btn-articles"
        />
      </div>
      <Footer />
    </>
  );
}

export default Main;

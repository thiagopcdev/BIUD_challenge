import React from 'react';
import { useParams } from 'react-router-dom';
import { Button, Footer, Header } from '../../components';
import './Article.css';

function Article() {
  const { id } = useParams();
  return (
    <>
      <Header />
      <div className="article-container">
        <p className="title-page">{`Artigo exemplo ${id}`}</p>
        <main className="description-field">
          <p>
            Os artigos também têm a função de ajudar a identificar o gênero
            (feminino e masculino) e o número (singular e plural) dentro de uma frase.
            Exemplos: o dó; a alface; a cal; o ônibus; os ônibus; umas mulheres; a mulher.
          </p>
          <section className="saveback-section">
            <Button
              name="Voltar"
              className="btn-back"
              link="./.."
              title="Voltar"
            />
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Article;

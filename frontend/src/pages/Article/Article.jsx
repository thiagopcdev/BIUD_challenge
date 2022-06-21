import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Footer, Header } from '../../components';
import api from '../../services/Api';
import loadingGif from '/biud.gif';
import './Article.css';

function Article() {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getArticle = async () => {
      setLoading(true);
      await api.get(`/articles/${id}`)
        .then(({ data }) => {
          setTitle(data.title);
          setDescription(data.description);
        })
        .then(setLoading(false))
        .catch((err) => {
          console.error(`ops! something is wrong: ${err}`);
        });
    };
    getArticle();
  }, []);
  return (
    <>
      <Header />
      <div className="article-container">
        <p className="title-page">{title}</p>
        <main className="description-field">
          {loading
            ? <img src={loadingGif} alt="Loading..." width="150px" />
            : (
              <>
                <p>{description}</p>
                <section className="saveback-section">
                  <Button
                    name="Voltar"
                    className="btn-back"
                    link="./.."
                    title="Voltar"
                  />
                </section>
              </>
            )}
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Article;

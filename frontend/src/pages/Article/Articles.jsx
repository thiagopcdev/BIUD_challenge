import React, { useEffect, useState } from 'react';
import {
  SubHeader, ListItems, Header, Footer,
} from '../../components';
import api from '../../services/Api';
import loadingGif from '/biud.gif';
import './Articles.css';
import {
  alertError, alertOk, alertSucess, alertSure,
} from '../../helpers/SweetAlert';

function Articles() {
  const [articleList, setArticleList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      await api.get('/articles')
        .then(({ data }) => setArticleList(data))
        .then(setTimeout(() => {
          setLoading(false);
        }, 500))
        .catch((err) => {
          console.error(`ops! something is wrong: ${err}`);
        });
    };
    getCategories();
  }, []);

  const handleDelete = (id) => {
    const objArticle = articleList.find((article) => article.id === id);
    alertSure(
      'artigo',
      objArticle.title,
      'excluído',
      async (willDelete) => {
        if (willDelete) {
          try {
            await api.delete(`/articles/${id}`);
            alertSucess('artigo', 'excluído');
            const filteredArray = articleList.filter((item) => item.id !== id);
            setArticleList(filteredArray);
          } catch (err) {
            console.error(`ops, something is wrong with the delete API ${err}`);
            alertError('artigo', objArticle.title, 'excluir');
          }
        } else {
          alertOk('artigo');
        }
      },
    );
  };
  return (
    <>
      <Header />
      <div className="articles-container">
        <SubHeader name="Artigos" />
        {loading
          ? <img src={loadingGif} alt="Loading..." width="150px" />
          : (
            <ListItems type="article" list={articleList} onDeleteItem={handleDelete} />
          )}
      </div>
      <Footer />
    </>
  );
}

export default Articles;

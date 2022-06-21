import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button, Footer, Header, Input, Select, Textarea,
} from '../../components';
import { alertError, alertSucess } from '../../helpers/SweetAlert';
import api from '../../services/Api';
import loadingGif from '/biud.gif';
import './RegisterChangeArticle.css';

function RegisterArticle() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [categoryId, setCategoryId] = useState(null);
  const [categoriesList, setCategoriesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      await api.get('/categories')
        .then(({ data }) => setCategoriesList(data))
        .then(setTimeout(() => {
          setLoading(false);
        }, 250))
        .catch((err) => {
          console.error(`ops! something is wrong: ${err}`);
        });
    };
    getCategories();
  }, []);

  const setNewArticle = async (event) => {
    event.preventDefault();
    try {
      await api.post('/articles', { title, description, categoryId });
      alertSucess('artigo', 'criado');
      navigate('/articles', { replace: true });
    } catch (err) {
      console.error(`ops, something is wrong with the create API ${err}`);
      alertError('artigo', title, 'criar');
    }
  };

  return (
    <form onSubmit={(event) => setNewArticle(event)}>
      <Header />
      <div className="register-change-article-container">
        <p className="rc-title-page">Cadastrar novo artigo</p>
        <main className="inputs-container">
          {loading
            ? <img src={loadingGif} alt="Loading..." width="150px" />
            : (
              <>
                <Input
                  label="Título"
                  name="title"
                  id="title"
                  type="text"
                  value={title}
                  onChange={setTitle}
                  className="title-input"
                />
                <Textarea
                  label="Descrição"
                  name="descricao"
                  id="descricao"
                  value={description}
                  onChange={setDescription}
                  className="description-input"
                />
                <Select
                  label="Categoria"
                  name="category"
                  id="category"
                  value={categoryId}
                  onChange={setCategoryId}
                  defaultOption={categoriesList[0].description}
                  defaultValue={categoriesList[0].id}
                  options={categoriesList.slice(1, categoriesList.length)}

                />
                <section className="saveback-section">
                  <Button
                    name="Voltar"
                    className="btn-back"
                    link="./.."
                    title="Voltar"
                  />
                  <Input
                    type="submit"
                    name="Salvar"
                    className="btn-save"
                    title="Salvar"
                    value="Salvar"
                  />
                </section>
              </>
            )}

        </main>
      </div>
      <Footer />
    </form>
  );
}

export default RegisterArticle;

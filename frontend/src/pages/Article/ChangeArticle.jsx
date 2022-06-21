import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  Button, Footer, Header, Input, Select, Textarea,
} from '../../components';
import { alertError, alertSucess } from '../../helpers/SweetAlert';
import api from '../../services/Api';
import loadingGif from '/biud.gif';
import './RegisterChangeArticle.css';

function ChangeArticle() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [categoriesList, setCategoriesList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      await api.get('/categories')
        .then(({ data }) => setCategoriesList(data))
        .catch((err) => {
          console.error(`ops! something is wrong: ${err}`);
        });
    };
    const getArticle = async () => {
      setLoading(true);
      await api.get(`/articles/${id}`)
        .then(({ data }) => {
          setTitle(data.title);
          setDescription(data.description);
          setCategoryId(data.categoryId);
          setCategory(data.categories.description);
        })
        .then(setLoading(false))
        .catch((err) => {
          console.error(`ops! something is wrong: ${err}`);
        });
    };
    getCategories();
    getArticle();
  }, []);

  const modifyArticle = async (event) => {
    event.preventDefault();
    try {
      await api.put(`/articles/${id}`, { title, description, categoryId });
      alertSucess('artigo', 'editado');
      navigate('/articles', { replace: true });
    } catch (err) {
      console.error(`ops, something is wrong with the create API ${err}`);
      alertError('artigo', title, 'editar');
    }
  };

  return (
    <form onSubmit={(event) => modifyArticle(event)}>
      <Header />
      <div className="register-change-article-container">
        <p className="rc-title-page">Editar artigo</p>
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
                  required="true"
                />
                <Textarea
                  label="Descrição"
                  name="descricao"
                  id="descricao"
                  value={description}
                  onChange={setDescription}
                  className="description-input"
                  required="true"
                />
                <Select
                  label="Categoria"
                  name="category"
                  id="category"
                  onChange={setCategoryId}
                  // defaultValue={categoryId}
                  defaultOption={category}
                  value={categoryId}
                  options={categoriesList.filter((cat) => cat.description !== category)}
                  required="true"
                />
                <section className="saveback-section">
                  <Button
                    name="Voltar"
                    className="btn-back"
                    link="/articles"
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

export default ChangeArticle;

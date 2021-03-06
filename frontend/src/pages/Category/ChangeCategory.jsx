import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/Api';
import {
  Button, Footer, Header, Input,
} from '../../components';
import './RegisterChangeCategory.css';
import { alertError, alertSucess } from '../../helpers/SweetAlert';

function ChangeCategory() {
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getCategory = async () => {
      setLoading(true);
      await api.get(`/categories/${id}`)
        .then(({ data }) => setDescription(data.description))
        .then(setLoading(false))
        .catch((err) => {
          console.error(`ops! something is wrong: ${err}`);
        });
    };
    getCategory();
  }, []);

  const modifyCategory = async (event) => {
    event.preventDefault();
    try {
      await api.put(`/categories/${id}`, { description });
      alertSucess('categoria', 'alterada');
      navigate('/categories', { replace: true });
    } catch (err) {
      console.error(`ops, something is wrong with the create API ${err}`);
      alertError('categoria', description, 'alterar');
    }
  };

  return (
    <form onSubmit={(event) => modifyCategory(event)}>
      <Header />
      <div className="register-change-category-container">
        <p className="title-page">Editar categoria</p>
        <main className="description-input">
          <Input
            label="Descrição"
            name="descricao"
            id="descricao"
            type="text"
            value={loading ? '...' : description}
            onChange={setDescription}
            minLength="3"
          />
          <section className="saveback-section">
            <Button
              name="Voltar"
              className="btn-back"
              link="/categories"
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
        </main>
      </div>
      <Footer />
    </form>
  );
}

export default ChangeCategory;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { alertSucess, alertError } from '../../helpers/SweetAlert';
import {
  Button, Footer, Header, Input,
} from '../../components';
import './RegisterChangeCategory.css';
import api from '../../services/Api';

function RegisterCategory() {
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const setNewCategory = async (event) => {
    event.preventDefault();
    try {
      await api.post('/categories', { description });
      alertSucess('categoria', 'criada');
      navigate('/categories', { replace: true });
    } catch (err) {
      console.error(`ops, something is wrong with the create API ${err}`);
      alertError('categoria', description, 'criar');
    }
  };
  return (
    <form onSubmit={(event) => setNewCategory(event)}>
      <Header />
      <div className="register-change-category-container">
        <p className="title-page">Cadastrar nova categoria</p>
        <main className="description-input">
          <Input
            label="Descrição"
            name="descricao"
            id="descricao"
            type="text"
            value={description}
            onChange={setDescription}
            minLength="5"
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
        </main>
      </div>
      <Footer />
    </form>
  );
}

export default RegisterCategory;

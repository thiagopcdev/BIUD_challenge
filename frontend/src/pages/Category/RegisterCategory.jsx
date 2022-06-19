import React, { useState } from 'react';
import {
  Button, Footer, Header, Input,
} from '../../components';
import './RegisterCategory.css';

function RegisterCategory() {
  const [description, setDescription] = useState('');

  return (
    <>
      <Header />
      <div className="register-category-container">
        <p className="title-page">Cadastrar nova categoria</p>
        <main className="description-input">
          <Input
            label="Descrição"
            name="descricao"
            id="descricao"
            type="text"
            value={description}
            onChange={setDescription}
          />
          <section className="saveback-section">
            <Button
              name="Voltar"
              className="btn-back"
              link="./.."
              title="Voltar"
            />
            <Button
              name="Salvar"
              className="btn-save"
              title="Salvar"
            />
          </section>
        </main>
      </div>
      <Footer />
    </>
  );
}

export default RegisterCategory;

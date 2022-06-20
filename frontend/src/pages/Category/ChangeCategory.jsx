import React, { useState } from 'react';
import {
  Button, Footer, Header, Input,
} from '../../components';
import './RegisterChangeCategory.css';

function ChangeCategory() {
  const [description, setDescription] = useState('');
  return (
    <>
      <Header />
      <div className="register-change-category-container">
        <p className="title-page">Editar categoria</p>
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
              link="/categories"
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

export default ChangeCategory;

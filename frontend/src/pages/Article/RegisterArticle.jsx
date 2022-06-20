import React, { useState } from 'react';
import {
  Button, Footer, Header, Input, Select, Textarea,
} from '../../components';
import './RegisterChangeArticle.css';

function RegisterArticle() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  return (
    <>
      <Header />
      <div className="register-change-article-container">
        <p className="rc-title-page">Cadastrar novo artigo</p>
        <main className="inputs-container">
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
            value={category}
            onChange={setCategory}
            defaultOption="categoria 1"
            defaultValue="category1"
            options={['categoria 2', 'categoria 3']}
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

export default RegisterArticle;

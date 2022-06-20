import React, { useState } from 'react';
import swal from 'sweetalert';
import {
  SubHeader, ListItems, Header, Footer,
} from '../../components';
import './Articles.css';

function Articles() {
  const list = ['Artigo 1', 'Artigo 2', 'Artigo 3'];
  const [articleList, setArticleList] = useState(list);

  const handleDelete = (id) => {
    swal({
      title: 'Tem certeza?',
      text: `Uma vez excluído, você não poderá recuperar o artigo ${articleList[id - 1]}!`,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal('Prontinho! O Artigo foi excluído com sucesso!', {
            icon: 'success',
          });
          const filteredArray = articleList.filter((_item, index) => index + 1 !== id);
          setArticleList(filteredArray);
        } else {
          swal('Tudo bem, o artigo está seguro!');
        }
      });
  };
  return (
    <>
      <Header />
      <div className="articles-container">
        <SubHeader name="Artigos" />
        <ListItems type="article" list={articleList} onDeleteItem={handleDelete} />
      </div>
      <Footer />
    </>
  );
}

export default Articles;

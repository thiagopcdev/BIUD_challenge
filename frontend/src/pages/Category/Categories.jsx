import React, { useState } from 'react';
import swal from 'sweetalert';
import {
  SubHeader, ListItems, Header, Footer,
} from '../../components';
import './Categories.css';

function Categories() {
  const list = ['Categoria 1', 'Categoria 2', 'Categoria 3'];
  const [categoriesList, setCategoriesList] = useState(list);

  const handleDelete = (id) => {
    swal({
      title: 'Tem certeza?',
      text: `Uma vez excluída, você não poderá recuperar a categoria ${categoriesList[id - 1]} !`,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          swal('Prontinho! A categoria foi excluída com sucesso!', {
            icon: 'success',
          });
          const filteredArray = categoriesList.filter((_item, index) => index + 1 !== id);
          setCategoriesList(filteredArray);
        } else {
          swal('Tudo bem, a categoria está segura!');
        }
      });
  };

  return (
    <>
      <Header />
      <div className="categories-container">
        <SubHeader name="Categorias" />
        <ListItems name="categories" list={categoriesList} onDeleteItem={handleDelete} />
      </div>
      <Footer />
    </>
  );
}

export default Categories;

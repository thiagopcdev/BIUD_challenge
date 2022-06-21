import React, { useState, useEffect } from 'react';
import {
  SubHeader, ListItems, Header, Footer,
} from '../../components';
import './Categories.css';
import api from '../../services/Api';
import loadingGif from '/biud.gif';
import {
  alertError, alertOk, alertSucess, alertSure,
} from '../../helpers/SweetAlert';

function Categories() {
  const [categoriesList, setCategoriesList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getCategories = async () => {
      setLoading(true);
      await api.get('/categories')
        .then(({ data }) => setCategoriesList(data))
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
    const objCategory = categoriesList.find((category) => category.id === id);
    alertSure(
      'categoria',
      objCategory.description,
      'excluída',
      async (willDelete) => {
        if (willDelete) {
          try {
            await api.delete(`/categories/${id}`);
            alertSucess('categoria', 'excluída');
            const filteredArray = categoriesList.filter((item) => item.id !== id);
            setCategoriesList(filteredArray);
          } catch (err) {
            console.error(`ops, something is wrong with the delete API ${err}`);
            alertError('categoria', objCategory.description, 'excluir');
          }
        } else {
          alertOk('categoria');
        }
      },
    );
  };

  return (
    <>
      <Header />
      <div className="categories-container">
        <SubHeader name="Categorias" />
        {loading
          ? <img src={loadingGif} alt="Loading..." width="150px" />
          : (
            <ListItems list={categoriesList} onDeleteItem={handleDelete} />
          )}
      </div>
      <Footer />
    </>
  );
}

export default Categories;

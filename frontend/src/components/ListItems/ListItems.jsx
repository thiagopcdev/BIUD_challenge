import React from 'react';
import {
  arrayOf, objectOf, string, func,
} from 'prop-types';
import EditImg from '/edit.png';
import DeleteImg from '/delete.png';
import { Link } from 'react-router-dom';
import { Button } from '..';
import './ListItems.css';

function ListItems({ list, onDeleteItem, type }) {
  return (
    <ul className="list-container">
      {list.map(({ id, description }) => (
        <li key={description}>
          {type === 'article'
            ? (<Link to={`./${id}`}>{description}</Link>)
            : description}
          <div className="list-options">
            <Button title="Edit" link={`./${id}/modify`}>
              <img src={EditImg} alt="Edit option" width="40px" />
            </Button>
            <Button title="Delete" onClick={() => onDeleteItem(id)}>
              <img src={DeleteImg} alt="Delete option" width="40px" />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}

ListItems.propTypes = {
  list: arrayOf(objectOf(string)).isRequired,
  onDeleteItem: func.isRequired,
  type: string,
};

ListItems.defaultProps = {
  type: '',
};

export default ListItems;

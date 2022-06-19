import React from 'react';
import PropTypes from 'prop-types';
import EditImg from '/edit.png';
import DeleteImg from '/delete.png';
import { Button } from '..';
import './ListItems.css';

function ListItems({ name, list, onDeleteItem }) {
  return (
    <ul className="list-container">
      {list.map((item, index) => (
        <li key={item}>
          {item}
          <div className="list-options">
            <Button title="Edit" link={`/${name}/modify/${index + 1}`}>
              <img src={EditImg} alt="Edit option" width="40px" />
            </Button>
            <Button title="Delete" onClick={() => onDeleteItem(index + 1)}>
              <img src={DeleteImg} alt="Delete option" width="40px" />
            </Button>
          </div>
        </li>
      ))}
    </ul>
  );
}

ListItems.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
};

export default ListItems;

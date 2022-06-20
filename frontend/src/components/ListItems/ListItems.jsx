import React from 'react';
import PropTypes from 'prop-types';
import EditImg from '/edit.png';
import DeleteImg from '/delete.png';
import { Link } from 'react-router-dom';
import { Button } from '..';
import './ListItems.css';

function ListItems({ list, onDeleteItem, type }) {
  return (
    <ul className="list-container">
      {list.map((item, index) => (
        <li key={item}>
          {type === 'article'
            ? (<Link to={`./${index + 1}`}>{item}</Link>)
            : item}
          <div className="list-options">
            <Button title="Edit" link={`./${index + 1}/modify`}>
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
  onDeleteItem: PropTypes.func.isRequired,
  type: PropTypes.string,
};

ListItems.defaultProps = {
  type: '',
};

export default ListItems;

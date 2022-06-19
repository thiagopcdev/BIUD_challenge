import React from 'react';
import PropTypes from 'prop-types';
import EditImg from '/edit.png';
import DeleteImg from '/delete.png';
import { Button } from '..';
import './ListItems.css';

function ListItems({ list }) {
  return (
    <ul className="list-container">
      {list.map((item) => (
        <li key={item}>
          {item}
          <div className="list-options">
            <Button title="Edit" link="/">
              <img src={EditImg} alt="Edit option" width="40px" />
            </Button>
            <Button title="Delete">
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
};

export default ListItems;

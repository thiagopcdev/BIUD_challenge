import React from 'react';
import PropTypes from 'prop-types';
import EditImg from '/edit.png';
import DeleteImg from '/delete.png';
import './CategoryList.css';

function CategoryList({ list }) {
  return (
    <ul className="list-container">
      {list.map((item) => (
        <li key={item}>
          {item}
          <div className="list-options">
            <button type="button" title="Edit">
              <img src={EditImg} alt="Edit option" width="40px" />
            </button>
            <button type="button" title="Delete">
              <img src={DeleteImg} alt="Delete option" width="40px" />
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}

CategoryList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default CategoryList;

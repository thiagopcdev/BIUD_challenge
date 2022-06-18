import React from 'react';
import PropTypes from 'prop-types';
import AddImg from '/add.png';
import './SubHeader.css';

function SubHeader({ name }) {
  return (
    <div className="subheader-container">
      <h2>{name}</h2>
      <button type="button" title="Add">
        <img src={AddImg} alt="Add new" width="50px" />
      </button>
    </div>
  );
}

SubHeader.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SubHeader;

import React from 'react';
import PropTypes from 'prop-types';
import AddImg from '/add.png';
import { Button } from '..';
import './SubHeader.css';

function SubHeader({ name }) {
  return (
    <div className="subheader-container">
      <p className="rc-title-page">{name}</p>
      <Button title="Add" link="./new">
        <img src={AddImg} alt="Add new" width="50px" />
      </Button>
    </div>
  );
}

SubHeader.propTypes = {
  name: PropTypes.string.isRequired,
};

export default SubHeader;

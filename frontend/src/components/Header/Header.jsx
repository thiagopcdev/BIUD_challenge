import React from 'react';
import biudLogo from '/biud_logo.png';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <div className="header-container">
      <Link to="/">
        <button type="button" title="Go to Homepage">
          <img src={biudLogo} alt="BIUD logo" width="40px" />
        </button>
      </Link>
    </div>
  );
}

export default Header;

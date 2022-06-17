import React from 'react';
import biudLogo from '/biud.gif';
import './Header.css';

function Header() {
  return (
    <div className="header-container">
      <img src={biudLogo} alt="BIUD logo" width="70px" />
    </div>
  );
}

export default Header;

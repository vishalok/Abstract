import React from 'react';
import abstractLogo from '../assets/abstract.JPG';

function Header() {
  return (
    <>
    <header className="top-header">
        <div className="top-header-container">
            <div className="logo-container">
            <img src={abstractLogo} alt="Abstract Logo" className="logo" /> Abstract
            | <span > &nbsp; Help Center</span>
            </div>
            <button className="request-btn">Submit a request</button>
        </div>
    </header>
    </>

  );
}

export default Header;

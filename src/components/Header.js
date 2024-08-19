import React from 'react';

function Header() {
  return (
    <>
    <header className="top-header">
        <div className="top-header-container">
            <div className="logo-container">
            <img src="../assets/abstract.JPG" alt="Abstract Logo" className="logo" /> Abstract
            | <span > &nbsp; Help Center</span>
            </div>
            <button className="request-btn">Submit a request</button>
        </div>
    </header>
    </>

  );
}

export default Header;

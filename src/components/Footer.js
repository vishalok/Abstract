import React from 'react';
// eslint-disable-next-line
import { BrowserRouter as Link } from 'react-router-dom';

function Footer() {
  return (
    
      <footer className="footer">
        <div className="footer-content">
            <div className="footer-section">
                <h3>Abstract</h3>
                <Link to="#">Branches</Link> <br />
            </div>
            <div className="footer-section">
                <h3>Resources</h3>
                <Link to="#">Blog</Link> <br />
                <Link to="#">Help Center</Link> <br />
                <Link to="#">Release Notes</Link> <br />
                <Link to="#">Status</Link> <br />
            </div>
            <div className="footer-section">
                <h3>Community</h3> <br />
                <Link to="#">Twitter</Link> <br />
                <Link to="#">LinkedIn</Link> <br />
                <Link to="#">Facebook</Link> <br />
                <Link to="#">Dribbble</Link> <br />
                <Link to="#">Podcast</Link> <br />
            </div>
            <div className="footer-section">
                <h3>Company</h3> <br />
                <Link to="#">About Us</Link> <br />
                <Link to="#">Careers</Link> <br />
                <Link to="#">Legal</Link> <br />
                <h5>Contact Us</h5>
                <span> info@abstract.com </span>
            </div>
            <div className="footer-section">
                <br /><br /><br /><br /><br />
                <p>
                    <img src="../assets/abstract.JPG" alt="Abstract Logo" className="logo" /> <br />
                    &copy; Copyright 2022 <br />Abstract Studio Design, Inc.<br /> All rights reserved.
                </p>
        </div>
        </div>
    </footer>
  );
}

export default Footer;

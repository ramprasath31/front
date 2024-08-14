import React from 'react';
import './Claimspage.css';
import logo from './logo1.jpg';
import Features from './Features';

const Claimspage = () => {
  return (
    <div className="claims-page">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="#about">About Us</a>
          <a href="#insurance-types">Our Plans</a>
          <a href="#contact">Contact Us</a>
          <button className="quote-btn">Sign In</button>
        </nav>
      </header>
      <div className="claims-content">
        <h1>Claims Process</h1>
        <p>Submit your claim details here and track the status of your claims. We are committed to processing your claims swiftly and fairly.</p>
        <form className="claims-form">
          <div className="form-group">
            <label htmlFor="claimNumber">Claim Number</label>
            <input type="text" id="claimNumber" name="claimNumber" placeholder="Enter your claim number" />
          </div>
          <div className="form-group">
            <label htmlFor="policyNumber">Policy Number</label>
            <input type="text" id="policyNumber" name="policyNumber" placeholder="Enter your policy number" />
          </div>
          <div className="form-group">
            <label htmlFor="claimDate">Claim Date</label>
            <input type="date" id="claimDate" name="claimDate" />
          </div>
          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea id="description" name="description" placeholder="Describe the nature of the claim" />
          </div>
          <div className="form-group">
            <button type="submit" className="submit-btn">Submit Claim</button>
          </div>
        </form>
      </div>
     
    </div>
  );
};

export default Claimspage;
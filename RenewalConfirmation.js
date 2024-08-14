import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './RenewalConfirmation.css';
import logo from './logo1.jpg';

const RenewalConfirmation = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { policyNumber, insuranceType, renewalDate } = location.state || {};

  const handleGoBackClick = () => {
    navigate('/');
  };

  return (
    <div className="renewal-confirmation-page scrollable-container">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <nav className="navbar">
          <a href="/">Home</a>
          <a href="/about">About Us</a>
          <a href="/insurance-types">Our Plans</a>
          <a href="/contact">Contact Us</a>
        </nav>
      </header>
      <div className="content">
        <h1>Renewal Successful!</h1>
        <p>Your insurance policy has been successfully renewed.</p>
        {policyNumber && (
          <>
            <p><strong>Policy Number:</strong> {policyNumber}</p>
            <p><strong>Insurance Type:</strong> {insuranceType}</p>
            <p><strong>Renewal Date:</strong> {renewalDate}</p>
          </>
        )}
        <button className="go-back-btn" onClick={handleGoBackClick}>
          Go Back to Home
        </button>
      </div>
    </div>
  );
};

export default RenewalConfirmation;

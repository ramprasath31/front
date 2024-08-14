import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import './Dashboardpage.css';
import logo from './logo1.jpg'; 

const Dashboardpage = () => {
  // Example user data
  const userPolicies = [
    {
      policyName: 'Car Insurance',
      policyNumber: 'CAR1234567',
      status: 'Active',
      coverage: '$10,000',
      renewalDate: '2025-08-01',
    },
    {
      policyName: 'Health Insurance',
      policyNumber: 'HLT7654321',
      status: 'Active',
      coverage: '$50,000',
      renewalDate: '2025-09-15',
    },
  ];

  const recentClaims = [
    {
      claimNumber: 'CLM12345',
      policyName: 'Car Insurance',
      status: 'Processing',
      amount: '$2,000',
      date: '2024-07-15',
    },
    {
      claimNumber: 'CLM67890',
      policyName: 'Health Insurance',
      status: 'Approved',
      amount: '$5,000',
      date: '2024-06-10',
    },
  ];

  return (
    <div className="dashboard-page">
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
          

      <div className="dashboard-container2">
        <div className="dashboard-content">
          <h1 className='saran'>Welcome to Your Dashboard</h1>

          {/* User Policies Section */}
          <section className="policies-section">
            <h2>Your Policies</h2>
            <div className="policies">
              {userPolicies.map((policy, index) => (
                <div className="policy-card" key={index}>
                  <h3>{policy.policyName}</h3>
                  <p>Policy Number: {policy.policyNumber}</p>
                  <p>Status: {policy.status}</p>
                  <p>Coverage: {policy.coverage}</p>
                  <p>Renewal Date: {policy.renewalDate}</p>
                  <button>View Details</button>
                </div>
              ))}
            </div>
          </section>

          {/* Recent Claims Section */}
          <section className="claims-section">
            <h2>Recent Claims</h2>
            <div className="claims">
              {recentClaims.map((claim, index) => (
                <div className="claim-card" key={index}>
                  <h3>Claim Number: {claim.claimNumber}</h3>
                  <p>Policy: {claim.policyName}</p>
                  <p>Status: {claim.status}</p>
                  <p>Amount: {claim.amount}</p>
                  <p>Date: {claim.date}</p>
                  <button>View Details</button>
                </div>
              ))}
            </div>
          </section>

          {/* Additional Dashboard Features */}
          <section className="additional-features">
            <h2>Manage Your Account</h2>
            <div className="features">
              <button>Update Profile</button>
              <button>View Billing</button>
              <button>Submit a Claim</button>
            </div>
          </section>
        </div>

        <div className="dashboard-image">
          <img className='image' src="/images/fams1.png" alt="Dashboard Illustration" />
        </div>
      </div>
    </div>
  );
};

export default Dashboardpage;
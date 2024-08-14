import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import InsuranceTypes from './InsuranceTypes';
import AuthContainer from './AuthContainer';
import PlansPage from './PlansPage';
import InsuranceRenewal from './InsuranceRenewal';
import RenewalConfirmation from './RenewalConfirmation';
import InsuranceApplicationPage from './InsuranceApplicationPage';
import ClaimsPage from './Claimspage';
import DashboardPage from './Dashboardpage';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthContainer/>}/>
        <Route path="/insurance-types" element={<InsuranceTypes />} />
        <Route path="/plans/:insuranceType" element={<PlansPage/>}/>
        <Route path="/renew" element={<InsuranceRenewal />} />
        <Route path="/confirmation" element={<RenewalConfirmation />} />
        <Route path="/application" element={<InsuranceApplicationPage />} />
        <Route path="/claim" element={<ClaimsPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      
      </Routes>
    </Router>
  );
};

export default App;
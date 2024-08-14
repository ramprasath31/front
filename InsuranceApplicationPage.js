import React, { useState } from 'react';
import './InsuranceApplicationPage.css';

const InsuranceApplicationPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    region: '',
    postalCode: '',
    country: 'India',
    phone: '',
    email: '',
    business: '',
    coverageLimit: '',
    annualRevenue: '',
    quoteAmount: '0.00',
    captchaVerified: false,
    policyName: '',
    policyNumber: '',
    insuranceType: 'Car', // Default insurance type
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    
    // Required fields
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone) newErrors.phone = 'Phone number is required';
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone number must be 10 digits';
    if (!formData.policyName) newErrors.policyName = 'Policy name is required';
    if (!formData.policyNumber) newErrors.policyNumber = 'Policy number is required';
    if (!formData.captchaVerified) newErrors.captcha = 'Captcha verification is required';

    // Numeric fields
    if (formData.coverageLimit && isNaN(formData.coverageLimit)) newErrors.coverageLimit = 'Coverage Limit must be a number';
    if (formData.annualRevenue && isNaN(formData.annualRevenue)) newErrors.annualRevenue = 'Annual Revenue must be a number';
    if (formData.quoteAmount && isNaN(formData.quoteAmount)) newErrors.quoteAmount = 'Quote Amount must be a number';

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Submit form data to the backend or process it here
      console.log('Form data submitted:', formData);
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        address1: '',
        address2: '',
        city: '',
        region: '',
        postalCode: '',
        country: 'India',
        phone: '',
        email: '',
        business: '',
        coverageLimit: '',
        annualRevenue: '',
        quoteAmount: '0.00',
        captchaVerified: false,
        policyName: '',
        policyNumber: '',
        insuranceType: 'Car',
      });
      setErrors({});
    }
  };

  const handleCaptcha = () => {
    setFormData({
      ...formData,
      captchaVerified: true,
    });
  };

  return (
    <div className="insurance-application-container">
      <h1>Insurance Application Form</h1>
      <p>
        Fill out the following form as completely as possible. Once you have completed the form,
        click the Submit button to send your information. Your request will be handled promptly.
      </p>
      <form onSubmit={handleSubmit}>
        {/* Name Fields */}
        <div className="form-group">
          <label>Name</label>
          <div className="name-inputs">
            <input
              type="text"
              name="firstName"
              placeholder="First"
              value={formData.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          {errors.firstName && <p className="error">{errors.firstName}</p>}
          {errors.lastName && <p className="error">{errors.lastName}</p>}
        </div>

        {/* Address Fields */}
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address1"
            placeholder="Street Address"
            value={formData.address1}
            onChange={handleChange}
          />
       
          <div className="address-inputs">
            <input
              type="text"
              name="city"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
            />
            <input
              type="text"
              name="region"
              placeholder="Region"
              value={formData.region}
              onChange={handleChange}
            />
          </div>
          <div className="address-inputs">
            <input
              type="text"
              name="postalCode"
              placeholder="Postal / Zip Code"
              value={formData.postalCode}
              onChange={handleChange}
            />
            <select
              name="country"
              value={formData.country}
              onChange={handleChange}
            >
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
              {/* Add more countries as needed */}
            </select>
          </div>
        </div>

        {/* Phone Field */}
        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            name="phone"
            placeholder="### ### ####"
            value={formData.phone}
            onChange={handleChange}
          />
          {errors.phone && <p className="error">{errors.phone}</p>}
        </div>

        {/* Email Field */}
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>

        {/* Policy Name Field */}
        <div className="form-group">
          <label>Policy Name</label>
          <input
            type="text"
            name="policyName"
            placeholder="Policy Name"
            value={formData.policyName}
            onChange={handleChange}
          />
          {errors.policyName && <p className="error">{errors.policyName}</p>}
        </div>

        {/* Policy Number Field */}
        <div className="form-group">
          <label>Policy Number</label>
          <input
            type="text"
            name="policyNumber"
            placeholder="Policy Number"
            value={formData.policyNumber}
            onChange={handleChange}
          />
          {errors.policyNumber && <p className="error">{errors.policyNumber}</p>}
        </div>

        {/* Insurance Type Field */}
        <div className="form-group">
          <label>Insurance Type</label>
          <select
            name="insuranceType"
            value={formData.insuranceType}
            onChange={handleChange}
          >
            <option value="Car">Car Insurance</option>
            <option value="Bike">Bike Insurance</option>
            <option value="Travel">Travel Insurance</option>
          </select>
        </div>

        {/* Business Field */}
        <div className="form-group">
          <label>Business</label>
          <input
            type="text"
            name="business"
            placeholder="Business"
            value={formData.business}
            onChange={handleChange}
          />
        </div>

        {/* Coverage Limit Field */}
        <div className="form-group">
          <label>Coverage Limit</label>
          <input
            type="text"
            name="coverageLimit"
            placeholder="Coverage Limit"
            value={formData.coverageLimit}
            onChange={handleChange}
          />
          {errors.coverageLimit && <p className="error">{errors.coverageLimit}</p>}
        </div>

        {/* Annual Revenue Field */}
        <div className="form-group">
          <label>Annual Revenue</label>
          <input
            type="text"
            name="annualRevenue"
            placeholder="Annual Revenue"
            value={formData.annualRevenue}
            onChange={handleChange}
          />
          {errors.annualRevenue && <p className="error">{errors.annualRevenue}</p>}
        </div>

        {/* Quote Amount Field */}
        <div className="form-group">
          <label>Quote Amount</label>
          <input
            type="text"
            name="quoteAmount"
            placeholder="USD 0.00"
            value={formData.quoteAmount}
            onChange={handleChange}
          />
          {errors.quoteAmount && <p className="error">{errors.quoteAmount}</p>}
        </div>

        {/* Captcha */}
        <div className="form-group captcha">
          <label>Verification*</label>
          <div className="recaptcha" onClick={handleCaptcha}>
            <input type="checkbox" checked={formData.captchaVerified} readOnly />
            <span>I am not a robot</span>
          </div>
          {errors.captcha && <p className="error">{errors.captcha}</p>}
        </div>

        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
};

export default InsuranceApplicationPage;
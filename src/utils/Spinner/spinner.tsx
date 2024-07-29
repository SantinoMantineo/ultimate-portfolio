// components/Spinner.tsx
import React from 'react';
import './spinner.css';

const Spinner: React.FC = () => (
  <div className="spinner-overlay">
    <div className="spinner"></div>
  </div>
);

export default Spinner;

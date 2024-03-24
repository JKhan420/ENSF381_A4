import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{ padding: '1rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <img src="/images/logo.png" alt="Company Logo" style={{ height: '50px' }} />
        <h2 style={{ fontWeight: 'normal' }}>Company Name</h2>
      </div>
      <nav style={{ display: 'flex', justifyContent: 'space-between', marginTop: '1rem', width: '100%' }}>
        <Link to="/" style={{ margin: '0 10px' }}>Home</Link>
        <Link to="/products" style={{ margin: '0 10px' }}>Products</Link>
        <Link to="/login" style={{ margin: '0 10px' }}>Login</Link>
      </nav>
    </header>
  );
};

export default Header;

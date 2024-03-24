import React from 'react';

const Footer = () => {
  return (
    <footer style={{ textAlign: 'center', padding: '1rem', marginTop: '1rem', backgroundColor: '#f0f0f0' }}>
      © {new Date().getFullYear()} Company Name. All rights reserved.
    </footer>
  );
};

export default Footer;
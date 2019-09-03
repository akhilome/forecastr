import React from 'react';
import './index.scss';

const Footer = () => {
  return (
    <footer>
      <p>&copy; {new Date(Date.now()).getFullYear()}</p>
    </footer>
  );
};

export default Footer;

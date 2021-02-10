import React from 'react';

export const Footer = () => {
  const today = new Date();
  const fullYear = today.getFullYear();
  return (
    <div className="footer">
      <div>
        <p style={{ margin: '0' }}>ADITYA ASTONO</p>
      </div>
      <div>{ fullYear }</div>
      <div>
        <div className="dots aaaa-yellow"/>
        <div className="dots aaaa-red"/>
        <div className="dots aaaa-blue"/>
        <div className="dots aaaa-white"/>
      </div>
    </div>
  );
};

export default Footer;
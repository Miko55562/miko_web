// Header.js
import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>TEST Mikhail</h1>
    </header>
  );
};

const headerStyle = {
  font: "Fira Sans",
  background: '#333',
  color: '#fff',
  textAlign: 'left',
  padding: '1rem',
};

export default Header;

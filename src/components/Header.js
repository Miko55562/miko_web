// Header.js
import React from 'react';

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Пудовнин Михаил</h1>
      <p>Фронтенд Разработчик</p>
    </header>
  );
};

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'center',
  padding: '1rem',
};

export default Header;

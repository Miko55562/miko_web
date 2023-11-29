// Header.js
import React from 'react';

const Header = () => {
  return (
    <header className="header-container" style={headerStyle}>
      <div className="flex justify-between items-center px-6 pt-6 pb-0 xs:landscape:px-12flex justify-between items-center px-6 pt-6 pb-0 xs:landscape:px-12">
        <div className="flex items-center">
          <a href="http://localhost:3000/">Miko</a>
        </div>
        <a className="flex items-center gap-1 group cursor-pointer" 
        href="https://stackoverflow.com/">cv download</a>
      </div>
    </header>
  );
};

const headerStyle = {
  background: '#333',
  color: '#fff',
  textAlign: 'left',
  padding: '1rem',
};

export default Header;

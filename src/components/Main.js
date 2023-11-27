import React from 'react';
import Titles from './AboutMe'
import Contact from './Contact'


const Main = () => {
  return (
    <div style={mainStyle}>
        <Titles />
        <Contact />
    </div>
  );
};

const mainStyle = {
  height: "100vh",
  font: "Fira Sans",
  background: '#333',
  color: '#111',
  textAlign: 'left',
  padding: '1rem',
};

export default Main;

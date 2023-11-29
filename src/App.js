import React from 'react';
import Main from './components/Main';
import Header from './components/Header';

function App() {
  return (
    <div className="app-container" style={appStyle}>
      <Header />
      <Main />
    </div>
  );
}

const appStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
};

export default App;

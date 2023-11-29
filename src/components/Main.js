import React from 'react';

const Main = () => {
  return (
    <main className="main-container" style={mainStyle}>
      <section>
        <h2>PUDOVNIN MIKHAIL</h2>
      </section>
      <section>
        <div style={futerStyle}>
          <div style={{ transform: "rotate(270deg)", padding: '40vh', textAlign: 'right' }}>
            <h1>CONT</h1>
          </div>
        </div>
      </section>
    </main>
  );
};

const mainStyle = {
  overflow: 'hidden',
  paddingTop: '240px',
  paddingBottom: '6px',
  paddingLeft: '6px',
  paddingRight: '6px',
  fontFamily: 'Fira Sans, sans-serif',
  fontWeight: 'normal',
  textAlign: 'left',
  color: '#111',
  background: '#333',
};

const futerStyle = {
  flex: 1,
  overflow: 'hidden',
  textAlign: 'right',
  padding: 'right',
  paddingTop: '60vh'
}

export default Main;
